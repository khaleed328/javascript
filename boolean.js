//BOOLEANS true or false
//
const isMarried = true;
// comparison operators < > <= >= ==(loose) === (strict)

console.log(5 == "5.0");
console.log(5 === "5");
let userspin = 1234;

let enteredpin = 1224;
console.log(userspin == enteredpin); //false

let balance = 10000;
let withdrawalAmount = 9000;
balance >= withdrawalAmount; //f

userspin === enteredpin && balance >= withdrawalAmount;

// logical operators and && or   not !
// and operator - every conition must be true
// or just needs one condition to be true
console.log(3 < 4 && 5 < 8 && 10 > 15); // t and t and f
console.log(5 == "5" && 4.5 >= 5.9999); // t and f == f

// truthy and falsy values 
// 'ade'
//string and valid string will be true, ''
const myName = "    jay";

console.log(Boolean(myName));

//numbers any number is true positive or negative
//zero (falsy)
const value = 0.0;
console.log(Boolean(value));

