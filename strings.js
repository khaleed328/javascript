//STRINGS - character inside of quotation marks '' ""
const firstName = "John";
const lastName = "Doe";
// STRING PROPERTIES - length, concatenation (joining +)
console.log(firstName.length);
console.log(lastName.length);
const myPassword = "fuck";
console.log(myPassword);
console.log(myPassword.length);

const fullName = firstName + " " + lastName;
console.log(fullName);

console.log(fullName.length);

// string methods - built in functions that can be done on strings
const email = "jjdoe@google.co.uk";
console.log(email);
//toUpperCase, toLowerCase
console.log(email.toUpperCase());
console.log(email.toLowerCase);

//index0f, lastIndex0f, charAt
console.log(email.charAt(1));
console.log(email.indexOf("o"));
console.log(email.lastIndexOf("o"));

//starsWith true or false, endsWith, includes
console.log(email.startsWith("jj"));
console.log(email.endsWith(".uk"));
console.log(email.includes("Doe".toLowerCase()));
console.log(email.toUpperCase().includes(".CO"));

// trim, trimStart and trimEnd
const username = "         ade001    ";
console.log(username.trim());
console.log(username.trimEnd());
console.log(username.trimStart());

//replace replaceAll

// 01********90
const myName = "jane doe";
console.log(myName.replace("jane", "peter"));
console.log(myName.replaceAll("e", "*"));

// extract portions of a string slice substring (start, end) substr,
console.log(myName.slice(5, 7));
console.log(myName.substring(0, 3));

//substr(start, num of characters)
console.log(myName.substr(0, 2));

// ytyetyeteyteyteyteyteyteytey getgetetegtgetget yuioirui ...... read more

const accountNumber = "1234567890";
console.log(accountNumber.replace(accountNumber.substr(2, 6), "******"));
//12******90
// refactor the algorith to use slice instead of substr
console.log(accountNumber.replace(accountNumber.slice(2, 8), "******"));
const userName2 = "johnpaul";
console.log("welcome" + " " + userName2.toUpperCase());
console.log(`welcome ${userName2.toUpperCase()}`);

//concatenation
const author = "Jax Draxx";
const book = "The Ghost";
// Jax Draxx wrote the book the ghost
const sentence = author + "wrote the book" + book;
console.log(sentence);

//template literals used to format variables of a string
// ``
const sentence2 = `${author} wrote the book ${book.toLowerCase()}`;
console.log(sentence2);

const person = "Adam Sandler";
const movie = "Romance Scam";

//ADAM SANDLER featured in the movie Romance Scam

const result = `${person.toUpperCase()} featured in the movie ${movie}`;
console.log(result);

const fName = `${firstName} ${lastNmae}`;
//ade said and i quote`i am good`

const example = `ade said and i quote 'i am good' `;
console.log(example);

//declare a country var set it to any value of your choice
const country = "Califonia";
// log the number of chars in your country to the console
//
console.log(country.length);
// convert the country to capital letters, log to the console
console.log(country.toUpperCase);

// extract five characters from your country
console.log(country.slice(0, 5));
console.log(country.substr(0, 5));
console.log(startsWith("e"));
console.log(country.includes("h"));
console.log(`I live in ${country.toUpperCase}`);


