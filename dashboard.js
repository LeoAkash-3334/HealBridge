let appointment=
JSON.parse(
localStorage.getItem("appointment")
);

if(appointment){

document.getElementById(
"appointmentCount"
).innerHTML="1";

}