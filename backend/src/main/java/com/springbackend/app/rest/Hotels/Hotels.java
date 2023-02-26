//package com.springbackend.app.rest.Hotels;
/*
    @TODO:
    - Link with Amadeus API for finding hotels near a given area that a user is traveling to
    - Filter returned information and remove unnecessary data
    - Save filtered information into Hotel.class
    - Configure Hotel.class to interact with Spring framework to allow for data to be sent/queried to/from the database
    - Write methods to allow for API calls from frontend to query desired data regarding Hotels

    This class will represent the Hotel component within the Vacation options interface.
 */
public class Hotels {

    private String hotelName;

    private String checkInDate;

    private String checkOutDate;

    private String offerId;

    private int numBeds;

    private String bedType;

    private int numOfGuests;

    private double totalPrice;

    private double latitude;

    private double longitude;

    public Hotels(String hotelName, String checkInDate,
            String checkOutDate, String offerId,
            int numBeds, String bedType,
            int numOfGuests, double totalPrice,
            double latitude, double longitude) {
        this.hotelName = hotelName;
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
        this.offerId = offerId;
        this.numBeds = numBeds;
        this.bedType = bedType;
        this.numOfGuests = numOfGuests;
        this.totalPrice = totalPrice;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getCheckInDate() {
        return checkInDate;
    }

    public void setCheckInDate(String checkInDate) {
        this.checkInDate = checkInDate;
    }

    public String getCheckOutDate() {
        return checkOutDate;
    }

    public void setCheckOutDate(String checkOutDate) {
        this.checkOutDate = checkOutDate;
    }

    public String getOfferId() {
        return offerId;
    }

    public void setOfferId(String offerId) {
        this.offerId = offerId;
    }

    public int getNumBeds() {
        return numBeds;
    }

    public void setNumBeds(int numBeds) {
        this.numBeds = numBeds;
    }

    public String getBedType() {
        return bedType;
    }

    public void setBedType(String bedType) {
        this.bedType = bedType;
    }

    public int getNumOfGuests() {
        return numOfGuests;
    }

    public void setNumOfGuests(int numOfGuests) {
        this.numOfGuests = numOfGuests;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
}
