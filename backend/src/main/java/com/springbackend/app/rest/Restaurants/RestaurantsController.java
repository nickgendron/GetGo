package com.springbackend.app.rest.Restaurants;
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

@RequestMapping(path="/api/restaurants")
@RestController
public class RestaurantsController {
    @Autowired
    private RestaurantsRepo restaurantsRepo;

    //LatLong?

    @GetMapping(path = "nearbyRestaurants")
    public JsonArray nearbyRestaurants(@RequestParam String location) throws IOException{
        /* Determine the coordinates of location */
        //String destCords = getLatLong(location);
        String destCords = "30.4515, -91.1871";
        /* Get API key */
        String tripAdvisorAPI = System.getenv("TRIP_ADVISOR");

        /* API call configuration for TripAdvisor nearby_search endpoint */
        OkHttpClient nearbySearchClient = new OkHttpClient();
        Request nearbySearchRequest = new Request.Builder()
                .url("https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=" + destCords + "&key="
                        + tripAdvisorAPI + "&category=restaurants&radius=20&radiusUnit=mi&language=en")
                .get()
                .addHeader("accept", "application/json")
                .build();
        Response nearbySearchResponse = nearbySearchClient.newCall(nearbySearchRequest).execute();

        /* Converting nearbySearchResponse to string */
        String nearbySearchResponseString = nearbySearchResponse.body().string();

        /* Converting nearbySearchResponseString into a json array of json objects to be parsed */
        JsonObject nearbySearchJsonObject = new Gson().fromJson(nearbySearchResponseString, JsonObject.class);
        JsonArray nearbyLocationSearchArray = nearbySearchJsonObject.getAsJsonArray("data");

        JsonArray restaurantArray = new JsonArray();

        for (JsonElement jsonIterator : nearbyLocationSearchArray) {

            /*Bob is man and lame, so this is Kim's bestie Eve and she's better at building */
            Restaurants.RestaurantsBuilder eve = new Restaurants.RestaurantsBuilder();

            /* Create a new restaurantsJsonObject each iteration to add to restaurantArray */
            JsonObject restaurantJsonObject = new JsonObject();
            JsonObject dataObject = jsonIterator.getAsJsonObject();

            /* Extract the desired fields from the data object */
            String locationId = dataObject.get("location_id").getAsString();
            String name = dataObject.get("name").getAsString();

            String fullAddress = dataObject.get("address_obj").getAsJsonObject().get("address_string").getAsString();
            String addressString = dataObject.get("address_obj").getAsJsonObject().get("address_string").getAsString();

            /* Add properties to restaurantJsonObject */
            restaurantJsonObject.addProperty("location_id", locationId);
            restaurantJsonObject.addProperty("name", name);
            restaurantJsonObject.addProperty("address_string", fullAddress);

            /* Slay Eve pick up that information */
            eve.locationID(locationId);
            eve.restName(name);
            eve.fullAddress(fullAddress);
            //WHAT
            restaurantJsonObject.addProperty("address_string", addressString);
            /*
                Getting more information on each restaurant returned by nearby_search API.
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

            /* Go Eve, extract the description field!! */
            if(locationSearchJsonObject.has("description")){
                String description = locationSearchJsonObject.get("description").getAsString();
                description = description.replaceAll("\\n", "");
                restaurantJsonObject.addProperty("description", description);
                eve.description(description);
            }
            /* Eve get handed the rating field */
            if(locationSearchJsonObject.has("rating")) {
                String rating = locationSearchJsonObject.get("rating").getAsString();
                restaurantJsonObject.addProperty("rating", rating);

                eve.rating(rating);
            }


            /* Eve loves to get links to see more photos*/
            if(locationSearchJsonObject.has("see_all_photos")) {
                String imagesUrl = locationSearchJsonObject.get("see_all_photos").getAsString();
                restaurantJsonObject.addProperty("images_url", imagesUrl);

                eve.photosURL(imagesUrl);
            }


            /* Eve is very frugal so she wants to extract the price level*/
            if(locationSearchJsonObject.has("price_level")) {
                String priceLevel = locationSearchJsonObject.get("price_level").getAsString();
                restaurantJsonObject.addProperty("price_level", priceLevel);

                eve.priceLevel(priceLevel);
            }


            /* Eve wants to go to the website*/
            if (locationSearchJsonObject.has("website")) {
                String websiteURL = locationSearchJsonObject.get("website").getAsString();
                restaurantJsonObject.addProperty("website_url", websiteURL);

                eve.websiteURL(websiteURL);
            }
            /* Use the information Eve has gathered much better than bob to build our restaurants */
            Restaurants restaurant = eve.build();
            /* Save the new restaurant to the database */
            restaurantsRepo.save(restaurant);
            /* Add the instance of restaurantJsonObject to the returning json array */
            restaurantArray.add(restaurantJsonObject);

        }
        /* Add the instance of restaurantJsonObject to the returning json array */
        return restaurantArray;

    }
}
