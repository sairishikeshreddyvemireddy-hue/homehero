// =====================================
// HomeHero AI Professional Dashboard
// =====================================

const container = document.getElementById("jobContainer");
const professional =
JSON.parse(localStorage.getItem("loggedInProfessional"));

const professionalSkills =
professional.skills.toLowerCase();

const jobCount = document.getElementById("jobCount");
const completedCount = document.getElementById("completedCount");
const earningCount = document.getElementById("earningCount");

loadBookings();

// Auto Refresh
setInterval(loadBookings,3000);

// =====================================
// LOAD BOOKINGS
// =====================================

async function loadBookings(){

try{

const response=await fetch("http://localhost:8080/api/bookings");

const bookings=await response.json();

container.innerHTML="";

let availableJobs=0;
let completedJobs=0;
let earnings=0;

bookings.forEach(booking=>{

// Statistics

if(booking.status==="🎉 Service Completed"){

completedJobs++;
earnings+=699;

}

// Hide completed bookings

if(booking.status==="🎉 Service Completed"){

return;

}
const bookingService =
booking.service.toLowerCase();

if(!professionalSkills.includes(bookingService)){

return;

}

availableJobs++;

container.innerHTML+=`

<div class="job-card">

<h2>${booking.service}</h2>

<p><b>Booking ID:</b> ${booking.id}</p>

<p><b>Customer:</b> ${booking.customerName}</p>

<p><b>Address:</b> ${booking.address}</p>

<p><b>Mobile:</b> ${booking.mobile}</p>

<p><b>Date:</b> ${booking.date}</p>

<p><b>Time:</b> ${booking.time}</p>

<p><b>Status:</b> ${booking.status}</p>

<div class="job-buttons">

<button class="accept-btn"
onclick="acceptJob(${booking.id})">

✅ Accept

</button>

<button class="travel-btn"
onclick="travelJob(${booking.id})">

🚗 On The Way

</button>

<button class="start-btn"
onclick="startJob(${booking.id})">

🛠 Start Work

</button>

<button class="complete-btn"
onclick="completeJob(${booking.id})">

🎉 Complete

</button>

</div>

</div>

`;

});

if(availableJobs===0){

container.innerHTML=`

<div class="job-card">

<h2>No Bookings Available</h2>

<p>Waiting for customers...</p>

</div>

`;

}

jobCount.innerHTML=availableJobs;
completedCount.innerHTML=completedJobs;
earningCount.innerHTML="₹"+earnings;

}

catch(error){

console.log(error);

container.innerHTML=`

<div class="job-card">

<h2>Cannot connect to Spring Boot Server</h2>

</div>

`;

}

}

// =====================================
// ACCEPT
// =====================================

async function acceptJob(id){

await fetch(`http://localhost:8080/api/bookings/${id}/accept`,{

method:"PUT"

});

loadBookings();

}

// =====================================
// TRAVEL
// =====================================

async function travelJob(id){

await fetch(`http://localhost:8080/api/bookings/${id}/travel`,{

method:"PUT"

});

loadBookings();

}

// =====================================
// START
// =====================================

async function startJob(id){

await fetch(`http://localhost:8080/api/bookings/${id}/start`,{

method:"PUT"

});

loadBookings();

}

// =====================================
// COMPLETE
// =====================================

async function completeJob(id){

await fetch(`http://localhost:8080/api/bookings/${id}/complete`,{

method:"PUT"

});

loadBookings();

}