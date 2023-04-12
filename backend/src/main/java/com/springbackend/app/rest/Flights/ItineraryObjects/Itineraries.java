package com.springbackend.app.rest.Flights.ItineraryObjects;

import com.google.gson.JsonObject;
import com.springbackend.app.rest.Flights.FlightObjects.Flights;
import com.springbackend.app.rest.Flights.SegmentObject.Segments;
import jakarta.persistence.Entity;
import lombok.Data;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "itineraries")
@Data
public class Itineraries {

        @Id
        private String itineraryID;
        @Column(insertable=false, updatable=false)
        private String flightID;
        private String isNonstop;
        private String numFlights;
        private String flightLeg;

//        @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
//        @JoinColumn(name = "flightID")

        @ManyToOne(fetch = FetchType.LAZY)
        @JoinColumn(name = "flightID")
        private Flights flight;


//        @OneToMany(mappedBy = "itinerary", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
        @OneToMany(mappedBy = "itinerary", cascade = CascadeType.ALL, orphanRemoval = true)
        private List<Segments> segments;

    public Itineraries(JsonObject itinerary) {
        this.itineraryID = itinerary.get("itineraryID").getAsString();
        this.isNonstop = itinerary.get("isNonstop").getAsString();
        this.numFlights = itinerary.get("numFlights").getAsString();
        this.flightID = itinerary.get("flightID").getAsString();
        this.flight = new Flights();
        this.segments = new ArrayList<>();

    }

    public Itineraries() {}

    public Itineraries setItineraryID(String itineraryID) {
        this.itineraryID = itineraryID;
        return this;
    }

    public Itineraries setFlightID(String flightID) {
        this.flightID = flightID;
        return this;
    }

    public Itineraries setIsNonstop(String isNonstop) {
        this.isNonstop = isNonstop;
        return this;
    }

    public Itineraries setNumFlights(String numFlights) {
        this.numFlights = numFlights;
        return this;
    }

    public Itineraries setFlightLeg(String flightLeg) {
        this.flightLeg = flightLeg;
        return this;
    }

    public Itineraries setFlight(Flights flight) {
        this.flight = flight;
        return this;
    }
}
