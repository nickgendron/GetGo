
package com.springbackend.app.rest.Flights.Pojo;

import java.util.List;
import javax.annotation.Generated;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

@Generated("jsonschema2pojo")
public class PricingOptions {

    @SerializedName("includedCheckedBagsOnly")
    @Expose
    private Boolean includedCheckedBagsOnly;
    @SerializedName("fareType")
    @Expose
    private List<String> fareType;
    @SerializedName("refundableFare")
    @Expose
    private Boolean refundableFare;
    @SerializedName("noRestrictionFare")
    @Expose
    private Boolean noRestrictionFare;
    @SerializedName("noPenaltyFare")
    @Expose
    private Boolean noPenaltyFare;

    /**
     * No args constructor for use in serialization
     * 
     */
    public PricingOptions() {
    }

    /**
     * 
     * @param includedCheckedBagsOnly
     * @param noRestrictionFare
     * @param noPenaltyFare
     * @param fareType
     * @param refundableFare
     */
    public PricingOptions(Boolean includedCheckedBagsOnly, List<String> fareType, Boolean refundableFare, Boolean noRestrictionFare, Boolean noPenaltyFare) {
        super();
        this.includedCheckedBagsOnly = includedCheckedBagsOnly;
        this.fareType = fareType;
        this.refundableFare = refundableFare;
        this.noRestrictionFare = noRestrictionFare;
        this.noPenaltyFare = noPenaltyFare;
    }

    public Boolean getIncludedCheckedBagsOnly() {
        return includedCheckedBagsOnly;
    }

    public void setIncludedCheckedBagsOnly(Boolean includedCheckedBagsOnly) {
        this.includedCheckedBagsOnly = includedCheckedBagsOnly;
    }

    public PricingOptions withIncludedCheckedBagsOnly(Boolean includedCheckedBagsOnly) {
        this.includedCheckedBagsOnly = includedCheckedBagsOnly;
        return this;
    }

    public List<String> getFareType() {
        return fareType;
    }

    public void setFareType(List<String> fareType) {
        this.fareType = fareType;
    }

    public PricingOptions withFareType(List<String> fareType) {
        this.fareType = fareType;
        return this;
    }

    public Boolean getRefundableFare() {
        return refundableFare;
    }

    public void setRefundableFare(Boolean refundableFare) {
        this.refundableFare = refundableFare;
    }

    public PricingOptions withRefundableFare(Boolean refundableFare) {
        this.refundableFare = refundableFare;
        return this;
    }

    public Boolean getNoRestrictionFare() {
        return noRestrictionFare;
    }

    public void setNoRestrictionFare(Boolean noRestrictionFare) {
        this.noRestrictionFare = noRestrictionFare;
    }

    public PricingOptions withNoRestrictionFare(Boolean noRestrictionFare) {
        this.noRestrictionFare = noRestrictionFare;
        return this;
    }

    public Boolean getNoPenaltyFare() {
        return noPenaltyFare;
    }

    public void setNoPenaltyFare(Boolean noPenaltyFare) {
        this.noPenaltyFare = noPenaltyFare;
    }

    public PricingOptions withNoPenaltyFare(Boolean noPenaltyFare) {
        this.noPenaltyFare = noPenaltyFare;
        return this;
    }

}
