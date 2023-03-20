package com.springbackend.app.rest.Flights.FlightObjects;

import com.springbackend.app.rest.Flights.FlightObjects.Flights;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightsRepo extends CrudRepository<Flights, String>{

    @Query("SELECT f FROM Flights f WHERE f.flightID = ?1")
    Iterable<Flights> findByFlightID(String flightID);

    @Query("SELECT s FROM Segments s WHERE s.flightID = ?1 ORDER BY segmentNumber asc")
    Iterable<Flights> findSegmentByFlightID(String flightID);

    @Query("SELECT i FROM Itineraries i WHERE i.flightID = ?1")
    Iterable<Flights> findItineraryByFlightID(String flightID);

    @Query("SELECT s.segmentID FROM Segments s where s.flightID = ?1 ORDER BY segmentNumber asc")
    Iterable<Flights> findSegmentIdByFlightID(String flightID);

    @Query("SELECT f.totalPrice FROM Flights f where f.flightID = ?1")
    String findPriceByFlightID(String flightID);

}
