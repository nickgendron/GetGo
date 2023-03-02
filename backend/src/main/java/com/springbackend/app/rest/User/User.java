package com.springbackend.app.rest.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
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
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int id;

    private String firstName;

    private String lastName;

    private String email;

    public User() {}

    public User(String firstName, String lastName,
                String email){

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }


}
