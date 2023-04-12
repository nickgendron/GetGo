package com.springbackend.app.rest.TripPlanner;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

public interface TripRepo extends CrudRepository <TripPlanner, String>{
    @Query("SELECT t FROM TripPlanner t where t.vacationID = ?1")
    TripPlanner findVacationByID(String vacationID);

    @Query("SELECT t from TripPlanner t where t.plannerID = ?1")
    TripPlanner findByPlannerID(@RequestParam String plannerID);
}
