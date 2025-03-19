const customers = ["Ade", "Ngozi"];

customers.map((customer) => {
  console.log(customer.charAt(0));
});

// [object1, object2]
// name, age, gender, location, purchase
const myCustomers = [
  {
    name: "Kung Loe",
    age: 25,
    gender: "M",
    location: "Ibadan",
    purchase: 6000,
  },
  {
    name: "Johnny Cage",
    age: 30,
    gender: "M",
    location: "Lagos",
    purchase: 8000,
  },
  {
    name: "Liu Kang",
    age: 22,
    gender: "M",
    location: "Ibadan",
    purchase: 4300,
  },
  {
    name: "Sonya Blade",
    age: 20,
    gender: "F",
    location: "Ikeja",
    purchase: 7400,
  },
  { name: "Kitana", age: 32, gender: "F", location: "Ondo", purchase: 6200 },
];

//
myCustomers[1].name;
const { name } = myCustomers[1];
myCustomers[1]["name"];

myCustomers.map((customer) => {
  console.log(customer.name);
});

// get customers that are 25 and above
const olderCustomers = myCustomers.filter((customer) => customer.age >= 25);
console.log(olderCustomers);

// younger than 25
const youngerCustomers = myCustomers.filter((customer) => customer.age < 25);
console.log(youngerCustomers);

const genderCustomers = myCustomers.filter(
  (customer) => customer.gender.toLocaleLowerCase() === "M".toLocaleLowerCase()
);
console.log(genderCustomers);

const genderCustomer = myCustomers.filter(
  (customer) => customer.gender === "F"
);
console.log(genderCustomer);

// get the number of customers staying in lagos
const lagosCustomer = myCustomers.filter((c) => c.location === "Lagos");
console.log(lagosCustomer.length);

// arrange the customer according to age (young to old)
const ageOfCustomers = myCustomers.sort((a, b) => {
  return a.age - b.age;
});
console.log(ageOfCustomers);

//  get the average age of the customers
const totalAgeAge = myCustomers.reduce(
  (acc, customer) => acc + customer.age,
  0
);
const avgAge = totalAgeAge / myCustomers.length;
console.log(avgAge);

// get me a customer staying in Ibadan
console.log(myCustomers.find((c) => c.location === "Ibadan"));

// get a new array containing all the purchase of all customers
const alpurchase = myCustomers.map((customers) => {
  return customers.purchase;
});
console.log(alpurchase);

// get all customers with a mimimum of 6000 purchase amount
const alminimum = myCustomers.filter((customers) => {
  return customers.purchase >= 6000;
});
console.log(alminimum);

// get thhe total purchase amount of all customer
const totalAmount = myCustomers.reduce(
  (acc, customers) => acc + customers.purchase,
  0
);
console.log(totalAmount);

// get the average purchase for the last three customers
const lastThree = myCustomers.slice(2).reduce((acc, c) => acc + c.purchase, 0);
const avg = lastThree / 3;
console.log(avg);

// get the total purchase amount for all customers in ibadan
const ibadanTotal = myCustomers
  .filter((c) => c.location === "Ibadan")
  .reduce((acc, c) => acc + c.purchase, 0);

console.log(ibadanTotal);

const shoppingCart = [
  { tittle: "Jean", price: 100, qty: 2 },
  { tittle: "Hat", price: 50, qty: 4 },
  { tittle: "Cream", price: 300, qty: 1 },
  { tittle: "Duffel Bag", price: 150, qty: 5 },
  { tittle: "Balaclava", price: 70, qty: 3 },
];

// Jean costs $100
shoppingCart.map((item) => {
    console.log(`${item.tittle} costs $${item.price}`);
    
});

// get iteams that cost monre than 70 dollar
const lowCostIteam = shoppingCart.filter((iteam) => iteam.price > 70)
console.log(
    lowCostIteam
);

// get the total amount spent on each iteam 
// Jeans will cost $200

shoppingCart.map((iteam) => {
    console.log(`${iteam.tittle} costs $${iteam.price * iteam.qty}`);
    
});
// get the totalcost of all iteams in the cart
const totalCost = shoppingCart.reduce((acc, iteam) => acc + iteam.price * iteam.qty, 0);
console.log(totalCost);
