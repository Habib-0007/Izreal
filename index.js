var pickupBtn = document.querySelector("#getPickup");
var pickupContent = document.querySelector(".pickupContent");

pickupBtn.addEventListener("click", () => {
	let random = Math.floor(Math.random() * 96);
		
	fetch(`https://pickup-lines-api-alpha.vercel.app/api/pickups/${random}`)
		.then(res => res.json())
		.then(data => {
		  pickupContent.textContent = data.pickup;
		})
		.catch(err => console.error(err));
});
