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

    serviceTitle.innerHTML =
    "Book " + selectedService;

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

houseSize.addEventListener("change",updatePrice);

updatePrice();


// AI Assistant

function analyzeRequest(){

    const text =
    document.getElementById("aiInput")
    .value
    .toLowerCase();

    if(text.includes("clean")){

        serviceBox.innerHTML="🧹 Cleaning";

    }

    else if(text.includes("cook")){

        serviceBox.innerHTML="🍳 Cooking";

    }

    else if(text.includes("electric")){

        serviceBox.innerHTML="⚡ Electrician";

    }

    else if(text.includes("plumb")){

        serviceBox.innerHTML="🔧 Plumbing";

    }

    else{

        alert("🤖 AI could not identify the service yet.");

    }

}


// Book Now

function bookNow(){

const address =
document.getElementById("address").value;

const mobile =
document.getElementById("mobile").value;

if(address===""){

alert("Please enter your address.");

return;

}

if(mobile===""){

alert("Please enter your mobile number.");

return;

}

const bookingId =
"HHA-" +
Math.floor(Math.random()*900000+100000);

document.getElementById("popupService").innerHTML =
document.getElementById("selectedService").innerHTML;

document.getElementById("popupPrice").innerHTML =
document.getElementById("priceCard").innerHTML;

document.getElementById("bookingId").innerHTML =
bookingId;

document.getElementById("successPopup").style.display =
"flex";

setTimeout(function(){

window.location.href="customer-dashboard.html";

},3000);

}

function closePopup(){

window.location.href="customer-dashboard.html";

}