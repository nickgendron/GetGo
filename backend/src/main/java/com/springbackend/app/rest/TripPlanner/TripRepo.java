package com.springbackend.app.rest.TripPlanner;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

public interface TripRepo extends CrudRepository <TripPlanner, String>{
    @Query("SELECT v FROM TripPlanner v where v.vacationID = ?1")
    TripPlanner findVacationByID(String vacationID);
    @Transactional
    @Modifying
    @Query("update TripPlanner t set t.savingsTotal = t.savingsTotal + ?2 where t.vacationID = ?1")
    void addSavings(String vacationID, double addToTotal);

    @Query("update TripPlanner s set s.savingsTotal = s.savingsTotal - ?2 where s.vacationID = ?1")
    void subSavings(String vacationID, double subFromTotal);

    @Query("SELECT t from TripPlanner t where t.vacationID = ?1")
    TripPlanner findByVacationID(@RequestParam String vacationID);
}
