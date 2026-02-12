package com.example.demo.repository;


import com.example.demo.service.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface productRepository extends JpaRepository<Product, Long> {

    Product findByName(String name);

    List<Product> findByPriceGreaterThanEqual(Integer price);

    List<Product> findByPriceBetween(Integer min, Integer max);

    List<Product> findByNameContaining(String keyword);

    List<Product> findTop5ByOrderByPriceDesc();
}
