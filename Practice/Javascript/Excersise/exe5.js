function checkDriverAge(age){
	if(age < 18){
		return "you'r to young to drive the car";
	} else if (age > 18){
		return "you'r onboarded for driving";
	}else{
		return "Enjoy ur first ride";
	}
}

var checkDriverAge2 = function (age){
	if(age < 18){
		return "you'r to young to drive the car";
	} else if (age > 18){
		return "you'r onboarded for driving";
	}else{
		return "Enjoy ur first ride";
	}
}

var age = prompt("Enter your age");

console.log(checkDriverAge(age));

// var age2=prompt("Enter your age");

// console.log(checkDriverAge2(age2));

