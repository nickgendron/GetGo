package com.springbackend.app.rest.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.google.gson.*;
import com.google.gson.JsonElement;

import lombok.Data;

import java.lang.reflect.Type;

/* Methods that allow for API calls from frontend to gather backend data */
@RequestMapping(path="/api/user")
@RestController /* Specifies that this is an API controller */
public class UserController {
    @Autowired
    private UserRepo userRepo;

    @PostMapping(path="/add")
    public String saveUser(@RequestBody User user){

        userRepo.save(user);
        return "User added with id: ";
    }

    @GetMapping(path="/all")
    public @ResponseBody String getAllUsers() {

        Iterable<User> users = userRepo.findAll();
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        return gson.toJson(users);
    }

}
