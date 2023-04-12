package com.springbackend.app.rest.TripPlanner;
import com.amadeus.exceptions.ResponseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.UUID;

@RequestMapping(path="/api/tripPlanner")
@RestController
public class TripController {

    @Autowired
    private TripRepo tripRepo;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/setGrandTotal")
    public double getGrandTotal(@RequestParam String plannerID, @RequestParam double grandTotal) throws ResponseException, IOException {
        TripPlanner tripPlannerTotal = tripRepo.findByPlannerID(plannerID);
        tripPlannerTotal.setGrandTripTotal(grandTotal);
        tripRepo.save(tripPlannerTotal);

        return tripPlannerTotal.getGrandTripTotal();
    }



    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/newPlanner")
    public String createNewTripPlanner(@RequestParam String vacationID){


        TripPlanner newTrip = new TripPlanner(vacationID);
        tripRepo.save(newTrip);

        return newTrip.getPlannerID();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/setTripTotal")
    public String setTripTotal(@RequestParam double numToAddToTotal, @RequestParam String plannerID){
        TripPlanner trip = tripRepo.findByPlannerID(plannerID);
        if(trip == null){
            return "Error fetching vacation with ID: " + plannerID;
        }
        trip.updateGrandTotal(numToAddToTotal);
        tripRepo.save(trip);
        return "success";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/getTotalSaved")
    public String getTotalSaved(@RequestParam String plannerID){
        TripPlanner trip = tripRepo.findByPlannerID(plannerID);

        return String.valueOf(trip.getSavingsGoal());
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/getTripTotal")
    public String getAmountSaved(@RequestParam String plannerID){
        TripPlanner trip = tripRepo.findByPlannerID(plannerID);

        return String.valueOf(trip.getGrandTripTotal());
    }



    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/addSavings")
    public double addSavings(@RequestParam String plannerID, @RequestParam double addToTotal){


        TripPlanner trip = tripRepo.findByPlannerID(plannerID);
        if(trip == null){
            return 0.0;
        }
        double oldSavingsTotal = trip.getSavingsGoal();
        trip.updateSavingsGoal(addToTotal);

        tripRepo.save(trip);

        return trip.getSavingsGoal();
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/subSavings")
    public double subSavings(@RequestParam String plannerID, @RequestParam double subFromTotal){
        TripPlanner trip = tripRepo.findByPlannerID(plannerID);
        if(trip == null){
            return 0.0;
        }
        double oldSavingsTotal = trip.getSavingsGoal();
        trip.updateSavingsGoal2(subFromTotal);

        tripRepo.save(trip);
        return trip.getSavingsGoal();
    }

}