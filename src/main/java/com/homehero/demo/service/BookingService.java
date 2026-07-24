package com.homehero.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.homehero.demo.entity.Booking;
import com.homehero.demo.repository.BookingRepository;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repository;

    // ===============================
    // SAVE BOOKING
    // ===============================
    public Booking saveBooking(Booking booking) {

    booking.setStatus("🔍 Searching Professional");

    booking.setAssignedProfessional("");

    return repository.save(booking);

}

    // ===============================
    // GET ALL BOOKINGS
    // ===============================
    public List<Booking> getAllBookings() {

        return repository.findAll();

    }

    // ===============================
    // GET LATEST BOOKING
    // ===============================
    public Booking getLatestBooking() {

        return repository.findTopByOrderByIdDesc().orElse(null);

    }

    // ===============================
    // ACCEPT BOOKING
    // ===============================
    public Booking acceptBooking(Long id) {

        return updateStatus(id, "🟢 Professional Assigned");

    }

    // ===============================
    // ON THE WAY
    // ===============================
    public Booking travelBooking(Long id) {

        return updateStatus(id, "🚗 Professional On The Way");

    }

    // ===============================
    // START WORK
    // ===============================
    public Booking startBooking(Long id) {

        return updateStatus(id, "🛠 Work Started");

    }

    // ===============================
    // COMPLETE WORK
    // ===============================
    public Booking completeBooking(Long id) {

        return updateStatus(id, "🎉 Service Completed");

    }

    // ===============================
    // GET BOOKINGS OF ONE CUSTOMER
    // ===============================
    public List<Booking> getBookingsByCustomer(String customerName) {

        return repository.findByCustomerName(customerName);

    }

    // ===============================
    // COMMON STATUS UPDATE
    // ===============================
    private Booking updateStatus(Long id, String status) {

        Booking booking = repository.findById(id).orElse(null);

        if (booking != null) {

            booking.setStatus(status);

            return repository.save(booking);

        }

        return null;

    }

}