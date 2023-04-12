package com.springbackend.app.rest.Restaurants;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;
@Entity
@Data
public class Restaurants {
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
    private String restName;

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

    public Restaurants(RestaurantsBuilder restaurantsBuilder) {
        this.restName = restaurantsBuilder.restName;
        this.fullAddress = restaurantsBuilder.fullAddress;
        this.offerId = restaurantsBuilder.offerId;
        this.latitude = restaurantsBuilder.latitude;
        this.longitude = restaurantsBuilder.longitude;
        this.locationID = restaurantsBuilder.locationID;
        this.rating = restaurantsBuilder.rating;
        this.description = restaurantsBuilder.description;
        this.photosURL = restaurantsBuilder.photosURL;
        this.websiteURL = restaurantsBuilder.websiteURL;
        this.priceLevel = restaurantsBuilder.priceLevel;
        this.testing = restaurantsBuilder.testing;
    }
    public static class RestaurantsBuilder {
        private String fullAddress;
        private String offerId;
        private String locationID;
        public String restName;
        private String rating;
        private String description;
        private String photosURL;
        private String websiteURL;
        private String priceLevel;
        private double latitude;
        private double longitude;
        private String testing;

        public Restaurants.RestaurantsBuilder restName(String restName) {
            this.restName = restName;
            return this;
        }

        public Restaurants.RestaurantsBuilder fullAddress(String fullAddress) {
            this.fullAddress = fullAddress;
            return this;
        }

        public Restaurants.RestaurantsBuilder offerId(String offerId) {
            this.offerId = offerId;
            return this;
        }

        public Restaurants.RestaurantsBuilder locationID(String locationID) {
            this.locationID = locationID;
            return this;
        }

        public Restaurants.RestaurantsBuilder rating(String rating) {
            this.rating = rating;
            return this;
        }

        public Restaurants.RestaurantsBuilder description(String description) {
            this.description = description;
            return this;
        }

        public Restaurants.RestaurantsBuilder photosURL(String photosURL) {
            this.photosURL = photosURL;
            return this;
        }

        public Restaurants.RestaurantsBuilder websiteURL(String websiteURL) {
            this.websiteURL = websiteURL;
            return this;
        }

        public Restaurants.RestaurantsBuilder priceLevel(String priceLevel) {
            this.priceLevel = priceLevel;
            return this;
        }

        public Restaurants.RestaurantsBuilder testing(String testing) {
            this.testing = testing;
            return this;
        }

        public Restaurants.RestaurantsBuilder latitude(double latitude) {
            this.latitude = latitude;
            return this;
        }

        public Restaurants.RestaurantsBuilder longitude(double longitude) {
            this.longitude = longitude;
            return this;
        }
        public Restaurants build () {
            if (this.testing == null) {
                this.testing = "HEY, IT'S NULL";
            }

            if (this.testing.equals("HEY, IT WORKED!")) {
                this.testing = "HEY! IT WORKED, AGAIN!";
            }
            Restaurants restaurants = new Restaurants(this);
            return restaurants;
        }

    }
}
