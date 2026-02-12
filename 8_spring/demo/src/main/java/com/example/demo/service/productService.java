package com.example.demo.service;

import com.example.demo.repository.productRepository;
import org.springframework.stereotype.Service;

@Service
public class productService {

    private final productRepository productRepository;

    public productService(productRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product getByName(String name) {
        return productRepository.findByName(name);
    }
}

