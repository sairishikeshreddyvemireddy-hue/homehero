package com.homehero.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.homehero.demo.entity.Professional;
import com.homehero.demo.repository.ProfessionalRepository;

@Service
public class ProfessionalService {

    @Autowired
    private ProfessionalRepository repository;

    // ==========================
    // REGISTER PROFESSIONAL
    // ==========================
    public Professional registerProfessional(Professional professional) {

        professional.setStatus("Available");

        return repository.save(professional);
    }

    // ==========================
    // LOGIN PROFESSIONAL
    // ==========================
    public Professional loginProfessional(String email, String password) {

        Optional<Professional> professional = repository.findByEmail(email);

        if (professional.isPresent()) {

            Professional existingProfessional = professional.get();

            if (existingProfessional.getPassword().equals(password)) {
                return existingProfessional;
            }
        }

        return null;
    }

    // ==========================
    // GET ALL PROFESSIONALS
    // ==========================
    public List<Professional> getAllProfessionals() {
        return repository.findAll();
    }

}