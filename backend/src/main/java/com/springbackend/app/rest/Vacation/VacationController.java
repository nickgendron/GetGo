package com.springbackend.app.rest.Vacation;

import com.springbackend.app.rest.Attractions.Attractions;
import com.springbackend.app.rest.Attractions.AttractionsRepo;
import com.springbackend.app.rest.User.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.UUID;

@RequestMapping(path="/api/vacations")
@RestController
public class VacationController {

    @Autowired
    private VacationRepo vacationRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AttractionsRepo attractionsRepo;

    @PostMapping(path="/createNewVacation")
    public ResponseEntity<String> createNewEmptyVacation(@RequestParam String userID){


        if(userRepo.existsByUserID(userID)){
            Vacation vacation = new Vacation();

            vacation.setUserID(userID);
            vacationRepo.save(vacation);
            return ResponseEntity.ok(vacation.getVacationID());

        }
        else{
            String errorMessage = "User not found";
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
        }
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/addFlight")
    public String addFlight(@RequestParam String flightID, @RequestParam String vacationID){
        Vacation vacation = vacationRepo.findVacationByID(vacationID);
        vacation.setFlightID(flightID);
        vacationRepo.save(vacation);

        if(!(vacation.getFlightID().equals(flightID))) { return "Error"; }

        return "Success";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/addHotel")
    public String addHotel(@RequestParam String hotelID, String vacationID){
        Vacation vacation = vacationRepo.findVacationByID(vacationID);
        vacation.setHotelID(hotelID);
        vacationRepo.save(vacation);
//        if(!(vacation.getHotelID().equals(hotelID))) { return "Error"; }
        return "Success";

    }

    @PostMapping(path="/addAttraction")
    public String addAttraction(@RequestParam String attractionID, String vacationID){
        
        //Attractions attraction = new Attractions(attractionID, vacationID);
        //attractionsRepo.save(attraction);

        return "Success";
    }

    @PostMapping(path="/addRestaurant")
    public String addRestaurant(@RequestParam String restaurantID, String vacationID){
        Vacation vacation = vacationRepo.findVacationByID(vacationID);
        vacation.setFlightID(restaurantID);
        vacationRepo.save(vacation);
        if(!(vacation.getRestaurantID().equals(restaurantID))) { return "Error"; }
        return "Success";
    }


    @PostMapping(path = "/buildVacation")
    public String selectFlight(@RequestParam String userID, @RequestParam String flightID, @RequestParam String hotelID){


        String vacationID = String.valueOf(UUID.randomUUID());
        Vacation vacation = new Vacation(vacationID, flightID, hotelID, userID);

        if(vacation.getVacationID().equals(vacationID) && vacation.getFlightID().equals(flightID)
                && vacation.getHotelID().equals(hotelID) && vacation.getUserID().equals(userID)){
            return "Success";
        }
        else{ return "Failure"; }
    }
    /*
        User picks a flight
        Send the flightID to the backend server
     */

}
