package com.springbackend.app.rest.Attractions;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

/*
    Definitions for the Attractions component within the Vacation options

    @TODO:
    - Develop methods to make API calls to FourSquare API to gather information on attractions at a given destination
    - Filter returned information and remove unnecessary data
    - Save filtered information into Attractions.class
    - Configure Attractions.class to interact with Spring framework to allow for
      data to be sent/queried to/from the database
    - Write methods to allow for API calls from frontend to query desired data regarding Queried
* */
@Entity
@Data

public class Attractions {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Nullable
    private String fullAddress;

    @Nullable
    private String offerId;

    @Nullable
    private String locationID;

    @Nullable
    private String attrName;

    @Nullable
    private String rating;

    @Nullable
    @Column(name = "description", columnDefinition = "VARCHAR(2000)")
    private String description;

    @Nullable
    private String photosURL;

    @Nullable
    private String websiteURL;

    @Nullable
    private String priceLevel;

    @Nullable
    private double latitude;
    @Nullable
    private double longitude;
    @Nullable
    private String testing;

    public Attractions(AttractionsBuilder attractionBuilder) {
        this.attrName = attractionBuilder.attrName;
        this.fullAddress = attractionBuilder.fullAddress;
        this.offerId = attractionBuilder.offerId;
        this.latitude = attractionBuilder.latitude;
        this.longitude = attractionBuilder.longitude;
        this.locationID = attractionBuilder.locationID;
        this.rating = attractionBuilder.rating;
        this.description = attractionBuilder.description;
        this.photosURL = attractionBuilder.photosURL;
        this.websiteURL = attractionBuilder.websiteURL;
        this.priceLevel = attractionBuilder.priceLevel;
        this.testing = attractionBuilder.testing;
    }


    public static class AttractionsBuilder {
        private String fullAddress;
        private String offerId;
        private String locationID;
        private String attrName;
        private String rating;
        private String description;
        private String photosURL;
        private String websiteURL;
        private String priceLevel;
        private double latitude;
        private double longitude;
        private String testing;

        public Attractions.AttractionsBuilder attrName(String attrName) {
            this.attrName = attrName;
            return this;
        }

        public Attractions.AttractionsBuilder fullAddress(String fullAddress) {
            this.fullAddress = fullAddress;
            return this;
        }

        public Attractions.AttractionsBuilder offerId(String offerId) {
            this.offerId = offerId;
            return this;
        }

        public Attractions.AttractionsBuilder locationID(String locationID) {
            this.locationID = locationID;
            return this;
        }

        public Attractions.AttractionsBuilder rating(String rating) {
            this.rating = rating;
            return this;
        }

        public Attractions.AttractionsBuilder description(String description) {
            this.description = description;
            return this;
        }

        public Attractions.AttractionsBuilder photosURL(String photosURL) {
            this.photosURL = photosURL;
            return this;
        }

        public Attractions.AttractionsBuilder websiteURL(String websiteURL) {
            this.websiteURL = websiteURL;
            return this;
        }

        public Attractions.AttractionsBuilder priceLevel(String priceLevel) {
            this.priceLevel = priceLevel;
            return this;
        }

        public Attractions.AttractionsBuilder testing(String testing) {
            this.testing = testing;
            return this;
        }

        public Attractions.AttractionsBuilder latitude(double latitude) {
            this.latitude = latitude;
            return this;
        }

        public Attractions.AttractionsBuilder longitude(double longitude) {
            this.longitude = longitude;
            return this;
        }
        public Attractions build () {
            if (this.testing == null) {
                this.testing = "HEY, IT'S NULL";
            }

            if (this.testing.equals("HEY, IT WORKED!")) {
                this.testing = "HEY! IT WORKED, AGAIN!";
            }
            Attractions attractions = new Attractions(this);
            return attractions;
        }

    }
}
