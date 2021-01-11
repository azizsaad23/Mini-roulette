function aziz () {
	var wheel = document.querySelector('.wheel');
	var startbutton = document.querySelector(".button");
	var deg = 0
	

	startbutton.addEventListener("click",() => {
		startbutton.style.pointerEvents= "none";
		deg= Math.floor(5000 + Math.random() * 5000);
		wheel.style.transition = "all 10s ease-out";
		wheel.style.transform = `rotate(${deg}deg`;
		wheel.classList.add("blur")
	})
}