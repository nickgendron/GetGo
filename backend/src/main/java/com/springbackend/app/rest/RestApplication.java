package com.springbackend.app.rest;

import lombok.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = RestApplication.class)

/* Driver code that starts the backend server */

public class RestApplication {
	public static void main(String[] args) {
		SpringApplication.run(RestApplication.class, args);

	}


}
