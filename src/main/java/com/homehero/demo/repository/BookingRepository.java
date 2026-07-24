package com.homehero.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.homehero.demo.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    Optional<Booking> findTopByOrderByIdDesc();

    List<Booking> findByCustomerName(String customerName);

}