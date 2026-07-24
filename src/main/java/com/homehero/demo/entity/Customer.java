package com.homehero.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    @Column(unique = true)
    private String email;

    private String phone;

    private String password;

    private String address;

    public Customer() {
    }

    // ==========================
    // ID
    // ==========================

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // ==========================
    // FULL NAME
    // ==========================

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    // ==========================
    // EMAIL
    // ==========================

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // ==========================
    // PHONE
    // ==========================

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    // ==========================
    // PASSWORD
    // ==========================

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // ==========================
    // ADDRESS
    // ==========================

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

}