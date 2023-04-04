package com.springbackend.app.rest.Flights.SegmentObject;

import com.google.gson.JsonObject;
import com.springbackend.app.rest.Flights.ItineraryObjects.Itineraries;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Segments {

    @Id
    private String segmentID;
private String itineraryID;
    private String flightID;
    private String originAirportCode;
    private String destAirportCode;
    private String departureTime;
    private String departureDate;
    private String arrivalTime;
    private String arrivalDate;
    private String flightDuration;
    private int segmentNumber;
    private String airlineCode;
    private String flightNumber;
    private String aircraftCode;

    private String flightLeg;

//    @ManyToOne
//    @JoinColumn(name = "itineraryID")
//    private Itineraries itinerary;

    public Segments (JsonObject segment){

        this.segmentID = segment.get("segmentID").getAsString();
        this.originAirportCode = segment.get("originAirportCode").getAsString();
        this.destAirportCode = segment.get("destAirportCode").getAsString();
        this.departureTime = segment.get("departureTime").getAsString();
        this.departureDate = segment.get("departureDate").getAsString();
        this.arrivalTime = segment.get("arrivalTime").getAsString();
        this.arrivalDate = segment.get("arrivalDate").getAsString();
        this.flightDuration = segment.get("flightDuration").getAsString();
        this.airlineCode = segment.get("airlineCode").getAsString();
        this.flightNumber = segment.get("flightNumber").getAsString();
        this.aircraftCode = segment.get("aircraftCode").getAsString();
        this.flightID = segment.get("flightID").getAsString();
        this.segmentNumber = segment.get("segmentNumber").getAsInt();
        this.itineraryID = segment.get("itineraryID").getAsString();
        this.flightLeg = segment.get("flightLeg").getAsString();

    }

    public Segments () {}
}
