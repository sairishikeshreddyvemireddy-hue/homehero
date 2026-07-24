package com.homehero.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.homehero.demo.entity.Customer;
import com.homehero.demo.service.CustomerService;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "*")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    // ==========================
    // CUSTOMER SIGNUP
    // ==========================
    @PostMapping("/register")
    public Customer registerCustomer(@RequestBody Customer customer) {

        return customerService.registerCustomer(customer);

    }

    // ==========================
    // CUSTOMER LOGIN
    // ==========================
    @PostMapping("/login")
    public Customer loginCustomer(@RequestBody Map<String, String> loginData) {

        String email = loginData.get("email");
        String password = loginData.get("password");

        return customerService.loginCustomer(email, password);

    }

    // ==========================
    // GET ALL CUSTOMERS
    // ==========================
    @GetMapping
    public List<Customer> getAllCustomers() {

        return customerService.getAllCustomers();

    }

}