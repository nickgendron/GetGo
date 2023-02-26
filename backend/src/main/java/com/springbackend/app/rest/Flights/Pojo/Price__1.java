
package com.springbackend.app.rest.Flights.Pojo;

import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("jsonschema2pojo")
public class Price__1 {

    @SerializedName("currency")
    @Expose
    private String currency;
    @SerializedName("total")
    @Expose
    private Double total;
    @SerializedName("base")
    @Expose
    private Double base;
    @SerializedName("grandTotal")
    @Expose
    private Double grandTotal;

    /**
     * No args constructor for use in serialization
     * 
     */
    public Price__1() {
    }

    /**
     * 
     * @param total
     * @param grandTotal
     * @param currency
     * @param base
     */
    public Price__1(String currency, Double total, Double base, Double grandTotal) {
        super();
        this.currency = currency;
        this.total = total;
        this.base = base;
        this.grandTotal = grandTotal;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Price__1 withCurrency(String currency) {
        this.currency = currency;
        return this;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public Price__1 withTotal(Double total) {
        this.total = total;
        return this;
    }

    public Double getBase() {
        return base;
    }

    public void setBase(Double base) {
        this.base = base;
    }

    public Price__1 withBase(Double base) {
        this.base = base;
        return this;
    }

    public Double getGrandTotal() {
        return grandTotal;
    }

    public void setGrandTotal(Double grandTotal) {
        this.grandTotal = grandTotal;
    }

    public Price__1 withGrandTotal(Double grandTotal) {
        this.grandTotal = grandTotal;
        return this;
    }

}
