package com.homehero.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.homehero.demo.entity.Customer;
import com.homehero.demo.repository.CustomerRepository;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository repository;

    // ==========================
    // REGISTER CUSTOMER
    // ==========================
    public Customer registerCustomer(Customer customer) {

        return repository.save(customer);

    }

    // ==========================
    // LOGIN CUSTOMER
    // ==========================
    public Customer loginCustomer(String email, String password) {

        Optional<Customer> customer = repository.findByEmail(email);

        if(customer.isPresent()) {

            Customer existingCustomer = customer.get();

            if(existingCustomer.getPassword().equals(password)) {

                return existingCustomer;

            }

        }

        return null;

    }

    // ==========================
    // GET ALL CUSTOMERS
    // ==========================
    public List<Customer> getAllCustomers() {

        return repository.findAll();

    }

}