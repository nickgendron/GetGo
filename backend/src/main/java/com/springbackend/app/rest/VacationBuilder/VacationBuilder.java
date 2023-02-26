//package com.springbackend.app.rest.VacationBuilder;


/*
    This method will be used to allow the user to build out their vacation package of choice.
    Data will be pulled from Flights, Hotels, and Attractions which the user will then select
    on the front end to build their custom vacation package.

    @TODO:
        - Link flight, hotel, and attractions together to be manipulated here
        - Move the selected data into a new object/SQL table to be stored for future viewing
        - Have methods in place for CRUD operations on selected data to be performed
 */
public class VacationBuilder {
    private int flightId;
    private int hotelId;
    private int userId;

    public VacationBuilder(int flightId, int hotelId, int userId) {
        this.flightId = flightId;
        this.hotelId = hotelId;
        this.userId = userId;
    }

    public int getFlightId() {
        return flightId;
    }

    public void setFlightId(int flightId) {
        this.flightId = flightId;
    }

    public int getHotelId() {
        return hotelId;
    }

    public void setHotelId(int hotelId) {
        this.hotelId = hotelId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
