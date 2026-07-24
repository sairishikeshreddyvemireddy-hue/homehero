// ===============================
// HomeHero AI Booking Page Script
// ===============================

// Read selected service from Dashboard
const selectedService =
localStorage.getItem("selectedService");

// Show selected service
const serviceBox =
document.getElementById("selectedService");

const serviceTitle =
document.getElementById("serviceTitle");

if(selectedService){

    serviceBox.innerHTML = selectedService;

    serviceTitle.innerHTML = "Book " + selectedService;

}else{

    serviceBox.innerHTML = "Select Service";

}

// Price Update
const houseSize =
document.getElementById("houseSize");

const priceCard =
document.getElementById("priceCard");

function updatePrice(){

    priceCard.innerHTML =
    "₹" + houseSize.value;

}

houseSize.addEventListener("change", updatePrice);
updatePrice();

// AI Assistant
function analyzeRequest(){

    const text =
    document.getElementById("aiInput")
    .value
    .toLowerCase();

    if(text.includes("clean")){
        serviceBox.innerHTML = "🧹 Cleaning";
    }
    else if(text.includes("cook")){
        serviceBox.innerHTML = "🍳 Cooking";
    }
    else if(text.includes("electric")){
        serviceBox.innerHTML = "⚡ Electrician";
    }
    else if(text.includes("plumb")){
        serviceBox.innerHTML = "🔧 Plumbing";
    }
    else{
        alert("🤖 AI could not identify the service yet.");
    }
}

// ===============================
// Book Now (SAVE TO MYSQL)
// ===============================
// ===============================
// Book Now (SAVE TO MYSQL)
// ===============================

async function bookNow() {

    const address = document.getElementById("address").value.trim();
    const mobile = document.getElementById("mobile").value.trim();

    if (address === "") {
        alert("Please enter your address.");
        return;
    }

    if (mobile === "") {
        alert("Please enter your mobile number.");
        return;
    }
    const customer =
JSON.parse(localStorage.getItem("loggedInCustomer"));

if(!customer){

    alert("Please login first.");

    window.location.href = "customer-login.html";

    return;

}

    const booking = {

        customerName: customer.fullName,

        service: document.getElementById("selectedService").innerText,

        address: address,

        mobile: mobile,

        date: document.getElementById("bookingDate").value,

        time: document.getElementById("bookingTime").value

    };

    try {

        const response = await fetch("http://localhost:8080/api/bookings", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(booking)

        });
        alert("Status = " + response.status);

const result = await response.text();

alert(result);
console.log(result);

        if (response.ok) {

            alert("🎉 Booking Saved Successfully!");

            // No localStorage anymore
            window.location.href = "customer-dashboard.html";

        } else {

            alert("❌ Failed to save booking.");

        }

    } catch (error) {

        console.error(error);

        alert("❌ Cannot connect to Spring Boot Server.");

    }

}

function closePopup(){
    window.location.href = "customer-dashboard.html";
}