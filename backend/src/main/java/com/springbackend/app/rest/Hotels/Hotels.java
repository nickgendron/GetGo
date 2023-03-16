package com.springbackend.app.rest.Hotels;
/*
    @TODO:
    - Link with Amadeus API for finding hotels near a given area that a user is traveling to
    - Filter returned information and remove unnecessary data
    - Save filtered information into Hotel.class
    - Configure Hotel.class to interact with Spring framework to allow for data to be sent/queried to/from the database
    - Write methods to allow for API calls from frontend to query desired data regarding Hotels

    This class will represent the Hotel component within the Vacation options interface.
    https://howtodoinjava.com/design-patterns/creational/builder-pattern-in-java/
 */
public class Hotels {

    private final String hotelName;

    private final String address;

    private final String distance;

    private final String description;

    private final String website;

    private final String ratings;


    private Hotels(HotelsBuilder builder){
            this.hotelName = builder.hotelName;
            this.address = builder.address;
            this.distance = builder.distance;
            this.description = builder.description;
            this.website = builder.website;
            this.ratings = builder.ratings;

    }
    public String getHotelName() {
        return hotelName;
    }
    public String getAddress() {
        return address;
    }
    public String getDistance() {
        return distance;
    }
    public String getDescription() {
        return description;
    }
    public String getWebsite() {
        return website;
    }
    public String getRatings() {
        return ratings;
    }

    public static class HotelsBuilder {
        private final String hotelName;
        private final String address;
        private final String distance;
        private final String description;

        private String website;

        private String ratings;


        public HotelsBuilder(String hotelName, String address, String distance, String description) {
            this.hotelName = hotelName;
            this.address = address;
            this.distance = distance;
            this.description = description;
        }
        public HotelsBuilder website(String website){
            this.website = website;
            return this;
        }
        public HotelsBuilder ratings(String ratings) {
            this.ratings = ratings;
            return this;
        }
        public Hotels build(){
            Hotels hotel = new Hotels(this);
            return hotel;
        }
    }

}
