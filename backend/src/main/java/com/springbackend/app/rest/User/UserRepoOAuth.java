package com.springbackend.app.rest.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepoOAuth extends JpaRepository<User, Integer> {
     User findByEmail(String email);
}
