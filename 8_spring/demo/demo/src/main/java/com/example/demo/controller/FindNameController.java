package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
public class FindNameController {
    private final Map<Long, String> users = Map.of(
            1L, "정재원",
            2L, "이영희",
            3L, "김민수"
    );

    @ResponseBody
    @GetMapping("/users/{id}")
    public String findName(@PathVariable Long id) {
        String name = users.get(id);
        return name + "님 환영합니다 !!";
    };
}
