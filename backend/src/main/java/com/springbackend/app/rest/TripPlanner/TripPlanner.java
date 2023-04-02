package com.springbackend.app.rest.TripPlanner;

public class TripPlanner {
    //need place to store budget inputs, calculate, store total for budget calculator
    //need place to store savings bar money also manage addition and subtraction
    //need place to store long notes user write
    private double maxSpendFlight;
    private double maxSpendHotel;
    private double maxSpendAttraction;
    private double maxSpendTransportation;
    private double maxSpendGifts;
    private double maxSpendMisc;

    private double grandTotal;
    private double savingsTotal;
    private double addToTotal;
    private double subFromTotal;

    private String userNotes;

    public TripPlanner(double maxSpendFlight, double maxSpendHotel, double maxSpendAttraction, double maxSpendTransportation, double maxSpendGifts, double maxSpendMisc, double addToTotal, double subFromTotal, String userNotes){
        this.maxSpendFlight = maxSpendFlight;
        this.maxSpendHotel = maxSpendHotel;
        this.maxSpendAttraction = maxSpendAttraction;
        this.maxSpendTransportation = maxSpendTransportation;
        this.maxSpendGifts = maxSpendGifts;
        this.maxSpendMisc = maxSpendMisc;
        this.addToTotal = addToTotal;
        this.subFromTotal = subFromTotal;
        this.userNotes = userNotes;
    }

    public double getGrandTotal(){
        grandTotal = maxSpendFlight + maxSpendHotel + maxSpendAttraction + maxSpendTransportation + maxSpendGifts + maxSpendMisc;
        return grandTotal;
    }
    public double addSavings(){
        savingsTotal = savingsTotal + addToTotal;
        return savingsTotal;
    }
    public double subSavings(){
        savingsTotal = savingsTotal + subFromTotal;
        return savingsTotal;
    }
}
