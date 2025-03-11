// conditional statement
//if statement
//if(condition true) {
//lines of code
//}

if (true) {
    console.log("Helllo world");
}

// 11+ // YOU ARE ELIGIBLE TO KILL
const age = 11;

if (age >= 11) {
    console.log("YOU ARE ELIGIBLE TO KILL");
}

const password = "Sekinat";
// write an if statement that logs password is strong to the
//console if the password length is 9 and above
if(password .length >= 9) {
    console.log("password is strong");
}

// if else statement

if (false) {
    console.log("hello class");
} else {
    console.log("goodbye class");
}

if (password.length >= 9) {
    console.log("password is strong");
} else{
    console.log("password is weak");
}

// declare twwo variable balance and amount set them to any value

const balance = 2000000;
const amount = 3000000;

if (balance > amount) {
    console.log("transaction successful");
} else {
    console.log("insufficient funds");
}

const userpin = "2098"

const enterpin = "2097"

if (userpin.enterpin) {
    console.log("correct pin");
} else {
    console.log("incorrect pin");
}

const Email = "keji"

if (Email.includes('@')){
    console.log('VALID EMAIL');
} else {
    console.log('INVALIED EMAIL'); 
}

let score = 70
const passedmark = 50

if(score >= passedmark) {
    console.log("PASSED");
} else {
    console.log("FAILED");
}
let Number = 9;

if (Number < 7 ) {
    console.log("POSITIVE");
} else {
    console.log("NEGATIVE");
}

const num1 = 70;
const num2 = 57989869;

if (num1 < num2) {
    console.log("LESS THAN");
} else {
    console.log("GREATER THAN");
}

let num3 = 98

if( num3 % 2 === 0) {
    console.log(`${num3} is EVEN`);
} else {
    console.log(`${num3} is ODD`); 
}

const purchaseAmount = 600;

if (purchaseAmount > 100) {
    console.log("You have a discount");
} else {
    console.log("Buy more");
}

const averageA =( 54 + 56 + 78) / 3;
const averageB = (67 + 60 + 82) / 3;

console.log(`Team A has an average score of ${averageA}`);
console.log(`Team B has an average score of ${averageB}`);

if (averageA > averageB){
    console.log(`Team A wins`);
} else {
    console.log(`Team B wins`);
}

let timeeOfDay = 13

if (timeeOfDay > 10 && timeeOfDay < 16) {
    console.log("You should be in class");
} else {
    console.log("Be at home");
}