package com.springbackend.app.rest.Hotels;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface HotelsRepo extends CrudRepository<Hotels, String> {

    @Query("SELECT h FROM Hotels h WHERE h.locationID = ?1")
    String findByLocationID(String locationID);
}

