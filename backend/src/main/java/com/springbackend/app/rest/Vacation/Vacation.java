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

import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.boot.context.properties.bind.DefaultValue;

import java.util.List;
import java.util.UUID;

@Data
@Entity
public class Vacation {

    @Id
    private String vacationID;
    @Nullable
    private String flightID;

    private String selectedAttractionsGroup;
    @Nullable
    private List<String> attractionID;

    @Nullable
    private List<String> restaurantID;
    @Nullable
    private String hotelID;
    @Nullable
    private String userID;

    public Vacation() {
        this.vacationID = UUID.randomUUID().toString();
//        this.selectedAttractionsGroup = UUID.randomUUID().toString();
    }

    public Vacation(String vacationID, String selectedAttractionsGroup) {
        this.vacationID = vacationID;
        this.selectedAttractionsGroup = selectedAttractionsGroup;
    }

    public Vacation addToAttractionsList(String attractionID){
        this.attractionID.add(attractionID);
        return this;
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

    public String getSelectedAttractionsGroup() {
        return this.selectedAttractionsGroup;
    }
}
