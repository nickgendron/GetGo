package com.springbackend.app.rest.Vacation;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface VacationRepo extends CrudRepository<Vacation, String> {

    @Query("SELECT v FROM Vacation v where v.vacationID = ?1")
    Vacation findVacationByID(String vacationID);

    @Query("Select v.flightID from Vacation v where v.vacationID = ?1")
    Vacation findFlightByVacationID(String vacationID);

    @Modifying
    @Query("UPDATE Vacation v SET v.flightID = NULL WHERE v.vacationID = ?1")
    void deleteFlightByVacationID(String vacationID);

}
