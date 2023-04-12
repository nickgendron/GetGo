package com.springbackend.app.rest.Flights.FlightObjects;


import com.google.gson.JsonObject;
import com.springbackend.app.rest.Flights.ItineraryObjects.Itineraries;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity /* Tells db to make a table out of this class */
@Data
public class Flights {

    @Id
    private String flightID;

    private String offerID;
    private String itineraryID;
    private String totalPrice;
    private String optionNumber;

    private String originCode;
    private String destCode;

    @OneToMany(mappedBy = "flight", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Itineraries> itineraries; // One-to-many relationship with Itineraries


    public Flights(JsonObject flight) {
        this.flightID = flight.get("flightID").getAsString();
        this.optionNumber = flight.get("optionNumber").getAsString();
        this.totalPrice = flight.get("totalPrice").getAsString();
        this.offerID = flight.get("offerID").getAsString();
        this.originCode = flight.get("originCode").getAsString();
        this.destCode = flight.get("destCode").getAsString();

    }

    public Flights(){}

}