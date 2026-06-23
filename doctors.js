let search = document.getElementById("search");

search.addEventListener("keyup", ()=>{

let filter = search.value.toUpperCase();

let cards = document.querySelectorAll(".doctor-card");

cards.forEach(card=>{

let text = card.innerText.toUpperCase();

if(text.indexOf(filter)>-1){

card.style.display="block";

}

else{

card.style.display="none";

}

});

});