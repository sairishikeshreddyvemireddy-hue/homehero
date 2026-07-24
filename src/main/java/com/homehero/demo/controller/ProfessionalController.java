package com.homehero.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.homehero.demo.entity.Professional;
import com.homehero.demo.service.ProfessionalService;

@RestController
@RequestMapping("/api/professionals")
@CrossOrigin(origins = "*")
public class ProfessionalController {

    @Autowired
    private ProfessionalService professionalService;

    // ==========================
    // PROFESSIONAL REGISTER
    // ==========================
   @PostMapping("/register")
public Professional registerProfessional(@RequestBody Professional professional) {

    try {

        System.out.println("========== REGISTER REQUEST ==========");
        System.out.println("Name : " + professional.getFullName());
        System.out.println("Email : " + professional.getEmail());
        System.out.println("Skills : " + professional.getSkills());

        return professionalService.registerProfessional(professional);

    } catch (Exception e) {

        e.printStackTrace();

        return null;
    }

}

    // ==========================
    // PROFESSIONAL LOGIN
    // ==========================
    @PostMapping("/login")
    public Professional loginProfessional(
            @RequestBody Map<String, String> loginData) {

        String email = loginData.get("email");
        String password = loginData.get("password");

        return professionalService.loginProfessional(email, password);
    }

    // ==========================
    // GET ALL PROFESSIONALS
    // ==========================
    @GetMapping
    public List<Professional> getAllProfessionals() {
        return professionalService.getAllProfessionals();
    }

}