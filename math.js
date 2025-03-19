// MATH object

// sqrt, round, cell, floor, trunc, random
console.log(Math.sqrt(25));
console.log(Math.pow(10, 2));
console.log(10 ** 2);
console.log(Math.round(4.5));
console.log(Math.ceil(2.1));
console.log(Math.floor(3.9));
console.log(Math.trunc(11.99));

// Math.random - randoms between 0 - 1
// 0 - 10 0 8 6 10 9
console.log(Math.random());

console.log(Math.trunc(Math.random() * 11));
// 1 - 10
console.log(Math.floor(Math.random() *10 + 1));

//  raffle draw
const customers = ['kelvin', 'john', 'khaleed', 'daivd']

const randomWinner = ()=>{
    let randomNumber = Math.floor(Math.random() * customers.length);
    return customers[randomNumber];
};

console.log(randomWinner());

// OTP genertor