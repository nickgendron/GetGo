package com.springbackend.app.rest.Flights;

import com.google.gson.JsonObject;
import com.springbackend.app.rest.User.User;
import org.springframework.data.repository.CrudRepository;

public interface FlightsRepo extends CrudRepository<Flights, String>{
}
