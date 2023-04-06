package com.springbackend.app.rest.TripPlanner;
import com.amadeus.exceptions.ResponseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.UUID;

@RequestMapping(path="/tripPlanner")
@RestController
public class TripController {

    @Autowired
    private TripRepo tripRepo;

    @PostMapping(path="/setGrandTotal")
    public double getGrandTotal(@RequestParam String vacationID, @RequestParam double grandTotal) throws ResponseException, IOException {
        TripPlanner tripPlannerTotal = tripRepo.findVacationByID(vacationID);
        tripPlannerTotal.setGrandTripTotal(grandTotal);
        tripRepo.save(tripPlannerTotal);

        /*
        Get vacation id in
        use that to instantiate an object represented by that ID

        * */
        return tripPlannerTotal.getGrandTripTotal();
    }

    @PostMapping(path="/newPlanner")
    public String createNewTripPlanner(@RequestParam double savingsTotal, @RequestParam double tripTotal){

        String vacationID = UUID.randomUUID().toString();

        TripPlanner newTrip = new TripPlanner(vacationID, tripTotal, savingsTotal);
        tripRepo.save(newTrip);

        return "success";
    }
    @PostMapping(path="/setTripTotal")
    public String setTripTotal(@RequestParam double numToAddToTotal, @RequestParam String vacationID){
        TripPlanner trip = tripRepo.findVacationByID(vacationID);
        if(trip == null){
            return "Error fetching vacation with ID: " + vacationID;
        }
        trip.updateGrandTotal(numToAddToTotal);
        tripRepo.save(trip);
        return "success";
    }




    @PostMapping(path="/addSavings")
    public String addSavings(@RequestParam String vacationID, @RequestParam double addToTotal){


        TripPlanner tripTmp = tripRepo.findVacationByID(vacationID);
        if(tripTmp == null){
            return "Error: Could not find TripPlanner with ID " + vacationID;
        }
        double oldSavingsTotal = tripTmp.getSavingsGoal();
        tripTmp.updateSavingsGoal(addToTotal);

        if(tripTmp.getSavingsGoal() != (oldSavingsTotal + addToTotal)){
            return "Error: Update failed.";
        }
        tripRepo.save(tripTmp);

        return "success";
    }
    @PostMapping(path="/subSavings")
    public String subSavings(@RequestParam String vacationID, @RequestParam double subFromTotal){
        TripPlanner tripTmp2 = tripRepo.findVacationByID(vacationID);
        if(tripTmp2 == null){
            return "Error: Could not find TripPlanner with ID " + vacationID;
        }
        double oldSavingsTotal = tripTmp2.getSavingsGoal();
        tripTmp2.updateSavingsGoal2(subFromTotal);

        if(tripTmp2.getSavingsGoal() != (oldSavingsTotal - subFromTotal)){
            return "Error: Update failed.";
        }
        tripRepo.save(tripTmp2);
        return "Success";
    }

}
