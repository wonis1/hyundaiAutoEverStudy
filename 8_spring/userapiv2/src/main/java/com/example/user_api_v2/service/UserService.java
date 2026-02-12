package com.example.user_api_v2.service;

import com.example.user_api_v2.domain.User;
import com.example.user_api_v2.dto.UserCreateRequest;
import com.example.user_api_v2.dto.UserResponse;

import java.util.List;

public interface UserService {
    List<UserResponse> findAll(); // Controller가 필요한 것!
    UserResponse create(UserCreateRequest request);
    UserResponse findById(Long id);
    void delete(Long id);
    List<UserResponse> findByEmail(String email); // 추가!

    UserResponse update(Long id, UserCreateRequest request);
}