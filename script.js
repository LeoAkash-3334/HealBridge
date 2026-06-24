/* ==========================
   HEALBRIDGE JAVASCRIPT
========================== */

const patientModal = document.getElementById("patientModal");
const doctorModal = document.getElementById("doctorModal");

/* ==========================
   PATIENT SIGNUP MODAL
========================== */

function openPatientSignup() {

patientModal.innerHTML = `
<div class="modal-overlay">

<div class="modal">

<h2>Start your healing</h2>

<p style="margin-bottom:20px;color:#777;">
Patient Account
</p>

<input type="text" placeholder="Full Name">

<input type="email" placeholder="Email Address">

<input type="password" placeholder="Password">

<input type="tel" placeholder="Phone Number">

<button onclick="createPatientAccount()">
Create Account
</button>

<br><br>

<center>
<a href="#" onclick="openPatientLogin()">
Already have an account?
</a>
</center>

</div>

</div>
`;

closeModalOutside();
}

/* ==========================
   PATIENT LOGIN MODAL
========================== */

function openPatientLogin() {

patientModal.innerHTML = `
<div class="modal-overlay">

<div class="modal">

<h2>Welcome Back</h2>

<p style="margin-bottom:20px;color:#777;">
Patient Account
</p>

<input type="email" placeholder="Email Address">

<input type="password" placeholder="Password">

<button onclick="patientDashboard()">
Log In
</button>

<br><br>

<center>
<a href="#" onclick="openPatientSignup()">
Create new account
</a>
</center>

</div>

</div>
`;

closeModalOutside();
}

/* ==========================
   DOCTOR LOGIN
========================== */

function openDoctorLogin(){

doctorModal.innerHTML = `
<div class="modal-overlay">

<div class="modal">

<h2>Doctor Portal</h2>

<p style="margin-bottom:20px;color:#777;">
Specialist Login
</p>

<input type="email" placeholder="Email Address">

<input type="password" placeholder="Password">

<button onclick="doctorDashboard()">
Login
</button>

<br><br>

<center>
<a href="#" onclick="openDoctorSignup()">
Join as Specialist
</a>
</center>

</div>

</div>
`;

closeModalOutside();
}

/* ==========================
   DOCTOR SIGNUP
========================== */

function openDoctorSignup(){

doctorModal.innerHTML = `
<div class="modal-overlay">

<div class="modal">

<h2>Join HealBridge</h2>

<p style="margin-bottom:20px;color:#777;">
Doctor / Specialist
</p>

<input type="text" placeholder="Full Name">

<input type="email" placeholder="Email Address">

<input type="text" placeholder="Specialization">

<input type="password" placeholder="Password">

<button onclick="doctorDashboard()">
Create Account
</button>

</div>

</div>
`;

closeModalOutside();
}

/* ==========================
   CLOSE MODAL
========================== */

function closeModalOutside(){

document
.querySelectorAll(".modal-overlay")
.forEach(modal=>{

modal.addEventListener("click",(e)=>{

if(e.target.classList.contains("modal-overlay")){

patientModal.innerHTML="";
doctorModal.innerHTML="";

}

});

});

}

/* ==========================
   CREATE ACCOUNT
========================== */

function createPatientAccount(){

alert(
"Account Created Successfully!"
);

patientDashboard();

}

/* ==========================
   PATIENT DASHBOARD
========================== */

function patientDashboard(){

document.body.innerHTML = `

<header class="navbar">

<div class="logo">
<div class="logo-icon">
<i class="fa-solid fa-brain"></i>
</div>
<h2>HealBridge</h2>
</div>

<div style="display:flex;gap:20px;align-items:center;">
<i class="fa-regular fa-bell"></i>

<div class="start-btn">
Alex
</div>
</div>

</header>

<section style="padding:40px 8%;">

<h1 style="
font-size:3rem;
margin-bottom:10px;">
Good morning, Alex
</h1>

<p style="
margin-bottom:30px;
color:#777;">
How can HealBridge support you today?
</p>

<div style="
display:flex;
gap:15px;
flex-wrap:wrap;
margin-bottom:30px;">

<button
class="secondary-btn"
onclick="showMiaChat()">
Talk to Mia
</button>

<button
class="secondary-btn"
onclick="showDoctors()">
Find a Doctor
</button>

<button
class="secondary-btn"
onclick="showAppointments()">
Appointments
</button>

<button
class="secondary-btn"
onclick="showTips()">
Wellness Tips
</button>

</div>

<div id="patientContent"></div>

</section>
`;

showMiaChat();

}

