package com.example.member_api;
// 패키지 선언: 이 클래스가 어디 소속인지 알려줌
// 스프링이 컴포넌트 스캔할 때 이 경로 기준으로 찾음

import jakarta.persistence.*;
// JPA 관련 어노테이션들(@Entity, @Id, @Column 등)을 쓰기 위해 import

@Entity
// 이 클래스는 "DB 테이블과 매핑되는 객체다" 라고 스프링/JPA에게 알림
// 없으면 그냥 평범한 자바 클래스일 뿐, DB랑 아무 관계 없음

@Table(name = "users")
// DB 테이블 이름을 명시
// 안 쓰면 클래스명(User) 기준으로 자동 생성되는데,
// 실무에선 테이블명 명확히 적는 게 일반적

public class User {

    @Id
    // 이 필드는 "이 테이블의 PK(기본키)다" 라고 선언

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    // PK 값을 DB가 자동으로 증가시켜서 넣어줌 (auto_increment)
    // 우리가 id를 직접 관리하지 않겠다는 의미

    private Long id;
    // 회원 고유 식별자
    // private: 외부에서 직접 수정 못 하게 막음 (캡슐화)

    @Column(nullable = false)
    // DB 컬럼 설정
    // nullable=false → 반드시 값이 있어야 함 (null 불가)

    private String name;
    // 회원 이름

    @Column(nullable = false, unique = true)
    // nullable=false → 필수값
    // unique=true → 이메일 중복 불가 (회원은 이메일로 유니크하게 구분)

    private String email;
    // 회원 이메일

    // 기본 생성자 (JPA 필수)
    public User() {
        // JPA가 객체를 만들 때 리플렉션으로 사용함
        // 없으면 런타임 에러 남
    }

    // 생성자 (우리가 직접 객체 만들 때 사용)
    public User(String name, String email) {
        // 회원 생성 시 필수 값만 받도록 설계
        this.name = name;
        // 전달받은 이름을 필드에 저장
        this.email = email;
        // 전달받은 이메일을 필드에 저장
    }

    public Long getId() {
        // id 조회용 메서드
        // 외부에서는 id를 "읽기만" 하게 하는 게 일반적
        return id;
    }

    public void setId(Long id) {
        // id 변경 메서드
        // JPA가 DB 저장 후 자동으로 id를 세팅할 때 사용
        this.id = id;
    }

    public String getName() {
        // 이름 조회
        return name;
    }

    public void setName(String name) {
        // 이름 변경
        // 지금은 단순하지만, 나중엔 검증 로직 들어갈 자리
        this.name = name;
    }

    public String getEmail() {
        // 이메일 조회
        return email;
    }

    public void setEmail(String email) {
        // 이메일 변경
        // 실무에선 보통 이메일 변경 제한 로직이 붙음
        this.email = email;
    }
}
