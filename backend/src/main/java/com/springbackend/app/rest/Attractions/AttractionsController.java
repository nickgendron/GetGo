package com.springbackend.app.rest.Attractions;
import com.google.gson.*;
import com.springbackend.app.rest.Flights.FlightObjects.Flights;
import com.springbackend.app.rest.Hotels.Hotels;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.UUID;

@RequestMapping(path="/api/attractions")
@RestController
public class AttractionsController {

    @Autowired
    private AttractionsRepo attractionsRepo;


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

    @CrossOrigin(origins = "http://localhost:3000/")
    @GetMapping(path = "/nearbyAttractions")
    public String nearbyAttractions(@RequestParam String location) throws IOException{
        /* Determine the coordinates of location */
        String destCords = getLatLong(location);

        /* Get API key */
        String tripAdvisorAPI = System.getenv("TRIP_ADVISOR_NEW");


        /* API call configuration for TripAdvisor nearby_search endpoint */
        OkHttpClient nearbySearchClient = new OkHttpClient();
        Request nearbySearchRequest = new Request.Builder()
                .url("https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=" + destCords + "&key="
                        + tripAdvisorAPI + "&category=attractions&radius=20&radiusUnit=mi&language=en")
                .get()
                .addHeader("accept", "application/json")
                .build();
        Response nearbySearchResponse = nearbySearchClient.newCall(nearbySearchRequest).execute();

        /* Converting nearbySearchResponse to string */
        String nearbySearchResponseString = nearbySearchResponse.body().string();

        /* Converting nearbySearchResponseString into a json array of json objects to be parsed */
        JsonObject nearbySearchJsonObject = new Gson().fromJson(nearbySearchResponseString, JsonObject.class);
        JsonArray nearbyLocationSearchArray = nearbySearchJsonObject.getAsJsonArray("data");

        JsonArray attractionArray = new JsonArray();

        String attractionsOfferGroup = UUID.randomUUID().toString();

        for (JsonElement jsonIterator : nearbyLocationSearchArray) {


            String attractionsID = UUID.randomUUID().toString();

            /*Bob is man and lame, so this is Kim and she's better at building */
            Attractions.AttractionsBuilder kim = new Attractions.AttractionsBuilder();

            /* Create a new attractionJsonObject each iteration to add to attractionArray */
            JsonObject attractionJsonObject = new JsonObject();
            JsonObject dataObject = jsonIterator.getAsJsonObject();

            /* Extract the desired fields from the data object */
            String locationId = dataObject.get("location_id").getAsString();
            String name = dataObject.get("name").getAsString();

            String fullAddress = dataObject.get("address_obj").getAsJsonObject().get("address_string").getAsString();
            String addressString = dataObject.get("address_obj").getAsJsonObject().get("address_string").getAsString();

            /* Add properties to attractionJsonObject */
            attractionJsonObject.addProperty("location_id", locationId);
            attractionJsonObject.addProperty("attractionsOfferGroup", attractionsOfferGroup);
            attractionJsonObject.addProperty("attrName", name);
            attractionJsonObject.addProperty("address_string", fullAddress);

            /* Slay Kim pick up that information */
            kim.locationID(locationId);
            kim.attrName(name);
            kim.fullAddress(fullAddress);
            kim.attractionOfferGroup(attractionsOfferGroup);
            kim.attractionsID(attractionsID);

            /*
                Getting more information on each attraction returned by nearby_search API.
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

            /* Kim supremacy, Extract the description field and hand-off to KIM!! */
            if(locationSearchJsonObject.has("description")){
                String description = locationSearchJsonObject.get("description").getAsString();
                description = description.replaceAll("\\n", "");
                attractionJsonObject.addProperty("description", description);
                kim.description(description);
            }
            /* Kim get handed the rating field */
            if(locationSearchJsonObject.has("rating")) {
                String rating = locationSearchJsonObject.get("rating").getAsString();
                attractionJsonObject.addProperty("rating", rating);

                kim.rating(rating);
            }
            /* KIM loves to get links to see more photos*/
            if(locationSearchJsonObject.has("see_all_photos")) {
                String imagesUrl = locationSearchJsonObject.get("see_all_photos").getAsString();
                attractionJsonObject.addProperty("images_url", imagesUrl);

                kim.photosURL(imagesUrl);
            }
            /* Kim is very frugal so she wants to extract the price level*/
            if(locationSearchJsonObject.has("price_level")) {
                String priceLevel = locationSearchJsonObject.get("price_level").getAsString();
                attractionJsonObject.addProperty("price_level", priceLevel);

                kim.priceLevel(priceLevel);
            }
            /* Kim wants to go to the website*/
            if (locationSearchJsonObject.has("website")) {
                String websiteURL = locationSearchJsonObject.get("website").getAsString();
                attractionJsonObject.addProperty("website_url", websiteURL);

                kim.websiteURL(websiteURL);
            }
            /* Use the information Kim has gathered much better than bob to build our attraction */
            Attractions attraction = kim.build();
            /* Save the new attraction to the database */
            attractionsRepo.save(attraction);
            /* Add the instance of attractionJsonObject to the returning json array */
            attractionArray.add(attractionJsonObject);

        }
        /* Add the instance of attractionJsonObject to the returning json array */
        return attractionsOfferGroup;

    }



    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/getAttractionsByOfferGroupID")
    public JsonElement getAttractionsByOfferGroupID(String offerGroupID){
        Iterable<Attractions> attractions = attractionsRepo.findByAttractionsGroup(offerGroupID);
        return parseJson(attractions);
    }

    private JsonElement parseJson(Iterable<Attractions> attractions){
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        JsonParser jp = new JsonParser();
        JsonElement jsonElement = jp.parse(gson.toJson(attractions));
        return jsonElement;
    }

}
