package com.springbackend.app.rest.VacationBuilder;


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

@Data
@Entity
public class VacationBuilder {

    @Id
    private String vacationID;
    private int flightID;
    private int hotelID;
    private int userID;


}
