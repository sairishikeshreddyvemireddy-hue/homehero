// ==========================================
// HOMEHERO AI - ADMIN JAVASCRIPT
// ==========================================

// -----------------------------
// ADMIN LOGIN
// -----------------------------

function adminLogin(){

    const adminId =
    document.getElementById("adminId");

    const password =
    document.getElementById("adminPassword");

    // If this page isn't the login page, stop here
    if(!adminId || !password){
        return;
    }

    const id = adminId.value.trim();
    const pass = password.value.trim();

    if(id === ""){

        alert("Please enter Admin ID");

        return;

    }

    if(pass === ""){

        alert("Please enter Password");

        return;

    }

    if(id === "admin" && pass === "homehero123"){

        alert("Welcome Administrator!");

        window.location.href="admin-dashboard.html";

    }

    else{

        alert("Invalid Admin ID or Password");

    }

}



// ==========================================
// DASHBOARD
// ==========================================

function animateCounter(id,target,prefix=""){

    const element=document.getElementById(id);

    if(!element) return;

    let count=0;

    const increment=Math.ceil(target/60);

    const timer=setInterval(function(){

        count+=increment;

        if(count>=target){

            count=target;

            clearInterval(timer);

        }

        element.innerHTML=prefix+count.toLocaleString();

    },25);

}

if(document.getElementById("customerCount")){

animateCounter("customerCount",245);

animateCounter("professionalCount",91);

animateCounter("bookingCount",37);

animateCounter("revenueCount",82450,"₹");

}



// -----------------------------
// LOGOUT
// -----------------------------

const logoutBtn=document.querySelector(".logout-btn");

if(logoutBtn){

logoutBtn.addEventListener("click",function(){

if(confirm("Logout from Admin Portal?")){

window.location.href="admin-login.html";

}

});

}



// -----------------------------
// APPROVE
// -----------------------------

const approveBtn=document.querySelector(".approve-btn");

if(approveBtn){

approveBtn.addEventListener("click",function(){

alert("Professional Approved!");

this.innerHTML="✔ Approved";

this.disabled=true;

});

}



// -----------------------------
// REJECT
// -----------------------------

const rejectBtn=document.querySelector(".reject-btn");

if(rejectBtn){

rejectBtn.addEventListener("click",function(){

alert("Professional Rejected");

this.innerHTML="Rejected";

this.disabled=true;

});

}



// -----------------------------
// TABLE ANIMATION
// -----------------------------

const rows=document.querySelectorAll("tbody tr");

rows.forEach(function(row,index){

row.style.opacity="0";

row.style.transform="translateY(30px)";

setTimeout(function(){

row.style.transition=".6s";

row.style.opacity="1";

row.style.transform="translateY(0px)";

},index*250);

});