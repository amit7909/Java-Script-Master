const name = new String("John Doe");

console.log(name[0]);    
console.log(name.length);
console.log(name.charAt(0));
console.log(name.charAt(name.length - 1));


console.log(name.length);  //8
console.log(name.slice(0, 4));  //John
console.log(name.slice(0, -1)); //John Do
console.log(name.toupperCase()); //JOHN DOE
console.log(name.toLowerCase()); //john doe  for comparission




