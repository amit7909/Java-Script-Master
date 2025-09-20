function multiply(a, b) {    //argument
    //console.log(a*b); // console is bad practice 
    return a*b;
}

multiply(7,5) //parameter

function addNumber() {
    let ans = 0;
    for (let i = 0; i < arguments.length; i+1) {
        ans = ans + arguments[i];
        
    }
    return ans;
}

let result = addNumber(10,100,200,20)
console.log(result);
