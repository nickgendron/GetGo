package com.springbackend.app.rest;

import lombok.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
@ComponentScan(basePackageClasses = RestApplication.class)

/* Driver code that starts the backend server */

public class RestApplication {
	public static void main(String[] args) {
		SpringApplication.run(RestApplication.class, args);

	}

}
