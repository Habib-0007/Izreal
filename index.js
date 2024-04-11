var pickupBtn = document.querySelector("#getPickup");
var pickupContent = document.querySelector(".pickupContent");

pickupBtn.addEventListener("click", () => {
	fetch("https://pickup-lines-api.onrender.com/pickups")
		.then(res => res.json())
		.then(data => {
			let random = Math.floor(Math.random() * data.length);
			let randomPickup = data[random].pickup;
			pickupContent.textContent = randomPickup;
		})
		.catch(err => console.error(err));
});
