package com.springbackend.app.rest.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Data;
import org.springframework.boot.context.properties.bind.DefaultValue;

import javax.annotation.processing.Generated;
import java.util.UUID;

/*
    @TODO:
        - Integrate Google SSO to allow for gmail login
        - Create local login for users who do not want to use Google
        - Determine how to have userId uniquely identify users & their vacation choices globally
*/
@Entity /* Tells db to make a table out of this class */
@Data
public class User {

    @Id
    private String userID = UUID
            .randomUUID()
            .toString();

    private String firstName;

    private String lastName;

    private String password;

    private String email;

    public User() {
        this.userID = UUID.randomUUID().toString();
    }

    public User(String firstName, String lastName, String email, String password){
       // this.userID = UUID.randomUUID().toString();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;

    }

    public String getUserID() {
        return userID;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }
}
