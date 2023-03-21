package com.springbackend.app.rest.Vacation;

import com.google.gson.JsonObject;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RequestMapping(path="/api/vacationBuilder")
@RestController
public class VacationController {


    @GetMapping(path="/createNewVacation")
    public String createNewEmptyVacation(@RequestParam String userID){

        Vacation vacation = new Vacation();
        vacation.setUserID(userID);

        String vacationID = vacation.getVacationID();
        JsonObject vacationCreds = new JsonObject();

        return "stop";
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
