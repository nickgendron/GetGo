package com.springbackend.app.rest.Hotels;

/*
    @TODO:
    - Link with Amadeus API for finding hotels near a given area that a user is traveling to
    - Filter returned information and remove unnecessary data
    - Save filtered information into Hotel.class
    - Configure Hotel.class to interact with Spring framework to allow for data to be sent/queried to/from the database
    - Write methods to allow for API calls from frontend to query desired data regarding Hotels
    This class will represent the Hotel component within the Vacation options interface.
 */

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.boot.context.properties.bind.DefaultValue;

import java.util.Random;
import java.util.UUID;

@Entity
@Data
@Table(name = "hotels")
public class Hotels {

    @Id
    private String hotelID;
    @Nullable
    private String fullAddress;
    @Nullable
    private String checkInDate;
    @Nullable
    private String checkOutDate;
    @Nullable
    private String offerId;

    @Nullable
    private String locationID;
    @Nullable
    private String hotelName;
    @Nullable
    private String rating;
    @Nullable
    @Column(name = "description", columnDefinition = "TEXT")
    private String description;
    @Nullable
    private String photosURL;
    @Nullable
    private String websiteURL;
    @Nullable
    private String priceLevel;
    @Nullable
    private int numBeds;
    @Nullable
    private String bedType;

    @Nullable
    private int numOfGuests;
    @Nullable
    private double totalPrice;
    @Nullable
    private double latitude;
    @Nullable
    private double longitude;

    public Hotels(HotelsBuilder hotelBuilder) {
        this.hotelID = hotelBuilder.hotelID;
        this.hotelName = hotelBuilder.hotelName;
        this.checkInDate = hotelBuilder.checkInDate;
        this.checkOutDate = hotelBuilder.checkOutDate;
        this.offerId = hotelBuilder.offerId;
        this.numBeds = hotelBuilder.numBeds;
        this.bedType = hotelBuilder.bedType;
        this.numOfGuests = hotelBuilder.numOfGuests;
        this.totalPrice = hotelBuilder.totalPrice;
        this.latitude = hotelBuilder.latitude;
        this.longitude = hotelBuilder.longitude;
        this.locationID = hotelBuilder.locationID;
        this.rating = hotelBuilder.rating;
        this.fullAddress = hotelBuilder.fullAddress;
        this.photosURL = hotelBuilder.photosURL;
        this.websiteURL = hotelBuilder.websiteURL;
        this.priceLevel = hotelBuilder.priceLevel;
        this.description = hotelBuilder.description;
    }
    public Hotels(){}

    public static class HotelsBuilder {

        private String hotelID;
        private String fullAddress;
        private String checkInDate;
        private String checkOutDate;
        private String offerId;
        private String locationID;
        public String hotelName;
        private String rating;
        private String description;
        private String photosURL;
        private String websiteURL;
        private String priceLevel;
        private int numBeds;
        private String bedType;
        private int numOfGuests;
        private double totalPrice;
        private double latitude;
        private double longitude;

        public HotelsBuilder hotelID(){
            this.hotelID = UUID.randomUUID().toString();
            return this;
        }

//        public String getHotelID(){
//            return this.hotelID;
//        }

        public HotelsBuilder fullAddress(String fullAddress) {
            this.fullAddress = fullAddress;
            return this;
        }

        public HotelsBuilder checkInDate(String checkInDate) {
            this.checkInDate = checkInDate;
            return this;
        }

        public HotelsBuilder checkOutDate(String checkOutDate) {
            this.checkOutDate = checkOutDate;
            return this;
        }

        public HotelsBuilder offerId(String offerId) {
            this.offerId = offerId;
            return this;
        }

        public HotelsBuilder locationID(String locationID) {
            this.locationID = locationID;
            return this;
        }

        public HotelsBuilder hotelName(String hotelName) {
            this.hotelName = hotelName;
            return this;
        }

        public HotelsBuilder rating(String rating) {
            this.rating = rating;
            return this;
        }

        public HotelsBuilder description(String description) {
            this.description = description;
            return this;
        }

        public HotelsBuilder photosURL(String photosURL) {
            this.photosURL = photosURL;
            return this;
        }

        public HotelsBuilder websiteURL(String websiteURL) {
            this.websiteURL = websiteURL;
            return this;
        }

        public HotelsBuilder priceLevel(String priceLevel) {
            this.priceLevel = priceLevel;
            return this;
        }

        public HotelsBuilder numBeds(int numBeds) {
            this.numBeds = numBeds;
            return this;
        }

        public HotelsBuilder bedType(String bedType) {
            this.bedType = bedType;
            return this;
        }

        public HotelsBuilder numOfGuests(int numOfGuests) {
            this.numOfGuests = numOfGuests;
            return this;
        }

        public HotelsBuilder totalPrice(double totalPrice) {
            this.totalPrice = totalPrice;
            return this;
        }

        public HotelsBuilder latitude(double latitude) {
            this.latitude = latitude;
            return this;
        }

        public HotelsBuilder longitude(double longitude) {
            this.longitude = longitude;
            return this;
        }

        public Hotels build(){
            Hotels hotels = new Hotels(this);
            return hotels;
        }
    }
}
