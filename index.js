let pickupBtn = document.querySelector("#getPickup");
let pickupContent = document.querySelector(".pickupContent");

pickupBtn.addEventListener("click", () => {
    fetch("pickups.json")
    .then( res => res.json())
    .then( data => { 	let random = Math.floor(Math.random() * data.length);
	let randomPickup = data[random].pickup;
	pickupContent.innerText = randomPickup;
       });
});