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

/* Loops
1.) For 
2.) while
3.) do-while */

// for loop 
for (let i=1;i<=20;i++)
{
    console.log(i);
}

//while loop

let j = 5;
while (j <=20) {
    console.log(j);
    j++  
}
// do-while loop
//first do work then check the condition 
do{
    console.log(j);
    j++
}
while(j <=20)

// switch statement
const day = 12;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//write a program to check day is woking or not 
//using if else it becoe hactic and dificult so we can use here Switch statement

const date = "Monday"
switch (date) {
    case "Monday":
        console.log("Wow! it's a working Day");
        break;

    case "Tuesday":
        console.log("Wow! it's a working Day");
        break;
        
    case "Wednesday":
        console.log("Wow! it's a working Day");
        break;
    
    case "Thursday":
        console.log("Wow! it's a working Day");
        break;

    case "Friday":
        console.log("Wow! it's a working Day");
        break;
    
    case "Saturday":
        console.log("Wow! it's a working Day");
        break;
    
    case "Sunday":
        console.log("Today is Holyday");

    default:
        console.log("invalid day");
        break;
}
