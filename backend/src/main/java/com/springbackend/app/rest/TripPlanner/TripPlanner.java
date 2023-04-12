package com.springbackend.app.rest.TripPlanner;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
public class TripPlanner {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String plannerID;
    @Nullable
    private String vacationID;
    @Nullable
    private double grandTripTotal;

    /* Piggy bank variable where values are added/subbed from */
    @Nullable
    private double savingsGoal;


    public TripPlanner(String vacationID) {
        this.vacationID = vacationID;
        this.grandTripTotal = 0;
        this.savingsGoal = 0;
        this.plannerID = UUID.randomUUID().toString();
    }

    public TripPlanner() {
    }

    public String getVacationID() {
        return vacationID;
    }

    public TripPlanner setVacationID(String vacationID) {
        this.vacationID = vacationID;
        return this;
    }

    public double getGrandTripTotal() {
        return grandTripTotal;
    }

    public TripPlanner setGrandTripTotal(double grandTripTotal) {
        this.grandTripTotal = grandTripTotal;
        return this;
    }

    public TripPlanner updateGrandTotal(double numToAdd) {
        this.grandTripTotal += numToAdd;
        return this;
    }

    public double getSavingsGoal() {
        return this.savingsGoal;
    }

    public TripPlanner setSavingsGoal(double savingsGoal) {
        this.savingsGoal = savingsGoal;
        return this;
    }

    public TripPlanner updateSavingsGoal(double amountToAdd){
        this.savingsGoal += amountToAdd;
        return this;
    }
    public TripPlanner updateSavingsGoal2(double amountToSub){
        this.savingsGoal -= amountToSub;
        return this;
    }


    public String getPlannerID() {
        return this.plannerID;
    }
}