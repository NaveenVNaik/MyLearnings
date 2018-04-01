//-----------------let----------------------------------


//difference b/w let and var
//let will difine scope for variables inside curly brackets but var not
//Example using let

let name = 'naveen';
let age = 24;
let allow = false;

if(age > 20){
	let allow = true;
	console.log("inside ",allow);//true
}
console.log("outside ",allow);//false

//using var

var name = 'naveen';
var age = 24;
var allow = false;

if(age > 20){
	var allow = true;
	console.log("inside ",allow);//true
}
console.log("outside ",allow);//true


//------------------const----------------------------------------------
//if we use const then that variable value can't be changed.
const title = "YoYo";
title = "yaYa";

const a = function (){
	console.log("test");
}

//we can change the property values inside the object but we can't 
//assign object obj to anything else.
const obj = {
	name :"naveen",
	age  : 24,
	country: "IND"
}

obj = 9;

obj.name = "praveen";
obj.age = 54;


//----------------Destructuring of object--------------------------

const obj = {
	name :"naveen",
	age  : 24,
	country: "IND"
}

//without destructuring
const name = obj.name;
let age = obj.age;
const country = obj.country;

//with destructuring
const { name, country } = obj;
let { age } = obj;

//----------object property can be dynamically changed----------

const name = "TestName";
let age = "Testage";
const obj = {
	[name] :"naveen",
	[age]  : 24,
	["hi" + "bye"] : "IND",
	[1 + 2] : "Addition"
}

//--------different way of assigning the object properties and values--

let a = "nav";
let b = "prav";
let c= 7;

//traditional way
const obj = {
	a:a,
	b:b,
	c:c
}

//new way
const obj = {
	a,
	b,
	c
}


//----------------Template string ----------------------------------

let a = "nav";
let b = "prav";
let c= 7;

let test = `This is ${a} and ${b} with ${c + 8} cars.`;

//--------------Default arguments in function----------------------
 
let a = "nav";
let b = "prav";
let c= 7;

function test (a = "", b="chaya", c= 8){
	return  `This is ${a} and ${b} with ${c + 8} cars.`;
}


//------------Symbol-----------------------
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');


//-------Arrow functions-----------------

//if we have only one return statement then below syntax works.
const add1  = (a,b) => a+b;

//if we have more than one return statement 
const sub = (a,b) => {
	if (a>b)
		return a-b;
	else
		return b-a;
}


//above one is same as 
function add2(a,b){
	return a+b;
}





