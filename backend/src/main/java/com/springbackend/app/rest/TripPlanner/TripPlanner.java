package com.springbackend.app.rest.TripPlanner;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class TripPlanner {
    //need place to store budget inputs, calculate, store total for budget calculator
    //need place to store savings bar money also manage addition and subtraction
    //need place to store long notes user write
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Nullable
    private String vacationID;
    @Nullable
    private double grandTripTotal;
    @Nullable
    private double savingsGoal;


    public TripPlanner(String vacationID, double grandTotal, double savingsTotal) {
        this.vacationID = vacationID;
        this.grandTripTotal = grandTotal;
        this.savingsGoal = savingsTotal;
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
        return savingsGoal;
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


}
