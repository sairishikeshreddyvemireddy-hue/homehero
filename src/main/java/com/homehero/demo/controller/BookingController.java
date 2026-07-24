package com.homehero.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.homehero.demo.entity.Booking;
import com.homehero.demo.service.BookingService;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "*")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    // Save Booking
    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.saveBooking(booking);
    }

    // Get All Bookings
    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    // Get Latest Booking
    @GetMapping("/latest")
    public Booking getLatestBooking() {
        return bookingService.getLatestBooking();
    }

    // Accept Booking
    @PutMapping("/{id}/accept")
    public Booking acceptBooking(@PathVariable Long id) {
        return bookingService.acceptBooking(id);
    }

    // Travel
    @PutMapping("/{id}/travel")
    public Booking travelBooking(@PathVariable Long id) {
        return bookingService.travelBooking(id);
    }

    // Start Work
    @PutMapping("/{id}/start")
    public Booking startBooking(@PathVariable Long id) {
        return bookingService.startBooking(id);
    }

    // Complete Work
    @PutMapping("/{id}/complete")
    public Booking completeBooking(@PathVariable Long id) {
        return bookingService.completeBooking(id);
    }

    // Customer Bookings
    @GetMapping("/customer/{customerName}")
    public List<Booking> getCustomerBookings(
            @PathVariable String customerName) {

        return bookingService.getBookingsByCustomer(customerName);
    }

}