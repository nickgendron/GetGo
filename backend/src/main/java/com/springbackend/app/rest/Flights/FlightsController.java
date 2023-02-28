package com.springbackend.app.rest.Flights;

import com.amadeus.Amadeus;
import com.amadeus.Params;
import com.amadeus.exceptions.ResponseException;
import com.amadeus.resources.FlightOfferSearch;
import java.io.IOException;
import java.util.UUID;
import com.amadeus.resources.FlightOfferSearch.AirportInfo;
import com.amadeus.resources.FlightOfferSearch.Itinerary;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.stream.*;
import java.util.List;


@RestController
public class FlightsController {

    final String AMADEUS_CLIENT_ID = System.getenv("AMADEUS_CLIENT");
    final String AMADEUS_CLIENT_SECRET = System.getenv("AMADEUS_SECRET");
    Amadeus amadeus = Amadeus
            .builder(AMADEUS_CLIENT_ID, AMADEUS_CLIENT_SECRET)
            .build();

    @Autowired
    private FlightsRepo flightsRepo;

    @GetMapping(path="/api/flights/prices")
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

        JsonArray flightOfferArray = new JsonArray();

        if(flightOffers.length > 0){

            Gson gson = new Gson();

            for (int i = 0; i < flightOffers.length; i++) {

                FlightOfferSearch offer = flightOffers[i];
                double totalPrice = offer.getPrice().getGrandTotal();
                String flightUUID = UUID.randomUUID().toString();

                JsonObject offerJson = new JsonObject();
                offerJson.addProperty("optionNumber", i + 1);
                offerJson.addProperty("flightID", flightUUID);
                offerJson.addProperty("totalPrice", totalPrice);
                JsonArray itineraryArray = new JsonArray();

                for (Itinerary itinerary : offer.getItineraries()) {

                    JsonObject itineraryJson = new JsonObject();

                    List<JsonObject> segmentJsonObjects = Arrays.stream(itinerary.getSegments())
                            .map(segment -> {
                                AirportInfo departure = segment.getDeparture();
                                AirportInfo arrival = segment.getArrival();
                                //FlightOfferSearch.Aircraft plane = segment.getAircraft();

                                String arrivalTimestamp = segment.getArrival().getAt().toString();
                                String departureTimestamp = segment.getDeparture().getAt().toString();

                                LocalDateTime arrivalDateTime = LocalDateTime.parse(arrivalTimestamp);
                                LocalDateTime departureDateTime = LocalDateTime.parse(departureTimestamp);

                                JsonObject segmentJson = new JsonObject();

                                segmentJson.addProperty("flightUUID", flightUUID);
                                segmentJson.addProperty("originAirportCode", departure.getIataCode().toString());
                                segmentJson.addProperty("destAirportCode", arrival.getIataCode().toString());
                                segmentJson.addProperty("departureTime", departureDateTime.format(DateTimeFormatter.ofPattern("HH:mm:ss")));
                                segmentJson.addProperty("departureDate", departureDateTime.format(DateTimeFormatter.ofPattern("dd-MM-yyyy")));
                                segmentJson.addProperty("arrivalTime", arrivalDateTime.format(DateTimeFormatter.ofPattern("HH:mm:ss")));
                                segmentJson.addProperty("arrivalDate", arrivalDateTime.format(DateTimeFormatter.ofPattern("dd-MM-yyyy")));
                                segmentJson.addProperty("flightDuration", segment.getDuration());
                                segmentJson.addProperty("totalPrice", totalPrice);
                                segmentJson.addProperty("airlineCode", segment.getCarrierCode());
                                segmentJson.addProperty("flightNumber", segment.getNumber().toString());
                                segmentJson.addProperty("aircraftCode", segment.getAircraft().getCode().toString());

                                Flights flight = new Flights(segmentJson);
                                flightsRepo.save(flight);
                                return segmentJson;
                            }).collect(Collectors.toList());

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
