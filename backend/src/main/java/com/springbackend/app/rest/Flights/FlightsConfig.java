package com.springbackend.app.rest.Flights;

import com.amadeus.Amadeus;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/* Configuration methods for the Amadeus SDK which integrates with Amadeus API */

@Configuration
public class FlightsConfig {

    public static Logger logger = LoggerFactory.getLogger(FlightsConfig.class);

    final String AMADEUS_CLIENT_ID = System.getenv("AMADEUS_CLIENT");
    final String AMADEUS_CLIENT_SECRET = System.getenv("AMADEUS_SECRET");
    final Amadeus amadeus;

    public FlightsConfig() {
        this.amadeus = Amadeus.builder(AMADEUS_CLIENT_ID, AMADEUS_CLIENT_SECRET).build();
    }

    @Bean
    public Amadeus getAmadeusBean() {
        return Amadeus.builder(AMADEUS_CLIENT_ID, AMADEUS_CLIENT_SECRET).setLogLevel("debug").build();
    }

    @PostConstruct
    public void init() {
        logger.info("Loading environment variables:");
        logger.info("AMADEUS_CLIENT_ID: {}", AMADEUS_CLIENT_ID);
        logger.info("AMADEUS_CLIENT_SECRET: {}", AMADEUS_CLIENT_SECRET);
    }

}
