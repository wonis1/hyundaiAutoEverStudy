package com.example.user_api.service;

import com.example.user_api.domain.User;
import com.example.user_api.dto.UserCreateRequest;
import com.example.user_api.dto.UserResponse;
import com.example.user_api.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserResponse> findAll() {
        return userRepository.findAll().stream()
                .map(UserResponse::from)
                .toList();
    }

    @Override
    public UserResponse findById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("유저가 없습니다."));
        return UserResponse.from(user);
    }

    @Override
    public UserResponse create(UserCreateRequest request) {
        // DTO -> Entity 변환
        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .build();
        // 저장
        User saved = userRepository.save(user);
        // Entity -> DTO 변환
        return UserResponse.from(saved);
    }

    @Override
    public UserResponse update(Long id, UserCreateRequest user) {
        User found = userRepository.findById(id)
                        .orElseThrow(() -> new IllegalArgumentException("유저가 없습니다."));

        found.setName(user.getName());
        found.setEmail(user.getEmail());
        found.setPassword(user.getPassword());

        User updated = userRepository.save(found);
        return UserResponse.from(updated);
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
}
