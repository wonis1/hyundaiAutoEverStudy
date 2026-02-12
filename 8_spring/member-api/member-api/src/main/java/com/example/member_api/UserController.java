package com.example.member_api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        System.out.println("==== UserController 빈 생성됨 ====");
        this.userService = userService;
    }
    @PostMapping
    public ResponseEntity<User> join(@RequestBody User user) {
        User saved = userService.join(user);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(saved);
    }
    @GetMapping
    public ResponseEntity<List<User>> findAll() {
        List<User> users = userService.findAll();
        return ResponseEntity.ok(users);
    }
    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(user);
    }
    @GetMapping("/check")
    public ResponseEntity<String> check() {
        System.out.println("UserService 객체주소: " + userService);
        return ResponseEntity.ok("객체주소: " + userService);
    }
}
