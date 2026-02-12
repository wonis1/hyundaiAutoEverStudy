package com.example.member_api;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaUserRepository
        extends JpaRepository<User, Long> {

    boolean existsByEmail(String email);
}
