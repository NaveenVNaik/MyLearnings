var database = [
	{
		username : "naveen",
		password : "1234"
	},
	{
		username : "praveen",
		password : "abc34",
	}
]

var newsfeed = [
	{
		username : "bob",
		news : "javascript is mast"
	},
	{
		username : "andy",
		news : "backend ???"
	}
]



function validateUser(username,pwd){
	for (var i=0; i<database.length;i++){
		if(database[i].username === username && database[i].password === pwd){
				return true;
		}
	}
	return false;
}


function SignIn(username, pwd){
	if (validateUser(username,pwd)){
		console.log(newsfeed);
	} else 
		console.log("Hmmmm try next time..!!!");
}

var username = prompt("username ??");
var pwd = prompt("password ??");

SignIn(username,pwd);

