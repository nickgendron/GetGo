package com.springbackend.app.rest.Vacation;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.springbackend.app.rest.Attractions.Attractions;
import com.springbackend.app.rest.Attractions.AttractionsRepo;
import com.springbackend.app.rest.Hotels.Hotels;
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

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/createNewVacation")
    public ResponseEntity<String> createNewEmptyVacation(@RequestParam String userID){


        if(userRepo.existsByUserID(userID)){
            String attractionSelectedGroup = UUID.randomUUID().toString();

            Vacation vacation = new Vacation(userID, attractionSelectedGroup);

            vacationRepo.save(vacation);
            return ResponseEntity.ok(vacation.getVacationID());

        }
        else{
            String errorMessage = "User not found";
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/getSelectedHotelID")
    public String getSelectedHotelID(@RequestParam String vacationID){
        Vacation vacation = vacationRepo.findVacationByID(vacationID);
        return vacation.getHotelID();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/addAttractionToVacation")
    public String addAttractionToVacation(@RequestParam String attractionID, @RequestParam String vacationID){
        Attractions attraction = attractionsRepo.findByAttractionID(attractionID);
        Vacation vacation = vacationRepo.findVacationByID(vacationID);
        if(attraction != null && vacation != null){

            String attractionsGroup = vacation.getSelectedAttractionsGroup();
            attraction.setSelectedAttractionsGroup(attractionsGroup);
            attractionsRepo.save(attraction);
            return attraction.getSelectedAttractionsGroup();
        }
        else{
            return "error";
        }

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/removeAttractionFromVacation")
    public String removeAttractionFromGroupList(@RequestParam String attractionID, @RequestParam String vacationID){
        Attractions attraction = attractionsRepo.findByAttractionID(attractionID);
        Vacation vacation = vacationRepo.findVacationByID(vacationID);
        if(attraction != null && vacation != null){

            String attractionsGroup = vacation.getSelectedAttractionsGroup();
            attraction.setSelectedAttractionsGroup(null);
            attractionsRepo.save(attraction);
            return "success";
        }
        else{
            return "error";
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/getSelectedAttractionsGroup")
    public String getSelectedAttractionsGroup(@RequestParam String vacationID){

        Vacation vacation = vacationRepo.findVacationByID(vacationID);
        if(vacation != null){
            return vacation.getSelectedAttractionsGroup();
        }
        else{
            return "error";
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
    @GetMapping(path = "/getAttractionsByGroupingID")
    public JsonElement getAttractionsByGroupingID(@RequestParam String vacationID){

        Vacation vacation = vacationRepo.findVacationByID(vacationID);

        String vacationAttractionsGroup = vacation.getSelectedAttractionsGroup();
        Iterable<Attractions> attractions = attractionsRepo.findAttractionGroups(vacationAttractionsGroup);

        return parseJson(attractions);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/addHotel")
    public String addHotel(@RequestParam String hotelID, @RequestParam String vacationID){
        Vacation vacation = vacationRepo.findVacationByID(vacationID);
        vacation.setHotelID(hotelID);
        vacationRepo.save(vacation);
        return "Success";

    }

    @PostMapping(path="/addAttraction")
    public String addAttraction(@RequestParam String attractionID, @RequestParam String vacationID){

        Vacation vacation = vacationRepo.findVacationByID(vacationID);

        return "Success";
    }

    @PostMapping(path="/addRestaurant")
    public String addRestaurant(@RequestParam String restaurantID, @RequestParam String vacationID){
        Vacation vacation = vacationRepo.findVacationByID(vacationID);
        vacation.setFlightID(restaurantID);
        vacationRepo.save(vacation);
        if(!(vacation.getRestaurantID().equals(restaurantID))) { return "Error"; }
        return "Success";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/deleteFlightByVacationID")
    public String deleteFlightByVacationID(@RequestParam String vacationID){

        Vacation vacation = vacationRepo.findVacationByID(vacationID);

        if(vacation != null) {
            vacation.setFlightID(null);
            vacationRepo.save(vacation);

            return "Success";
        }
        return "Failed";
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/deleteHotelByVacationID")
    public String deleteHotelByVacationID(@RequestParam String vacationID){
        Vacation vacation = vacationRepo.findFlightByVacationID(vacationID);

        if(vacation != null){
            vacation.setHotelID(null);
            vacationRepo.save(vacation);

            return "success";
        }

        return "error";
    }

    private JsonElement parseJson(Iterable<Attractions> attractions){
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        JsonParser jp = new JsonParser();
        JsonElement jsonElement = jp.parse(gson.toJson(attractions));
        return jsonElement;
    }


}
