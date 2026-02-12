package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.math.BigInteger;

@Controller
public class HelloController {

    @ResponseBody
    @GetMapping("/hi")
    public String sayHi() {
        return "안녕하세요.";
    }

    @ResponseBody
    @GetMapping("/bye")
    public String sayBye() {
        return "안녕히 가세요.";
    }

    @ResponseBody
    @GetMapping("/hello")
    public String hello(@RequestParam String name, @RequestParam int age) {
        return "반갑습니다, " + name + "님. " + age + "살이시네요!";
    }

    @ResponseBody
    @GetMapping("/lecture/{id}/{name}")
    public String getLecture(@PathVariable BigInteger id, @PathVariable String name) {
        return id + "번째 수업입니다. " + name + "강좌 수강 중입니다.";
    }

    // /mul 경로로 요청이 오면 두 개의 숫자를 곱해서 결과를 반환하는 메서드 작성
    @ResponseBody
    @GetMapping("/mul")
    public int multiply(@RequestParam int x, @RequestParam int y){
        return x * y;
    }

}
