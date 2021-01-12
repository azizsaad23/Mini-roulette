
 alert("Welcome To Mini Roulette");
var currentLength = -4.86

$(".click").click(function click() {
	currentLength+= 1080 + (getRandomInt(0, 37)* 9.729)

	
	$(".wheel #wl").css("transform",'rotate(-' +currentLength + 'deg)')

})
function getRandomInt(min,max){
	return Math.floor(Math.random()* (max - min +1))+min
      
}


