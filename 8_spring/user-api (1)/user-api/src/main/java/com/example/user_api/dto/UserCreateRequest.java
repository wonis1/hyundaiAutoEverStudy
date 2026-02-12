package com.example.user_api.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class UserCreateRequest {
    private String name;
    private String email;
    private String password;
}
