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


    public User() {

    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {

        this.lastName = lastName;
    }

    public String getEmail() {

        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
