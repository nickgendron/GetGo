package com.springbackend.app.rest.Hotels;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface HotelsRepo extends CrudRepository<Hotels, String> {

    @Query("SELECT h FROM Hotels h WHERE h.hotelID = ?1")
    Iterable<Hotels> findByLocationID(String hotelID);

    @Query("SELECT h FROM Hotels h WHERE h.hotelOfferGroup = ?1")
    Iterable<Hotels> findByHotelUuidID(String hotelOfferGroup);
}

