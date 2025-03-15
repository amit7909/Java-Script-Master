//By defaut My dear friends will print
// 01.Traditional Function
function SayHi(name = "Mydear Friends") {
    console.log("Hello "+ name);
    
}
SayHi("Amit")
// functions are first class citizes
//02.Function expresion
const sayHello = function(){
    console.log("Hello");

}
sayHello()
//What are aarrow function
//03.Arrow function
const sayHelloOncemore = ()=>{
    console.log("Kaise ho aap");
    
}
sayHelloOncemore()

//Implicit and explicit function

// Function with parameter.
function add(a,b){
    return a*b;
}
let sum = add(10,10);
console.log(sum);

const multiply = function(c,d){
    return c+d;
}
console.log(multiply(7,8));

// Rest  parameter 
function sumAll(a,...nums){
    console.log(a);
    console.log(nums);
    console.log(...nums);    
}
sumAll(1,2,3,4,5,6)

function test(){
    console.log(arguments);
    console.log(arguments[4]);
    console.log("Hyy");
    
}
test(1,"Hello",7,10,"shikha")


//finding area using Arrow function 
const area= (length,width) => {
    a = length*width;
    return a;
}
console.log(area(4,6));

// Higher order function
//taking function as an  argumenta
