package com.springbackend.app.rest.Flights;

import com.amadeus.Amadeus;
import com.amadeus.Params;
import com.amadeus.exceptions.ResponseException;
import com.amadeus.resources.FlightOfferSearch;
import java.io.IOException;
import java.util.UUID;
import com.amadeus.resources.FlightOfferSearch.AirportInfo;
import com.amadeus.resources.FlightOfferSearch.Itinerary;
import com.google.gson.*;
import com.springbackend.app.rest.Flights.FlightObjects.Flights;
import com.springbackend.app.rest.Flights.ItineraryObjects.Itineraries;
import com.springbackend.app.rest.Flights.ItineraryObjects.ItinerariesRepo;
import com.springbackend.app.rest.Flights.SegmentObject.Segments;
import com.springbackend.app.rest.Flights.SegmentObject.SegmentsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.*;
import java.util.List;

@RequestMapping(path="/api/flights")
@RestController
public class FlightsController {

    final String AMADEUS_CLIENT_ID = System.getenv("AMADEUS_CLIENT");
    final String AMADEUS_CLIENT_SECRET = System.getenv("AMADEUS_SECRET");
    Amadeus amadeus = Amadeus
            .builder(AMADEUS_CLIENT_ID, AMADEUS_CLIENT_SECRET)
            .build();

    @Autowired
    private FlightsRepo flightsRepo;

    @Autowired
    private ItinerariesRepo itineraryRepo;

    @Autowired
    private SegmentsRepo segmentRepo;

