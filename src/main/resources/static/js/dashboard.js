// ==========================================
// HOMEHERO AI CUSTOMER DASHBOARD
// ==========================================

const bookingBox = document.getElementById("latestBooking");

// Logged-in customer
const customerName = sessionStorage.getItem("customerName");

// ============================
// Update Timeline
// ============================

function activateStep(id) {

    const step = document.getElementById(id);

    if (step) {
        step.classList.add("completed");
    }

}

// ============================
// Reset Timeline
// ============================

function resetTimeline() {

    document.querySelectorAll(".step").forEach(step => {
        step.classList.remove("completed");
    });

}

// ============================
// Load Customer Bookings
// ============================

async function loadLatestBooking() {

    if (!customerName) {

        bookingBox.innerHTML =
        "<h3>Please login first.</h3>";

        return;

    }

    try {

        const response = await fetch(
            `http://localhost:8080/api/bookings/customer/${encodeURIComponent(customerName)}`
        );

        if (!response.ok) {

            bookingBox.innerHTML =
            "<h3>No Bookings Yet</h3>";

            return;

        }

        const bookings = await response.json();

        if (bookings.length === 0) {

            bookingBox.innerHTML =
            "<h3>No Bookings Yet</h3>";

            return;

        }

        // Latest booking of this customer
        const latestBooking = bookings[bookings.length - 1];

        resetTimeline();

        // Booking Confirmed
        activateStep("bookingStep");

        if (latestBooking.status.includes("Assigned")) {

            activateStep("assignedStep");

        }

        if (latestBooking.status.includes("Way")) {

            activateStep("assignedStep");
            activateStep("travelStep");

        }

        if (latestBooking.status.includes("Started")) {

            activateStep("assignedStep");
            activateStep("travelStep");
            activateStep("startStep");

        }

        if (latestBooking.status.includes("Completed")) {

            activateStep("assignedStep");
            activateStep("travelStep");
            activateStep("startStep");
            activateStep("completeStep");

        }

        bookingBox.innerHTML = `

<div style="
padding:20px;
background:rgba(255,255,255,.15);
border-radius:18px;
">

<h2>${latestBooking.service}</h2>

<p><strong>Booking ID:</strong> ${latestBooking.id}</p>

<p><strong>Customer:</strong> ${latestBooking.customerName}</p>

<p><strong>Date:</strong> ${latestBooking.date}</p>

<p><strong>Time:</strong> ${latestBooking.time}</p>

<p><strong>Status:</strong> ${latestBooking.status}</p>

</div>

`;

    }

    catch(error){

        console.error(error);

        bookingBox.innerHTML =
        "<h3>❌ Cannot connect to Spring Boot Server.</h3>";

    }

}

loadLatestBooking();

// Refresh every 3 seconds
setInterval(loadLatestBooking, 3000);