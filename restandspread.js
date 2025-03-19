const arr = [3, 4, 6, 8];
// structured
const [...others] = arr;
console.log(others);

const countries = ["canada", "califonia", "togo", "cameroon", "guinea"];
const [x, ...rest] = countries;

const product = {
    title: "Micheal Kors",
    price: 300,
    image: "image",
}

const { price, ...property } = product;

// spread operator ...
// 
const detailedProduct = {
  stock: 6,
  color: "red",
  category: "bag",
  weight: 13,
  ...product,
};

console.log(detailedProduct);

const onlineStudent = ["john", "paul", "jane"]
const physicalStudent = ["peter", "vera", "lekun"]

const allStudent = [...onlineStudent, ...physicalStudent, 'Ruud', 'seyi']
console.log(allStudent);