    @GetMapping(path="/prices")
    public JsonArray getFlightInformation(@RequestParam String originCode, @RequestParam String destCode,
                                            @RequestParam String departDate, @RequestParam String returnDate,
                                            @RequestParam int adults, @RequestParam int numFlights)
            throws ResponseException, IOException {

        /* Call to amadeus flight offer search API. Returns data as a FlightOffer search array */
        FlightOfferSearch[] flightOffers = amadeus.shopping.flightOffersSearch.get(
                Params.with("originLocationCode", originCode)
                        .and("destinationLocationCode", destCode)
                        .and("departureDate", departDate)
                        .and("returnDate", returnDate)
                        .and("adults", adults)
                        .and("max", numFlights)
                        .and("currencyCode", "USD"));

        /* JsonArray that will be returned */
        JsonArray flightOfferArray = new JsonArray();

        /* Ensure that a valid response was received */
        if(flightOffers.length > 0){

            Gson gson = new Gson();

            /* Iterate over flightOfferArray */
            for (int i = 0; i < flightOffers.length; i++) {

                /* Load offer i received by the response */
                FlightOfferSearch offer = flightOffers[i];

                double totalPrice = offer.getPrice().getGrandTotal();

                /* Generate flightID */
                String flightID = UUID.randomUUID().toString();

                /* Construct a JsonObject for each flight offer received */
                JsonObject offerJson = new JsonObject();
                offerJson.addProperty("flightID", flightID);
                offerJson.addProperty("optionNumber", i + 1);
                offerJson.addProperty("totalPrice", totalPrice);

                /* Create new flight object and save to database */
                Flights flight = new Flights(offerJson);
                flightsRepo.save(flight);

                /* JsonArray to hold all segments within an itinerary */
                JsonArray itineraryArray = new JsonArray();

                /* Track number of segments (flights) for each leg of trip (departing/returning), set to 0 initially */
                AtomicReference<AtomicInteger> numOfSegments = new AtomicReference<>(new AtomicInteger());

                /* Iterate each itinerary from each flight offer */
                for (Itinerary itinerary : offer.getItineraries()) {

                    /* Counter for tracking the number of flights in each segment */
                    AtomicReference<AtomicInteger> numOfFlights = new AtomicReference<>(new AtomicInteger());

                    /* JsonObject for holding both itineraries (departing/returning) */
                    JsonObject itineraryJson = new JsonObject();


                    /* Iterate each JsonObject to extract information on the flight segments */
                    List<JsonObject> segmentJsonObjects = Arrays.stream(itinerary.getSegments())
                            .map(segment ->
                            {

                                /*
                                    Pointers for airport information for both the departing and returning airports
                                    provided by the Amadeus SDK
                                 */
                                AirportInfo departure = segment.getDeparture();
                                AirportInfo arrival = segment.getArrival();

                                /* Strings to hole raw UTC timestamp */
                                String arrivalTimestamp = segment.getArrival().getAt().toString();
                                String departureTimestamp = segment.getDeparture().getAt().toString();

                                /*
                                    Convert strings into LocalDateTime objects to extract time and date exclusive from
                                    each other
                                 */
                                LocalDateTime arrivalDateTime = LocalDateTime.parse(arrivalTimestamp);
                                LocalDateTime departureDateTime = LocalDateTime.parse(departureTimestamp);

                                /* JsonObject for each segment (flight) on a given itinerary (departing/returning) */
                                JsonObject segmentJson = new JsonObject();

                                /* Unique ID for each segment */
                                String segmentID = UUID.randomUUID().toString();

                                /* Converting UTC timestamp to local time and date strings */
                                String flightDurationString = segment.getDuration();
                                flightDurationString = flightDurationString.replace('H', '.');
                                flightDurationString = flightDurationString.replace("P","");
                                flightDurationString = flightDurationString.replace("T","");
                                flightDurationString = flightDurationString.replace("M","");
                                String[] flightDurationArray =  flightDurationString.split("\\.",2);
                                String flightDuration = flightDurationArray[0] + " hour(s) and " + flightDurationArray[1] + " minutes";

                                /* Increment counter */
                                numOfSegments.get().incrementAndGet();
                                numOfFlights.get().incrementAndGet();


                                /* Add desired information to segmentJson */
                                segmentJson.addProperty("segmentID", segmentID);
                                segmentJson.addProperty("flightID", flightID);
                                segmentJson.addProperty("originAirportCode", departure.getIataCode().toString());
                                segmentJson.addProperty("destAirportCode", arrival.getIataCode().toString());
                                segmentJson.addProperty("departureTime", departureDateTime.format(DateTimeFormatter.ofPattern("HH:mm:ss")));
                                segmentJson.addProperty("departureDate", departureDateTime.format(DateTimeFormatter.ofPattern("dd-MM-yyyy")));
                                segmentJson.addProperty("arrivalTime", arrivalDateTime.format(DateTimeFormatter.ofPattern("HH:mm:ss")));
                                segmentJson.addProperty("arrivalDate", arrivalDateTime.format(DateTimeFormatter.ofPattern("dd-MM-yyyy")));
                                segmentJson.addProperty("flightDuration", flightDuration);
                                segmentJson.addProperty("totalPrice", totalPrice);
                                segmentJson.addProperty("airlineCode", segment.getCarrierCode());
                                segmentJson.addProperty("flightNumber", segment.getNumber().toString());
                                segmentJson.addProperty("aircraftCode", segment.getAircraft().getCode().toString());
                                segmentJson.addProperty("flightID", flightID);
                                segmentJson.addProperty("segmentNumber", numOfSegments.get().get());

                                /* Create the flights object for this flight offer and save to backend database */
                                Segments segmentSave = new Segments(segmentJson);
                                segmentRepo.save(segmentSave);

                                /* Clean up Json returned to front end */
                                segmentJson.remove("flightID");
                                segmentJson.remove("segmentID");

                                return segmentJson;
                            }).collect(Collectors.toList());


                    /* Generate itineraryID */
                    String itineraryID = UUID.randomUUID().toString();

                    /* Determine if itinerary is non-stop, and add number of flights to itineraryJson */
                    itineraryJson.addProperty("isNonstop", numOfSegments.toString().equals("1") ? "true" : "false");
                    itineraryJson.addProperty("numFlights", numOfFlights.get().get());
                    itineraryJson.addProperty("itineraryID", itineraryID);
                    itineraryJson.addProperty("flightID", flightID);


                    /* Add the new segment to the itineraryJsonObject */
                    itineraryJson.add("segments", gson.toJsonTree(segmentJsonObjects));
                    Itineraries itineraryCreate = new Itineraries(itineraryJson);
                    itineraryRepo.save(itineraryCreate);

                    /* Clean up Json returned to front end */
                    itineraryJson.remove("flightID");
                    itineraryJson.remove("itineraryID");

                    /* Add the new itineraryJsonObject to the itineraryArray */
                    itineraryArray.add(itineraryJson);
                }

                /* End of loop, done itinerary for flightOffer(i). Add the itineraryArray to the flightOffer JsonObject */
                offerJson.add("itineraries", itineraryArray);

                /* Add the completed flight offer to the flightOfferArray */
                flightOfferArray.add(offerJson);
            }
        }

        /* Return completed flightOfferArray */
        return flightOfferArray;
    }

    @GetMapping(path = "/findByID")
    public JsonElement getFLightByID(@RequestParam String flightID){

        Iterable<Flights> flight = flightsRepo.findByFlightID(flightID);
        return parseJson(flight);

    }

    @GetMapping(path = "/getSegmentByFlightID")
    public JsonElement getSegmentsByID(@RequestParam String flightID){
        Iterable<Flights> flight = flightsRepo.findSegmentByFlightID(flightID);
        return parseJson(flight);
    }

    @GetMapping(path = "/getItineraryByFlightID")
    public JsonElement getItineraryByID(@RequestParam String flightID){

        Iterable<Flights> flight = flightsRepo.findItineraryByFlightID(flightID);
        return parseJson(flight);
    }

    @GetMapping(path = "/getPriceByFlightID")
    public String getPriceByFlightID(String flightID){
        String price = flightsRepo.findPriceByFlightID(flightID);
        return price;
    }

    @GetMapping (path = "/getSegmentIDsFromFlight")
    public JsonElement getSegmentIDs(@RequestParam String flightID){
        Iterable<Flights> flight = flightsRepo.findSegmentIdByFlightID(flightID);
        return parseJson(flight);
    }

    private JsonElement parseJson(Iterable<Flights> flight){
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        JsonParser jp = new JsonParser();
        JsonElement jsonElement = jp.parse(gson.toJson(flight));
        return jsonElement;
    }


}
