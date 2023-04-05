package com.springbackend.app.rest.Flights.ItineraryObjects;

import com.google.gson.JsonObject;
import com.springbackend.app.rest.Flights.FlightObjects.Flights;
import com.springbackend.app.rest.Flights.SegmentObject.Segments;
import jakarta.persistence.Entity;
import lombok.Data;
import jakarta.persistence.*;

import java.util.List;


@Entity
@Table(name = "itineraries")
@Data
public class Itineraries {

        @Id
        private String itineraryID;
        private String flightID;
        private String isNonstop;
        private String numFlights;
        private String flightLeg;

//        @OneToMany(mappedBy = "itinerary")
//        private List<Segments> segment;

//        @ManyToOne(fetch = FetchType.LAZY)
//        private Flights flight;
    public Itineraries(JsonObject itinerary) {
        this.itineraryID = itinerary.get("itineraryID").getAsString();
        this.isNonstop = itinerary.get("isNonstop").getAsString();
        this.numFlights = itinerary.get("numFlights").getAsString();
        this.flightID = itinerary.get("flightID").getAsString();
        this.flightID = itinerary.get("flightLeg").getAsString();

    }

    public Itineraries() {}
}
