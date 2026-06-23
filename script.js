function scrollToAppointment(){

document
.getElementById("appointment")
.scrollIntoView({
behavior:"smooth"
});

}

function startChat(){

alert("Hello 👋 I'm Mia. How are you feeling today?");

}

document
.getElementById("appointmentForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Appointment Booked Successfully ❤️");

});

function sendMessage(){

let text=document.getElementById("message").value;

if(text==="") return;

let chat=document.getElementById("chatBox");

chat.innerHTML+=&lt;div class="user-message"&gt; ${text} &lt;/div&gt;;

setTimeout(()=>{

chat.innerHTML+=&lt;div class="ai-message"&gt; I'm here for you ❤️ &lt;/div&gt;;

chat.scrollTop=chat.scrollHeight;

},1000);

document.getElementById("message").value="";

}