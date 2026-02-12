package com.example.user_api.dto;

import com.example.user_api.domain.User;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class UserResponse {
    private Long id;
    private String name;
    private String email;

    // Entity -> DTO 변환 메서드
    public static UserResponse from(User user) {
        return UserResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .build();
    }

    public void setPassword(String password) {
    }
}
