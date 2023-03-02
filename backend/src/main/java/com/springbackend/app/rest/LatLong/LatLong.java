package com.springbackend.app.rest.LatLong;

import jakarta.persistence.Entity;
import lombok.Data;

@Entity /* Tells db to make a table out of this class */
@Data

public class LatLong {
    private float latitude;

    private float longitude;

    private String label;

    private String name;

    private String type;

    private String number;

    private String street;

    private String postal_code;

    private int confidence;

    private String region;

    private String region_code;

    private Boolean administrative_area;

    private String neighbourhood;

    private String country;

    private String country_code;

    private String map_url;


    public LatLong(float latitude, float longitude, String label, String name,
                   String type, String number, String street, String postal_code,
                   int confidence, String region, String region_code, Boolean administrative_area,
                   String neighbourhood, String country, String country_code, String map_url) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.label = label;
        this.name = name;
        this.type = type;
        this.number = number;
        this.street = street;
        this.postal_code = postal_code;
        this.confidence = confidence;
        this.region = region;
        this.region_code = region_code;
        this.administrative_area = administrative_area;
        this.neighbourhood = neighbourhood;
        this.country = country;
        this.country_code = country_code;
        this.map_url = map_url;
    }

    public float getLat() {return latitude;}

    public void setLat() {this.latitude = latitude;}

    public float getLong() {return longitude;}

    public void setLong() {this.longitude = longitude;}
}
