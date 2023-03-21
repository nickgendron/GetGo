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
    private String itineraryID;
    private String totalPrice;
    private String optionNumber;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "flight")
    private List<Itineraries> itineraries;


    public Flights(JsonObject flight) {
        this.flightID = flight.get("flightID").getAsString();
        this.optionNumber = flight.get("optionNumber").getAsString();
        this.totalPrice = flight.get("totalPrice").getAsString();
    }

    public Flights(){}

}