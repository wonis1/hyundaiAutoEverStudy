package com.example.user_api.service;


import com.example.user_api.domain.User;
import com.example.user_api.dto.UserCreateRequest;
import com.example.user_api.dto.UserResponse;

import java.util.List;

public interface UserService {
    public List<UserResponse> findAll();
    public UserResponse findById(Long id);
    public UserResponse create(UserCreateRequest user);
    public UserResponse update(Long id, UserCreateRequest user);
    public void delete(Long id);
}
