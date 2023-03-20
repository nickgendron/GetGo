package com.springbackend.app.rest.Flights;


import com.google.gson.JsonObject;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity /* Tells db to make a table out of this class */
@Data
public class Flights {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String flightUUID;
    //private String segmentUUID;
    private String originAirportCode;
    private String destAirportCode;
    private String departureTime;
    private String departureDate;
    private String arrivalTime;
    private String arrivalDate;
    private String flightDuration;
    private String totalPrice;
    private String airlineCode;
    private String flightNumber;
    private String aircraftCode;


    public Flights(JsonObject flight) {
        this.flightUUID = flight.get("flightUUID").getAsString();
        //this.segmentUUID = flight.get("segmentUUID").getAsString();
        this.originAirportCode = flight.get("originAirportCode").getAsString();
        this.destAirportCode = flight.get("destAirportCode").getAsString();
        this.departureTime = flight.get("departureTime").getAsString();
        this.departureDate = flight.get("departureDate").getAsString();
        this.arrivalTime = flight.get("arrivalTime").getAsString();
        this.arrivalDate = flight.get("arrivalDate").getAsString();
        this.flightDuration = flight.get("flightDuration").getAsString();
        this.totalPrice = flight.get("totalPrice").getAsString();
        this.airlineCode = flight.get("airlineCode").getAsString();
        this.flightNumber = flight.get("flightNumber").getAsString();
        this.aircraftCode = flight.get("aircraftCode").getAsString();
    }




}