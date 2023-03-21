package com.springbackend.app.rest.Vacation;


/*
    This method will be used to allow the user to build out their vacation package of choice.
    Data will be pulled from Flights, Hotels, and Attractions which the user will then select
    on the front end to build their custom vacation package.

    @TODO:
        - Link flight, hotel, and attractions together to be manipulated here
        - Move the selected data into a new object/SQL table to be stored for future viewing
        - Have methods in place for CRUD operations on selected data to be performed
 */

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
public class Vacation {

    @Id
    private String vacationID;
    private String flightID;
    private String hotelID;
    private String userID;

    public Vacation() {
        this.vacationID = UUID.randomUUID().toString();

        //return this.vacationID;
    }

    public Vacation(String vacationID, String flightID, String hotelID, String userID) {
        this.vacationID = vacationID;
        this.flightID = flightID;
        this.hotelID = hotelID;
        this.userID = userID;
    }

    public String getVacationID() {
        return vacationID;
    }

    public Vacation setVacationID(String vacationID) {
        this.vacationID = vacationID;
        return this;
    }

    public String getFlightID() {
        return flightID;
    }

    public Vacation setFlightID(String flightID) {
        this.flightID = flightID;
        return this;
    }

    public String getHotelID() {
        return hotelID;
    }

    public Vacation setHotelID(String hotelID) {
        this.hotelID = hotelID;
        return this;
    }

    public String getUserID() {
        return userID;
    }

    public Vacation setUserID(String userID) {
        this.userID = userID;
        return this;
    }
}
