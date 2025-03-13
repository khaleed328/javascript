// functions

// 4 5 7 9 4 6

// function declaration
// function functionName () {write the code}
// log hello world to the console

function logger() {
    console.log("hello World");
}
// call it or invoke
logger();

// write a func welcomeUser logs wwelcome user to the console

//function welcomeUser() {
// console.log("Welcome back Sekinat");
//}
//welcomeUser();

// function parameters - values passed to the function to use , (parameters)
function welcomeUser(name = "Anon") {
    console.log(`welcome ${name}`);
}
welcomeUser("Sekinat")
welcomeUser("Morenikeji")
welcomeUser("Slapuosh")

// write a function that adds two numbers together
function addTwoNumbers(n1 = 0, n2 = 0) {
    const total = n1 + n2;
    console.log(total);
}
addTwoNumbers(34, 10)
addTwoNumbers(9,10)
addTwoNumbers(8)

// write a function that compute the differencebetween two numbers
function subtractTwoNumbers(n1, n2) {
    console.log(n1 - n2);
}
subtractTwoNumbers(90, 5)
subtractTwoNumbers(2, 5)

// default parametrs
welcomeUser();

//write a function Called wordConverter, that converts all alphabets
//to uppercase cat ----> CAT hi___>HI, 'word'

function wordConverter(word = "word") {
    console.log(word.toUpperCase());
}
wordConverter("cat")

// write a func callled replaceAllE
// it replaces all of every 'e' in any word provideed
function replaceAllE(word) {
    console.log(word. toLowerCase().replaceAll("e", "$"));
}
replaceAllE("EYE")

//write a func called checkLength, it retrun the num of char
// in the word provide
function checkLength(word) {
    console.log(word.length);
}
checkLength("keji")

//write a func that returns the first character in the word provided
// cat -c, bob - b
function firstChar(word) {
    console.log(word.charAt(0));
}
firstChar("Bule")

//John Doe ====> JD
function getInitials(firstName, lastName) {
    console.log(firstName.charAt(0) + lastName.charAt(0));
}
getInitials("John", "Doe")

function letters(word) {
    console.log(word.substr(0, 5));
}
letters("morenikeji")

function live(number) {
    number > 0 ? 
        console.log("POSITIVE") : console.log("NEGATIVE");
    }
live(-78)

//FUNCTION TO A FACTORY THAT PRODUCES A PROUCT
// RETURN A VALUE retrun 
function sayHello() {
    return "say helllo"
}

const val = sayHello()
console.log(val);
// write a func that multiples two numbers
function multiplyTwoNums(n1, n2) {
    return n1 * n2    
}

console.log(multiplyTwoNums(6, 10));

// write a function that retruns the average of 3 number
function calcAverage(num1, num2, num3) {
    const average = (num1 + num2 + num3) / 3;
    return average;
}

// write a func that converts weeks to days and returns the num
// 2 weeks - 14 days

function weeksToDays(weeks) {
    const days = weeks * 7;
    return days;
}

//hours to minutes
function hoursToMinutes(hours) {
    return `${hours} hours is equal to ${hours * 60} minutes`
}
console.log(hoursToMinutes(2));


// converts years to months and returns a proper string
// e.g 2 years is equal to 24 months
function yearsToMonths(years) {
    return`${years} years is equal to ${years * 12} months`
}
console.log(yearsToMonths(2));

// write a func that returns 40
function retrun40() {
    return 40;
}
console.log(retrun40(0));

// function expression
const myName = function () {
    return "John";
};
console.log(myName());

const divideTwonums = function (n1,n2) {
    return n1 / n2
};
console.log(divideTwonums(9, 3));


// hoisting
//function declaratiion - hoisted above puts at the top of the doc

removealla("email");
function removealla(word) {
    console.log(word.replace("a", " "));
}

//arrow function

const myArrowfunc = () => {
    console.log("Arrow Functiion");
};

myArrowfunc();

// write an arrow func checkWinner that takes in two scores as a paremeter
// your function should return different outcommes based on the score
// if score a is more than b return 'Score A wins

const checkWinner = (scoreA, scoreB)=>{
    if (scoreA > scoreB) {
        return "Score A wins"
    } else if (scoreA < scoreB) {
        return "Score B wins"
    } else {
        return "It is A DRAW"
    }
};
console.log(checkWinner(56, 78));

// write a function called calculateBMI
// takes in body mass and height aas a parameter
// the function should return the BMI index rounded to 2 decimal place 

// weight divided by the square of height

// use the value 70, 1.75 === 22.86

const calculateBMI = (mass, height)=> {
    const bmi = mass / height ** 2 ;
    return bmi.toFixed(2);
};
console.log(calculateBMI(70, 1.75));

// 2. write a function using the result of the bmi calculated above
// to determine the BMI categoty
// less than 18.5 is underweight
// between 18.5 and 24.9 is normal weight
// between 25 and 29.9 is Overweight
// anythoing else is obese

const getBMICategory = (BMI)=> {
    if (BMI < 18.5) {
        return "Underweight"
    } else if (BMI > 18.5 && BMI <= 24.9) {
        return "Normal Weight"
    }else if (BMI >= 25 && Bmi <= 29.9) {
        return "Overweight"
    }else console.log(obese);
    
}
console.log(getBMICategory(calculateBMI(70, 1.75)));
