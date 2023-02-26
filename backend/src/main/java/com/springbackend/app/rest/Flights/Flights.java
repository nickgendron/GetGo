//package com.springbackend.app.rest.Flights;


import jakarta.persistence.Entity;
import lombok.Data;

@Entity /* Tells db to make a table out of this class */
@Data
public class Flights {

    private int flightID;
    private String orginAirportCode;
    private String destAirportCode;
    private String departureTime;
    private String departureDate;
    private String arrivalTime;
    private String arrivalDate;
    private String flightDuration;
    private String cabinTier;
    private double totalPrice;
    private String airlineName;
    private int flightNumber;

    public Flights(int flightID, String originAirportCode,
                   String destAirportCode, String departureTime,
                   String departureDate, String arrivalTime,
                   String arrivalDate, String flightDuration,
                   String cabinTier, double totalPrice,
                   String airlineName, int flightNumber) {
        this.flightID = flightID;
        this.orginAirportCode = originAirportCode;
        this.destAirportCode = destAirportCode;
        this.departureTime = departureTime;
        this.departureDate = departureDate;
        this.arrivalTime = arrivalTime;
        this.arrivalDate = arrivalDate;
        this.flightDuration = flightDuration;
        this.cabinTier = cabinTier;
        this.totalPrice = totalPrice;
        this.airlineName = airlineName;
        this.flightNumber = flightNumber;
    }

    public int getFlightID() {
        return flightID;
    }

    public void setFlightID(int flightID) {
        this.flightID = flightID;
    }

    public String getOrginAirportCode() {
        return orginAirportCode;
    }

    public void setOrginAirportCode(String orginAirportCode) {
        this.orginAirportCode = orginAirportCode;
    }

    public String getDestAirportCode() {
        return destAirportCode;
    }

    public void setDestAirportCode(String destAirportCode) {
        this.destAirportCode = destAirportCode;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public String getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(String departureDate) {
        this.departureDate = departureDate;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getArrivalDate() {
        return arrivalDate;
    }

    public void setArrivalDate(String arrivalDate) {
        this.arrivalDate = arrivalDate;
    }

    public String getFlightDuration() {
        return flightDuration;
    }

    public void setFlightDuration(String flightDuration) {
        this.flightDuration = flightDuration;
    }

    public String getCabinTier() {
        return cabinTier;
    }

    public void setCabinTier(String cabinTier) {
        this.cabinTier = cabinTier;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public String getAirlineName() {
        return airlineName;
    }

    public void setAirlineName(String airlineName) {
        this.airlineName = airlineName;
    }

    public int getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(int flightNumber) {
        this.flightNumber = flightNumber;
    }
}
