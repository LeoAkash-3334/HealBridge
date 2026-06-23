function sendMessage(){

let input=document.getElementById("userInput");
let text=input.value.trim();

if(text==="") return;

let chat=document.getElementById("chatBox");

chat.innerHTML+=`
<div class="message user">
${text}
</div>
`;

input.value="";

chat.innerHTML+=`
<div class="message ai" id="typing">
Typing...
</div>
`;

chat.scrollTop=chat.scrollHeight;

setTimeout(()=>{

document.getElementById("typing").remove();

let reply="I'm here for you ❤️";

let lower=text.toLowerCase();

if(lower.includes("stress")){
reply="Stress is common. Try deep breathing and consider speaking with one of our counsellors.";
}

else if(lower.includes("anxiety")){
reply="Anxiety can feel overwhelming. Meditation and professional help can make a difference.";
}

else if(lower.includes("depression")){
reply="You are not alone. I recommend booking a session with a psychiatrist for better support.";
}

else if(lower.includes("appointment")){
reply="I can help you find a specialist. Visit the Doctor Portal and book an appointment.";
}

else if(lower.includes("sad")){
reply="I'm sorry you're feeling sad. Talking with someone you trust or a counsellor can help.";
}

chat.innerHTML+=`
<div class="message ai">
${reply}
</div>
`;

chat.scrollTop=chat.scrollHeight;

},1500);

}