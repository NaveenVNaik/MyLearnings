var body = document.getElementById("gradient");
var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var	gradientValue = document.querySelector("p");


function setGradient(){
	console.log(input1.value);
}

input1.addEventListener("input", setGradient);



