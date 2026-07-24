package com.homehero.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.homehero.demo.entity.Professional;

public interface ProfessionalRepository extends JpaRepository<Professional, Long> {

    Optional<Professional> findByEmail(String email);

}
