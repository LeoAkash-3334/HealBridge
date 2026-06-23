document
.getElementById("bookingForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

let appointment={

doctor:
document.getElementById("doctor").value,

date:
document.getElementById("date").value,

time:
document.getElementById("time").value,

reason:
document.getElementById("reason").value

};

localStorage.setItem(
"appointment",
JSON.stringify(appointment)
);

alert("Appointment Booked Successfully!");

window.location.href="dashboard.html";

});