/* ==========================
   MIA CHAT
========================== */

function showMiaChat(){

document.getElementById("patientContent").innerHTML = `

<div class="mia-container">

<div class="chat-box">

<h2>Mia AI Companion</h2>

<div id="chatMessages" class="chat-messages">

<div class="mia-msg">
Hello 👋 I'm Mia.
How are you feeling today?
</div>

</div>

<div class="chat-input-row">

<input
id="userMessage"
type="text"
placeholder="Tell me how you're feeling..."
>

<button onclick="sendMessage()">
Send
</button>

</div>

</div>

<div class="chat-side">

<div class="tip-card">
<h3>Suggested Topics</h3>
<p>Anxiety</p>
<p>Stress</p>
<p>Loneliness</p>
<p>Sleep Issues</p>
</div>

</div>

</div>
`;

}

/* ==========================
   DOCTOR LIST
========================== */

function showDoctors(){

document.getElementById(
"patientContent"
).innerHTML = `

<h2 style="
margin-bottom:25px;">
Find a Doctor
</h2>

<div class="doctor-grid">

<div class="doctor-card">

<img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2">

<div class="doctor-info">

<h3>Dr. Sarah</h3>

<p>Psychiatrist</p>

<button onclick="bookDoctor()">
Book
</button>

</div>

</div>

<div class="doctor-card">

<img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d">

<div class="doctor-info">

<h3>Dr. Marcus</h3>

<p>Counsellor</p>

<button onclick="bookDoctor()">
Book
</button>

</div>

</div>

<div class="doctor-card">

<img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f">

<div class="doctor-info">

<h3>Dr. Priya</h3>

<p>Psychiatrist</p>

<button onclick="bookDoctor()">
Book
</button>

</div>

</div>

</div>

`;

}

/* ==========================
   BOOK DOCTOR
========================== */

function bookDoctor(){

alert(
"Appointment Booked Successfully!"
);

showAppointments();

}

/* ==========================
   APPOINTMENTS
========================== */

function showAppointments(){

document.getElementById(
"patientContent"
).innerHTML = `

<h2 style="
margin-bottom:25px;">
My Appointments
</h2>

<div class="doctor-card">

<div class="doctor-info">

<h3>Dr. Marcus Thayer</h3>

<p>Counsellor</p>

<p>
Tue, Jun 17 at 10:30 AM
</p>

</div>

</div>

`;

}

/* ==========================
   TIPS PAGE
========================== */

function showTips(){

document.getElementById(
"patientContent"
).innerHTML = `

<h2 style="
margin-bottom:30px;">
Wellness Tips
</h2>

<div class="tips-grid">

<div class="tip-card">

<h3>Sleep Hygiene</h3>

<p>
Maintain a regular
sleep schedule.
</p>

</div>

<div class="tip-card">

<h3>Box Breathing</h3>

<p>
4-4-4-4 breathing
technique.
</p>

</div>

<div class="tip-card">

<h3>Morning Sunlight</h3>

<p>
Get 10 minutes of
natural sunlight.
</p>

</div>

</div>

`;

}

/* ==========================
   DOCTOR DASHBOARD
========================== */

function doctorDashboard(){

document.body.innerHTML = `

<header class="navbar">

<div class="logo">

<div class="logo-icon">
<i class="fa-solid fa-brain"></i>
</div>

<h2>HealBridge</h2>

</div>

<div class="start-btn">
Dr. Sarah
</div>

</header>

<section class="doctor-dashboard">

<h1>Doctor Dashboard</h1>

<div class="dashboard-cards">

<div class="dashboard-card">
<h2>12</h2>
<p>Appointments Today</p>
</div>

<div class="dashboard-card">
<h2>94%</h2>
<p>Patient Satisfaction</p>
</div>

<div class="dashboard-card">
<h2>147</h2>
<p>Total Patients</p>
</div>

<div class="dashboard-card">
<h2>₹85,000</h2>
<p>Monthly Earnings</p>
</div>

</div>

<h2 style="margin-top:40px;">
Upcoming Appointments
</h2>

<div class="appointment-list">

<div class="appointment-card">
<h3>Alex Morgan</h3>
<p>Today • 3:00 PM</p>
<button>Start Session</button>
</div>

<div class="appointment-card">
<h3>Jordan Lee</h3>
<p>Today • 5:00 PM</p>
<button>Start Session</button>
</div>

<div class="appointment-card">
<h3>Emma Stone</h3>
<p>Tomorrow • 11:00 AM</p>
<button>View Details</button>
</div>

</div>

</section>

`;

}

