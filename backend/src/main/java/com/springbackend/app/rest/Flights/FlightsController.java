package com.springbackend.app.rest.Flights;
import com.springbackend.app.rest.Flights.FlightsConfig;
import com.amadeus.Amadeus;
import com.amadeus.Params;
import com.amadeus.exceptions.ResponseException;
import com.amadeus.resources.FlightOfferSearch;

import com.amadeus.resources.FlightOfferSearch.AirportInfo;

import com.amadeus.resources.FlightOfferSearch.Itinerary;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.stream.*;
import java.util.List;


@RestController
public class FlightsController {

    //FlightsConfig amadeus;


    final String AMADEUS_CLIENT_ID = System.getenv("AMADEUS_CLIENT");
    final String AMADEUS_CLIENT_SECRET = System.getenv("AMADEUS_SECRET");
    Amadeus amadeus = Amadeus
            .builder(AMADEUS_CLIENT_ID, AMADEUS_CLIENT_SECRET)
            .build();


    @GetMapping(path="/api/flights/prices")
    public JsonArray getFlightInformation(@RequestParam String originCode, @RequestParam String destCode,
                                            @RequestParam String departDate, @RequestParam String returnDate,
                                            @RequestParam int adults, @RequestParam int numFlights)
                                            throws ResponseException, JsonProcessingException {

        /* Call to amadeus flight offer search API. Returns data as a FlightOffer search array */
        FlightOfferSearch[] flightOffers = amadeus.shopping.flightOffersSearch.get(
                Params.with("originLocationCode", originCode)
                        .and("destinationLocationCode", destCode)
                        .and("departureDate", departDate)
                        .and("returnDate", returnDate)
                        .and("adults", adults)
                        .and("max", numFlights)
                        .and("currencyCode", "USD"));
//        String aircraftCode;
//        String departingAirportCode;
//        String arrivingAirportCode;
//        String departureTime;
//        String arrivalTime;
//        String flightTime;
//        String aircraft;
//        String carrierCode;
        //ArrayList<String> info = new ArrayList<>();

        JsonArray flightOfferArray = new JsonArray();

        if(flightOffers.length > 0){

            Gson gson = new Gson();
            //JsonArray flightOfferArray = new JsonArray();

//            for(int i = 0; i < flightOffers.length; i++){
//                FlightOfferSearch offer = flightOffers[i];
//                double total = offer.getPrice().getGrandTotal();
//
//                JsonObject offerJson = new JsonObject();
//                offerJson.addProperty("ID", i+1);
//                JsonArray itineraryArray = new JsonArray();
//
//                for(Itinerary itinerary : offer.getItineraries()){
//
//                    JsonObject itineraryJson = new JsonObject();
//                    JsonArray segmentArray = new JsonArray();
//
//                    for(SearchSegment segment : itinerary.getSegments()){
//
//                        JsonObject segmentJson = new JsonObject();
//
//                        AirportInfo departure = segment.getDeparture();
//                        AirportInfo arrival = segment.getArrival();
//                        FlightOfferSearch.Aircraft plane = segment.getAircraft();
//
//                        aircraftCode = segment.getAircraft().getCode().toString();
//                        departingAirportCode = departure.getIataCode().toString();
//                        arrivingAirportCode = arrival.getIataCode();
//                        departureTime = departure.getAt();
//                        arrivalTime = arrival.getAt();
//                        flightTime = segment.getDuration();
//                        aircraft = plane.getCode().toString();
//                        carrierCode = segment.getCarrierCode();
//
//                        segmentJson.addProperty("price", offer.getPrice().getGrandTotal());
//                        segmentJson.addProperty("aircraftCode", segment.getAircraft().getCode().toString());
//                        segmentJson.addProperty("departingAirportCode", departingAirportCode);
//                        segmentJson.addProperty("arrivingAirportCode", arrivingAirportCode);
//                        segmentJson.addProperty("departureTime", departureTime);
//                        segmentJson.addProperty("arrivalTime", arrivalTime);
//                        segmentJson.addProperty("flightTime", flightTime);
//                        segmentJson.addProperty("aircraft", aircraft);
//                        segmentJson.addProperty("carrierCode", carrierCode);
//
//                        segmentArray.add(segmentJson);
//
//                    }
//                    itineraryJson.add("segments", segmentArray);
//                    itineraryArray.add(itineraryJson);
//                }
//                offerJson.add("itineraries", itineraryArray);
//                flightOfferArray.add(offerJson);
//            }

            for (int i = 0; i < flightOffers.length; i++) {
                FlightOfferSearch offer = flightOffers[i];
                double total = offer.getPrice().getGrandTotal();

                JsonObject offerJson = new JsonObject();
                offerJson.addProperty("ID", i + 1);
                JsonArray itineraryArray = new JsonArray();

                for (Itinerary itinerary : offer.getItineraries()) {
                    JsonObject itineraryJson = new JsonObject();
                    List<JsonObject> segmentJsonObjects = Arrays.stream(itinerary.getSegments())
                            .map(segment -> {
                                AirportInfo departure = segment.getDeparture();
                                AirportInfo arrival = segment.getArrival();
                                FlightOfferSearch.Aircraft plane = segment.getAircraft();

                                String aircraftCode = segment.getAircraft().getCode().toString();
                                String departingAirportCode = departure.getIataCode().toString();
                                String arrivingAirportCode = arrival.getIataCode();
                                String departureTime = departure.getAt();
                                String arrivalTime = arrival.getAt();
                                String flightTime = segment.getDuration();
                                String aircraft = plane.getCode().toString();
                                String carrierCode = segment.getCarrierCode();

                                JsonObject segmentJson = new JsonObject();
                                segmentJson.addProperty("price", total);
                                segmentJson.addProperty("aircraftCode", aircraftCode);
                                segmentJson.addProperty("departingAirportCode", departingAirportCode);
                                segmentJson.addProperty("arrivingAirportCode", arrivingAirportCode);
                                segmentJson.addProperty("departureTime", departureTime);
                                segmentJson.addProperty("arrivalTime", arrivalTime);
                                segmentJson.addProperty("flightTime", flightTime);
                                segmentJson.addProperty("aircraft", aircraft);
                                segmentJson.addProperty("carrierCode", carrierCode);
                                return segmentJson;
                            })
                            .collect(Collectors.toList());

                    itineraryJson.add("segments", gson.toJsonTree(segmentJsonObjects));
                    itineraryArray.add(itineraryJson);
                }

                offerJson.add("itineraries", itineraryArray);
                flightOfferArray.add(offerJson);
            }
        }
        return flightOfferArray;
    }

}
