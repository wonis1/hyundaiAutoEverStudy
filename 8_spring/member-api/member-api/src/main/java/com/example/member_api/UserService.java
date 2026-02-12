package com.example.member_api;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        System.out.println("==== UserService 빈 생성됨 ====");
        System.out.println("주입받은 Repository: "
        + userRepository.getClass().getSimpleName());
        this.userRepository = userRepository;
    }

    public User join(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalStateException("이미 존재하는 이메일입니다: " + user.getEmail());
        }
        return userRepository.save(user);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() ->
                        new IllegalStateException(
                                "사용자를 찾을 수 없습니다: " + id
                        )
                );
    }
}
