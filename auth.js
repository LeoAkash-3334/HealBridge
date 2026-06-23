function toggleLoginPassword() {

let pass = document.getElementById("loginPassword");

if(pass.type==="password"){
pass.type="text";
}
else{
pass.type="password";
}

}

function toggleSignupPassword(){

let pass = document.getElementById("signupPassword");

if(pass.type==="password"){
pass.type="text";
}
else{
pass.type="password";
}

}


// Validation

const form = document.getElementById("signupForm");

if(form){

form.addEventListener("submit",(e)=>{

let password=document.getElementById("signupPassword").value;
let confirm=document.getElementById("confirmPassword").value;

if(password!==confirm){

e.preventDefault();

alert("Passwords do not match!");

}

});

}