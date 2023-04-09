package com.springbackend.app.rest.Security;

import com.springbackend.app.rest.User.User;
import com.springbackend.app.rest.User.UserRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/api/security")
public class LoginController {

    private UserRepo userRepo;

    public LoginController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @GetMapping(path = "/login")
    public String handleUserLogin(@RequestParam String email, @RequestParam String password){
        User user = userRepo.matchUserByEmailAndPassword(email, password);
        if(user == null){ return "User not found."; }
        return user.getUserID();
    }
}