/* ==========================
   EVENTS
========================== */

document.addEventListener(
"DOMContentLoaded",
()=>{

const patientLoginBtn =
document.getElementById(
"patientLoginBtn"
);

const patientSignupBtn =
document.getElementById(
"patientSignupBtn"
);

const heroStartBtn =
document.getElementById(
"heroStartBtn"
);

const doctorPortalBtn =
document.getElementById(
"doctorPortalBtn"
);

const providerJoinBtn =
document.getElementById(
"providerJoinBtn"
);

if(patientLoginBtn){

patientLoginBtn.addEventListener(
"click",
openPatientLogin
);

}

if(patientSignupBtn){

patientSignupBtn.addEventListener(
"click",
openPatientSignup
);

}

if(heroStartBtn){

heroStartBtn.addEventListener(
"click",
openPatientSignup
);

}

if(doctorPortalBtn){

doctorPortalBtn.addEventListener(
"click",
openDoctorLogin
);

}

if(providerJoinBtn){

providerJoinBtn.addEventListener(
"click",
openDoctorSignup
);

}

});
/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-toggle");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

const nav = document.querySelector(".nav-links");

if(nav.style.display === "flex"){

nav.style.display = "none";

}else{

nav.style.display = "flex";
nav.style.flexDirection = "column";
nav.style.position = "absolute";
nav.style.top = "80px";
nav.style.left = "0";
nav.style.width = "100%";
nav.style.background = "#fff";
nav.style.padding = "20px";
nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.1)";

}

});

}
function sendMessage(){

const input =
document.getElementById("userMessage");

const text = input.value.trim();

if(text === "") return;

const chat =
document.getElementById("chatMessages");

chat.innerHTML += `
<div class="user-msg">
${text}
</div>
`;

let response =
"Thank you for sharing that. Would you like to explore these feelings further?";

const msg = text.toLowerCase();

if(msg.includes("stress")){

response =
"Stress can feel overwhelming. Try taking a few deep breaths and focusing on one task at a time.";

}

if(msg.includes("anxiety")){

response =
"Anxiety is common. Grounding exercises and professional guidance may help.";

}

if(msg.includes("depressed")){

response =
"I'm sorry you're experiencing that. Talking with a licensed specialist could be beneficial.";

}

if(msg.includes("lonely")){

response =
"Feeling lonely can be difficult. Consider reaching out to someone you trust.";

}

setTimeout(()=>{

chat.innerHTML += `
<div class="mia-msg">
${response}
</div>
`;

chat.scrollTop = chat.scrollHeight;

},500);

input.value="";

}
function sendMessage(){

const input =
document.getElementById("userMessage");

const text = input.value.trim();

if(text === "") return;

const chat =
document.getElementById("chatMessages");

chat.innerHTML += `
<div class="user-msg">
${text}
</div>
`;

let response =
"Thank you for sharing that. Would you like to explore these feelings further?";

const msg = text.toLowerCase();

if(msg.includes("stress")){

response =
"Stress can feel overwhelming. Try taking a few deep breaths and focusing on one task at a time.";

}

if(msg.includes("anxiety")){

response =
"Anxiety is common. Grounding exercises and professional guidance may help.";

}

if(msg.includes("depressed")){

response =
"I'm sorry you're experiencing that. Talking with a licensed specialist could be beneficial.";

}

if(msg.includes("lonely")){

response =
"Feeling lonely can be difficult. Consider reaching out to someone you trust.";

}

setTimeout(()=>{

chat.innerHTML += `
<div class="mia-msg">
${response}
</div>
`;

chat.scrollTop = chat.scrollHeight;

},500);

input.value="";

}
/* ==========================
   SCROLL ANIMATION
========================== */

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document
.querySelectorAll(
".step-card,.doctor-card,.tip-card"
)
.forEach(el=>{

observer.observe(el);

});