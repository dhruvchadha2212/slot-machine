var carousel = [];
var angle = [0, 0, 0];
carousel[0] = document.getElementById("container1");
carousel[1] = document.getElementById("container2");
carousel[2] = document.getElementById("container3");
var handle = document.getElementById("handle");
function addEvent() {
	handle.addEventListener("click", rotate1);
}
addEvent();
function rotate1() {
	handle.removeEventListener("click", rotate1);
	handle.style.transform = "rotateX(-90deg)";
	handle.style.transition = "transform 0.4s linear";	
	handle.addEventListener("transitionend", rotate2);
}
function rotate2() {
	handle.style.transform = "rotateX(0deg)";
	handle.style.transition = "transform 0.3s linear";
    randRotate();
}
function randRotate() {
	console.log("!");
	var rand = [];
	for(var i = 0 ; i < 3 ; i++) {
	    rand[i] = Math.floor(Math.random()*6);
        rand[i] = 60 * (rand[i] + 1);
	    angle[i] += (3600 + 1200*i + rand[i]);
	}
	carousel[1].removeEventListener("click", randRotate);
	for(var i = 0 ; i < 3 ; i++) {
	    carousel[i].style.transition = "transform " + (3+i) + "s cubic-bezier(.89,.77,.92,.99)";
		carousel[i].style.transform = "rotateX(" + angle[i] + "deg)";
	}
	carousel[2].addEventListener("transitionend",goBack);
}
function goBack() {
	handle.addEventListener("click", rotate1);
	for(var i = 0 ; i < 3 ; i++) {
		carousel[i].style.transition = "transform 0s";
	    carousel[i].style.transform = "rotateX(" + (angle[i]%360) + "deg)";
	    angle[i] %= 360;	
	}
}