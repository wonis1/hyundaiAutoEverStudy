package com.example.user_api_v2.service;

import com.example.user_api_v2.domain.User;
import com.example.user_api_v2.dto.UserCreateRequest;
import com.example.user_api_v2.dto.UserResponse;
import com.example.user_api_v2.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public List<UserResponse> findAll() {
        return userRepository.findAll().stream()
                .map(UserResponse::from)
                .toList();
    }

    @Override
    public UserResponse findById(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + id));
        return UserResponse.from(user);
    }

    @Override
    public UserResponse update(Long id, UserCreateRequest request) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + id));
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        User updated = userRepository.save(user);
        return UserResponse.from(updated);
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
    @Override
    public UserResponse create(UserCreateRequest request) {
        // 이메일 중복 체크 추가!
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("이미 사용 중인 이메일입니다: " + request.getEmail());
        }
        User user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(request.getPassword())
                .build();
        User saved = userRepository.save(user);
        return UserResponse.from(saved);
    }
    @Override
    public List<UserResponse> findByEmail(String email) {
        return userRepository.findByEmail(email).stream()
                .map(UserResponse::from)
                .toList();
    }
}