package com.springbackend.app.rest.User;

import com.google.gson.JsonArray;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.lang.reflect.Type;

public interface UserRepo extends CrudRepository<User, Integer> {

    @Query("SELECT u FROM User u WHERE u.email = ?1 AND u.password = ?2")
    User matchUserByEmailAndPassword(String email, String password);

    boolean existsByUserID(String id);
}
