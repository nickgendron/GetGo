package com.springbackend.app.rest.Security;

import com.springbackend.app.rest.User.UserRepo;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;

import static org.springframework.security.config.Customizer.withDefaults;


@Configuration
@EnableWebSecurity
public class ApplicationSecurity {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable().authorizeHttpRequests().anyRequest().permitAll();
//                .requestMatchers("/api/user/login").permitAll()
//                .requestMatchers("/api/user/add").permitAll()
//                .requestMatchers("/api/flights/getSegmentByFlightID").permitAll()
//                .requestMatchers("/api/flights/getSegmentBySegmentID").permitAll()
//                .requestMatchers("/api/flights/getSegmentIDFromFlightID").permitAll()
//                .requestMatchers("/api/flights/getDepartingSegmentsByFlightID").permitAll()
//                .requestMatchers("/api/flights/findByID").permitAll()
//                .requestMatchers("/api/flights/prices").permitAll();
        return http.build();
    }
    //private UserRepo userRepo;

   // public ApplicationSecurity(UserRepo userRepo) {
   //     this.userRepo = userRepo;
  //  }

}
