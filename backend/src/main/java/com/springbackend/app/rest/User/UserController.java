package com.springbackend.app.rest.User;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.google.gson.*;
import java.util.Map;

/* Methods that allow for API calls from frontend to gather backend data */
@RequestMapping(path="/api/user")
@RestController /* Specifies that this is an API controller */
public class UserController {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserRepoOAuth userRepoOAuth;

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

//    @GetMapping(path="/oauth2/google")
//    public User googleOAuth2(Model model, @AuthenticationPrincipal OAuth2User principal){
//        Map<String, Object> attributes = principal.getAttributes();
//
//        String email = (String) attributes.get("email");
//        String firstName = (String) attributes.get("given_name");
//        String lastName = (String) attributes.get("family_name");
//
//         User user = userRepoOAuth.findByEmail(email);
//        if (user == null) {
//            user = new User(firstName, lastName, email);
//            userRepoOAuth.save(user);
//        }
//
//        return user;
//
//    }

}
