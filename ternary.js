// ternary operators

const myNumber = -50

myNumber > 0 ? console.log('POSITIVE'): console.log("NEGATIVE");

let number = 796
number % 2 === 0 ? 
console.log("Even Numuber") : console.log("Odd Number");

const hasACar = false;
 const sentence = `Mr Mario ${hasACar ? "has" : "does not have"} a car`;
 console.log(sentence);

 let isUsersLoggedIn = false;
isUsersLoggedIn ? console.log("welcome user") : console.log("logged out");

 const balance = 30000;
 const loanAmount = 75000;

 let eligible = loanAmount <= balance *2
 ? console.log("user is eligible"): console.log("not eligible");
 
 let savings = 500000;
 let transactionAmount = 4500;

 savings >= transactionAmount 
 ? console.log("Successful") : console.log("NOT");
 
 transactionAmount > 0 ? console.log(`credit alret of ${transactionAmount}`) : console.log(`Debit alert`);

 savings += transactionAmount;

 console.log(savings);
 
 
