package com.springbackend.app.rest.BudgetBuilder;

public class BudgetBuilder {

    private int totalBudget;
    private int flightCost;
    private int hotelCost;
    private int moneySpent;
    private int timeToTrip;

    public BudgetBuilder(int totalBudget, int flightCost, int hotelCost) {
        this.totalBudget = totalBudget;
        this.flightCost = flightCost;
        this.hotelCost = hotelCost;
    }

    public int getTotalBudget() {
        return totalBudget;
    }

    public int getFlightCost() {
        return flightCost;
    }

    public int getHotelCost() {
        return hotelCost;
    }

    public int calculateRemainingBudget(){
        int remainingBudget = totalBudget - moneySpent;

        return remainingBudget;
    }

    public int calculateMoneySpent(){
       moneySpent = this.hotelCost + this.flightCost;
       return moneySpent;
    }

    public int getMoneySpent(){
        calculateMoneySpent();
        return moneySpent;
    }
}
