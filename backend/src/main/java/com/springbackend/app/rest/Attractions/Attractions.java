package com.springbackend.app.rest.Attractions;


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
public class Attractions {

    private String attractionName;
    private String attractionType;
    private String attractionPrice;
    private String rating;
    private String attractionCity;
    private String attractionAddress;
    private String attractionHours;
}
