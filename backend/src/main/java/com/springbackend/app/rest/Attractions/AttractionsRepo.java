package com.springbackend.app.rest.Attractions;
import com.springbackend.app.rest.Hotels.Hotels;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface AttractionsRepo extends CrudRepository<Attractions, String>{

    @Query("SELECT a FROM Attractions a WHERE a.attractionOfferGroup = ?1")
    Iterable<Attractions> findByAttractionsGroup(String attractionOfferGroup);

    @Query("SELECT a FROM Attractions a WHERE a.attractionID = ?1")
    Attractions findByAttractionID(String attractionID);

    @Modifying
    @Query("UPDATE Attractions a SET a.selectedAttractionsGroup = ?1 WHERE a.attractionID = ?2")
    void addAttractionToSelected(String selectedAttractionsGroup, String attractionID);

    @Query("SELECT a FROM Attractions a WHERE a.selectedAttractionsGroup = ?1")
    Iterable<Attractions> findAttractionGroups(String selectedAttractionsGroup);

}
