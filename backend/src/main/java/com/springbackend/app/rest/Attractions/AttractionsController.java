package com.springbackend.app.rest.Attractions;
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

@RequestMapping(path="/api/attraction")
@RestController
public class AttractionsController {

    @Autowired
    private AttractionsRepo attractionsRepo;

    //LatLong?

    @GetMapping(path = "nearbyAttractions")
    public JsonArray nearbyAttractions(@RequestParam String location) throws IOException{
        /* Determine the coordinates of location */
        //String destCords = getLatLong(location);
        String destCords = "30.4515, -91.1871";
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

        JsonArray attractionArray = new JsonArray();

        for (JsonElement jsonIterator : nearbyLocationSearchArray) {

            /*Bob is man and lame, so this is Kim and she's better at building */
            Attractions.AttractionsBuilder kim = new Attractions.AttractionsBuilder();

            /* Create a new hotelJsonObject each iteration to add to hotelArray */
            JsonObject attractionJsonObject = new JsonObject();
            JsonObject dataObject = jsonIterator.getAsJsonObject();

            /* Extract the desired fields from the data object */
            String locationId = dataObject.get("location_id").getAsString();
            String name = dataObject.get("name").getAsString();

            String fullAddress = dataObject.get("address_obj").getAsJsonObject().get("address_string").getAsString();
            String addressString = dataObject.get("address_obj").getAsJsonObject().get("address_string").getAsString();

            /* Add properties to hotelJsonObject */
            attractionJsonObject.addProperty("location_id", locationId);
            attractionJsonObject.addProperty("name", name);
            attractionJsonObject.addProperty("address_string", fullAddress);

            /* Slay Kim pick up that information */
            kim.locationID(locationId);
            kim.attrName(name);
            kim.fullAddress(fullAddress);
            //WHAT
            attractionJsonObject.addProperty("address_string", addressString);
            /*
                Getting more information on each hotel returned by nearby_search API.
                Use the location_id to query the location_details API and extract
                desired values.
             */
            OkHttpClient locationDetailsClient = new OkHttpClient();
            Request locationSearchRequest = new Request.Builder()
                    .url("https://api.content.tripadvisor.com/api/v1/location/" + locationId
                            + "/details?key=" + tripAdvisorAPI + "&language=en&ddcurrency=USD"
                            + "/details?key=" + tripAdvisorAPI + "&language=en&ddcurrency=USD"
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
            /* Use the information Kim has gathered much better than bob to build our hotel */
            Attractions attraction = kim.build();
            /* Save the new attraction to the database */
            attractionsRepo.save(attraction);
            /* Add the instance of attractionJsonObject to the returning json array */
            attractionArray.add(attractionJsonObject);

        }
        /* Add the instance of attractionJsonObject to the returning json array */
        return attractionArray;

    }

}
