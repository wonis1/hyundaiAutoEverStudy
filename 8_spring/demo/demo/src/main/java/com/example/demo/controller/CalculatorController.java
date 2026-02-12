package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CalculatorController {

    @ResponseBody
    @GetMapping("/calculate")
    public int calculate(@RequestParam int a, @RequestParam int b) {
        return a + b;
    }
}
