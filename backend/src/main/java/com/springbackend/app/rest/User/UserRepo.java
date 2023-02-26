package com.springbackend.app.rest.User;

import com.google.gson.JsonArray;
import org.springframework.data.repository.CrudRepository;

import java.lang.reflect.Type;

public interface UserRepo extends CrudRepository<User, Integer> {
}
