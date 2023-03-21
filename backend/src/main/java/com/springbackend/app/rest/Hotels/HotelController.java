package com.springbackend.app.rest.Hotels;

import com.google.gson.*;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.List;


@RequestMapping(path="/api/hotel")
@RestController
public class HotelController {

    @Autowired
    private HotelsRepo hotelsRepo;



    @GetMapping(path = "/latlong")
    public String getLatLong(@RequestParam String fullAddress) throws IOException {

        /* Encode the address */
        String query = URLEncoder.encode(fullAddress, "UTF-8");

        /* Get API key and create URL to query */
        final String positionStackKey = System.getenv("POSITION_STACK");

        /* Call to PositionStack address to coordinates API */
        OkHttpClient latLongClient = new OkHttpClient();
        Request latLongRequest = new Request.Builder()
                .url("http://api.positionstack.com/v1/forward?access_key=" + positionStackKey + "&query=" + fullAddress)
                .get()
                .build();
        Response latLongResponse = latLongClient.newCall(latLongRequest).execute();


        /* Convert response to string */
        String latLongString = latLongResponse.body().string();

        /* Convert response to JsonArray */
        JsonObject nearbySearchJsonObject = new Gson().fromJson(latLongString, JsonObject.class);
        JsonArray latLongArray = nearbySearchJsonObject.getAsJsonArray("data");

        /* String that will be returned */
        String returnString = new String();

        /* Iterate over latLongArray and extract lat/long values */
        for (JsonElement jsonIterator : latLongArray) {
            JsonObject dataObject = jsonIterator.getAsJsonObject();
            String latitude = dataObject.get("latitude").getAsString();
            String longitude = dataObject.get("longitude").getAsString();
            returnString = latitude + "," + longitude;

        }

        return returnString;
    }



