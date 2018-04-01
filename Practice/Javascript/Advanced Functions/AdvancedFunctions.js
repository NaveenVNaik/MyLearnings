//---------------Closure------------------------------------

let temp  = 8;

const parentFun = () => {
	console.log("inside parentFun",temp)// This is closure becuase parentFun has access to
					 //variable temp defined in the parent scope (window) 
	let temp2 = "i m parent variable";

	const childFun = () => {
		console.log("inside childFun",temp2);
		let temp3 = "i m child variable";
	}

	return childFun;
} 

const test = parentFun();// it will return childFun function as return type.
test();//so when we execute test it will execute childFun function

//------------Currying---------------------------------------
//normal function which takes 2 argumets
const multiply = (a,b) => a*b;

//curried function - will take one argument. here function curriedMultiply will take one argument
//and will return a another function (b) => a*b; where a is passed from curriedMultiply function
//It is like function inside another function.

const curriedMultiply  = (a) => (b) => a*b;
const test = curriedMultiply(3); // it will return (b) => a*b
test(5); // it will return 15
curriedMultiply(3)(4);//will return 12

const curriedMul = (a) => (b,c) => a*b*c;

//another example 
const concateStr = (str1) => {
	const test  = (str2) => {
		return `${str1} ${str2}`;
	}
	return test;
}

const f1 = concateStr("hii"); 
//will return below function
// (str2) => {
// 		return `${str1} ${str2}`;
// 	}

f1("Naveen");//will return output ${str1} ${str2}

//so finally using shorthand notation of arrow function 
const concateStr  = (str1) => (str2) => `${str1} ${str2}`;
const test1 = concateStr("test fun"); //will return `${str1} ${str2}`
test1("Hii");//this will return the final result;

concateStr("Hiiii")("naveen!!");


//---------------Compose----------------------------------------

//this is kind of defination
const compose = (f,g) => (a) => f(g(a));

//example
const addSub = (add, sub) => (num) => add(sub(num));

const add = (a) => a + 5;
const sub = (b) => b - 2;

const test  = addSub(add, sub);
test(5);

//another example
const concateUpperStr = (upper, concate) => (str1, str2) => upper(concate(str1,str2));

const upper  = (s) => s.toUpperCase();
const concate  = (s1, s2)  => s1.concat(s2);

const test = concateUpperStr (upper,concate);
test("this is ","compose function");

concateUpperStr(upper,concate)("This is really ","exiting");

//trying out new things- st is parameter, upper and concate are functions
const concateUpperStr = (st,upper, concate) => (str1, str2) => upper(concate(st,str1,str2));
const upper  = (s) => s.toUpperCase();
const concate  = (st,s1, s2)  => (st.concat(s1)).concat(s2);

concateUpperStr("Naveen ",upper,concate)("This is really ","exiting");





