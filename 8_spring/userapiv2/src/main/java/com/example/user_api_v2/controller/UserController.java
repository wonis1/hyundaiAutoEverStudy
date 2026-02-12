package com.example.user_api_v2.controller;

import com.example.user_api_v2.dto.UserCreateRequest;
import com.example.user_api_v2.dto.UserResponse;
import com.example.user_api_v2.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService; // 빨간줄! 아직 없음!

    // 전체 조회
    @GetMapping
    public ResponseEntity<List<UserResponse>> findAll(
            @RequestParam(required = false) String email) {
        if (email != null) {
            return ResponseEntity.ok(userService.findByEmail(email));
        }
        return ResponseEntity.ok(userService.findAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> findById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }
    @PostMapping
    public ResponseEntity<UserResponse> create(@RequestBody UserCreateRequest request) {
        UserResponse response = userService.create(request);
        return ResponseEntity.status(HttpStatus.CREATED).body
                (response);
    }
    @PutMapping("/{id}")
    public ResponseEntity<UserResponse> update(@PathVariable Long id, @RequestBody UserCreateRequest request) {
        return ResponseEntity.ok(userService.update(id, request));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id)
    {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
