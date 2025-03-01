console.log ("hello Ayush");
// if else condition 
const age = 19;
if (age >= 18) {
    console.log("You can vote now");    
} else {
    console.log("you can not able to do vote");
}
 
// if else if condition 
const num = 10;
if (num === 0) {
    console.log("Number is zero"); 
}else if (num % 2 === 0) {
    console.log("Number is even");
    
} else {
    console.log("Nuber is odd");
    
}

// if user login send him to home page and if not send him to login page 

const isUsserLoggedIn = true;
if (isUsserLoggedIn) {
    console.log("Send user to home page");
} else {
    console.log("Send user to login page");
}

// Ternary operators
// syntax :variable = condition ? true :  false
const userStatus = true ? console.log("send user to home page") : console.log("send user to login page");

// Loops
// for loop 
for (let i=1;i<=20;i++)
{
    console.log(i);
}