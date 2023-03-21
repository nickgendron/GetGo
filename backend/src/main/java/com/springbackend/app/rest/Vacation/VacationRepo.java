package com.springbackend.app.rest.Vacation;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface VacationRepo extends CrudRepository<Vacation, String> {

    @Query("SELECT v FROM Vacation v where v.vacationID = ?1")
    Vacation findVacationByID(String vacationID);
}
