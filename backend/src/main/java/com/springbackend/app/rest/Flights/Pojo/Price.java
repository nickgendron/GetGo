
package com.springbackend.app.rest.Flights.Pojo;

import java.util.List;
import javax.annotation.Generated;

import com.amadeus.resources.FlightOfferSearch;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("jsonschema2pojo")
public class Price {

    @SerializedName("currency")
    @Expose
    private String currency;
    @SerializedName("total")
    @Expose
    private Double total;
    @SerializedName("base")
    @Expose
    private Double base;
    @SerializedName("fees")
    @Expose
    private List<FlightOfferSearch.Fee> fees;
    @SerializedName("grandTotal")
    @Expose
    private Double grandTotal;

    /**
     * No args constructor for use in serialization
     * 
     */
    public Price() {
    }

    /**
     * 
     * @param total
     * @param fees
     * @param grandTotal
     * @param currency
     * @param base
     */
    public Price(String currency, Double total, Double base, List<FlightOfferSearch.Fee> fees, Double grandTotal) {
        super();
        this.currency = currency;
        this.total = total;
        this.base = base;
        this.fees = fees;
        this.grandTotal = grandTotal;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Price withCurrency(String currency) {
        this.currency = currency;
        return this;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public Price withTotal(Double total) {
        this.total = total;
        return this;
    }

    public Double getBase() {
        return base;
    }

    public void setBase(Double base) {
        this.base = base;
    }

    public Price withBase(Double base) {
        this.base = base;
        return this;
    }

    public List<FlightOfferSearch.Fee> getFees() {
        return fees;
    }

    public void setFees(List<FlightOfferSearch.Fee> fees) {
        this.fees = fees;
    }

    public Price withFees(List<FlightOfferSearch.Fee> fees) {
        this.fees = fees;
        return this;
    }

    public Double getGrandTotal() {
        return grandTotal;
    }

    public void setGrandTotal(Double grandTotal) {
        this.grandTotal = grandTotal;
    }

    public Price withGrandTotal(Double grandTotal) {
        this.grandTotal = grandTotal;
        return this;
    }

}