    @GetMapping(path = "/nearbyHotels")
    public JsonArray nearbyHotels(@RequestParam String location) throws IOException {

        /* Determine the coordinates of location */
        String destCords = getLatLong(location);


        /* Get API key */
        String tripAdvisorAPI = System.getenv("TRIP_ADVISOR");

        /* API call configuration for TripAdvisor nearby_search endpoint */
        OkHttpClient nearbySearchClient = new OkHttpClient();
        Request nearbySearchRequest = new Request.Builder()
                .url("https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=" + destCords + "&key="
                        + tripAdvisorAPI + "&category=hotels&radius=20&radiusUnit=mi&language=en")
                .get()
                .addHeader("accept", "application/json")
                .build();
        Response nearbySearchResponse = nearbySearchClient.newCall(nearbySearchRequest).execute();

        /* Converting nearbySearchResponse to string */
        String nearbySearchResponseString = nearbySearchResponse.body().string();

        /* Converting nearbySearchResponseString into a json array of json objects to be parsed */
        JsonObject nearbySearchJsonObject = new Gson().fromJson(nearbySearchResponseString, JsonObject.class);
        JsonArray nearbyLocationSearchArray = nearbySearchJsonObject.getAsJsonArray("data");

        /* JsonArray that will be returned containing information of hotels at a given location */
        JsonArray hotelArray = new JsonArray();

        for (JsonElement jsonIterator : nearbyLocationSearchArray) {


            /*
                Meet Bob! He will help you build your hotel!

                Bob is our well trusted builder! He has won many awards for helping
                to build many great things. But, with all great builders comes their enemies seeking to destroy
                them and their livelihoods.

                BOB WILL RULE SUPREME AGAINST EVE AND KIM!
            */
            Hotels.HotelsBuilder bob = new Hotels.HotelsBuilder();


            /* Create a new hotelJsonObject each iteration to add to hotelArray */
            JsonObject hotelJsonObject = new JsonObject();

            JsonObject dataObject = jsonIterator.getAsJsonObject();

            /* Extract the desired fields from the data object */
            String locationId = dataObject.get("location_id").getAsString();
            String name = dataObject.get("name").getAsString();

            String fullAddress = dataObject.get("address_obj").getAsJsonObject().get("address_string").getAsString();
            String addressString = dataObject.get("address_obj").getAsJsonObject().get("address_string").getAsString();

            /* Add properties to hotelJsonObject */
            hotelJsonObject.addProperty("location_id", locationId);
            hotelJsonObject.addProperty("name", name);
            hotelJsonObject.addProperty("fullAddress", fullAddress);

            /* Give Bob some information to pick up */
            bob.locationID(locationId);
            bob.hotelName(name);
            bob.fullAddress(fullAddress);

            //hotelJsonObject.addProperty("address_string", addressString);

            /*
                Getting more information on each hotel returned by nearby_search API.
                Use the location_id to query the location_details API and extract
                desired values.
             */
            OkHttpClient locationDetailsClient = new OkHttpClient();
            Request locationSearchRequest = new Request.Builder()
                    .url("https://api.content.tripadvisor.com/api/v1/location/" + locationId
                            + "/details?key=" + tripAdvisorAPI + "&language=en&currency=USD")
                    .get()
                    .addHeader("accept", "application/nearbySearchResponseString")
                    .build();

            /* Raw API nearbySearchResponse */
            Response locationDetailsResponse = locationDetailsClient.newCall(locationSearchRequest).execute();


            /* Converting raw nearbySearchResponse to string */
            String locationDetailsResponseString = locationDetailsResponse.body().string();

            /* Converting responseString into Json for processing */
            Gson gson = new Gson();
            JsonObject locationSearchJsonObject = gson.fromJson(locationDetailsResponseString, JsonObject.class);


            /* Extract the description field and hand-off to Bob */
            if(locationSearchJsonObject.has("description")){
                String description = locationSearchJsonObject.get("description").getAsString();
                description = description.replaceAll("\\n", "");
                hotelJsonObject.addProperty("description", description);

                bob.description(description);
            }


            /* Extract the rating field and hand-off to Bob */
            if(locationSearchJsonObject.has("rating")) {
                String rating = locationSearchJsonObject.get("rating").getAsString();
                hotelJsonObject.addProperty("rating", rating);

                bob.rating(rating);
            }


            /* Extract the link to view more photos and hand-off to Bob */
            if(locationSearchJsonObject.has("see_all_photos")) {
                String imagesUrl = locationSearchJsonObject.get("see_all_photos").getAsString();
                hotelJsonObject.addProperty("images_url", imagesUrl);

                bob.photosURL(imagesUrl);
            }


            /* Extract the price level and hand-off to Bob */
            if(locationSearchJsonObject.has("price_level")) {
                String priceLevel = locationSearchJsonObject.get("price_level").getAsString();
                hotelJsonObject.addProperty("price_level", priceLevel);

                bob.priceLevel(priceLevel);
            }



            if (locationSearchJsonObject.has("website")) {
                String websiteURL = locationSearchJsonObject.get("website").getAsString();
                hotelJsonObject.addProperty("website_url", websiteURL);

                bob.websiteURL(websiteURL);
            }

            /*
                Use the information Bob has gathered to build our hotel.

                Throughout his walk over DataLand, Bob has meticulously picked up the data that he was asked to.
                Bob has done a very good job, and he is about to build a beautiful Hotel for us, something that
                Eve and Kim could only ever dream of doing. They are only worried about restaurants and fun things to do
            */
            Hotels hotel = bob.build();

            /* Save the new hotel to the database */
            hotelsRepo.save(hotel);

            /* Add the instance of hotelJsonObject to the returning json array */
            hotelArray.add(hotelJsonObject);

            }

        /* Add the instance of hotelJsonObject to the returning json array */
        return hotelArray;
    }

    @GetMapping(path="/getHotelByHotelID")
    public String getHotelByHotelID(@RequestParam String locationID){

        String hotel = hotelsRepo.findByLocationID(locationID);

         return hotel;
    }



}



