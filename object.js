//OBJECT - {key: value, key2: value2}
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 45,
  isMsrried: true,
  friends: ["Jane", "Peter", "Mark"],
  job: "Teacher",
  location: {
    street: "Vineyard",
    area: "Lekki",
    city: "Lagos",
    zip: 100111,
    geoLocation: {
      lat: 23.46,
      lng: 45.78,
    },
  },
};

// getting propertiees from an object
// dot notation objectName.propertyName and bracket notation objectName[`propertyName`]
console.log(person.age);
console.log(person.firstName);
console.log(person.lastName.toUpperCase());
console.log(person["age"]);
console.log(person["friends"]);

// I live at Vineyard estate, Lekki Lagos
console.log(
  `I live at ${person.location.street} estate, ${person["location"]["area"]}`
);

// adding a new property to an object
// work
person.workPlace = "Appolo School";
console.log(person);

// add a new property to the location object in the person object called landmark set to
// city mall
person.location.landmark = "city mall";

// removing property delete
delete person.job;
console.log(person);

const user = {
  username: "ade001",
  email: "ade@google.com",
  profilePic: "image",
  age: 25,
  isloggedIn: false,
  isVerified: true,
  posts: ["Nigeria just get as e be", "I love Food"],
  welcomeUser: function () {
    return this.isloggedIn ? `Welcome ${this.username}` : "log in to Continue";
  },
  verifyUser: function () {
    return this.isVerified
      ? `Verification Successful`
      : "Please verify your account";
  },
};

// objective methods - developer writes the function
// function declaration (this - refers to the object itself)
// that user welcome username or log in to continue

// write an obejct method VerifyUser
// if user is verified return Verification successful else
// Verify your account to continue
console.log(user.welcomeUser());
console.log(user.verifyUser());

const book = {
  tittle: "in class",
  author: "lawas",
  yearPublished: 2009,
  rating: 3,
  price: 5000,
  similarAuthors: ["Travis", "James", "Larry"],
  genre: "comedy",
  description: function () {
    return `the book ${this.tittle} cost $${this.price} and it is a ${this.genre} novel`;
  },
  recommendBook: function () {
    return this.rating > 3.5 ? `This book is recommened` : "Not recommended";
  },
};

console.log(book.description());
console.log(book.recommendBook());

// object.keys, Object.values, Object.entries

const transaction = {
  amount: 4000,
  date: "16/03/2025",
  charges: 25,
  refNum: "tranx-1257662673",
};
console.log(Object.keys(transaction));
console.log(Object.values(transaction));
console.log(Object.entries(transaction));

// object destructuring

// rest and spread operator

// 
const match = {
    teamA : 'timberwolf',
    teamB : 'Gilzzes',
    teamAScore: 3,
    teamBScore: 2,
    duration: 96,
    corners: 12,
    numOfSubsUsed: 7,
    fouls: 14,
    stadium: "Wembley",
    weather: "Snowy",
    determine:function () {
        if (this.teamAScore > this.teamBScore){
            return `${this.teamA} win with a score of ${this.teamAScore} . ${this.teamBScore}`
        } else if (this.teamAScore < this.teamBScore){
            return `${this.teamB} win with a score of ${this.teamAScore} . ${this.teamBScore}`
        } else return "it is a draw"
    },
    overView: function() {
        return `The match between ${this.teamA} and ${this.teamB} was played at the ${this.stadium} in as a ${this.weather}`
    },
};
// const {teamA,fouls, stadium, corners} = match;
// console.log(fouls, stadium, corners);

const property = {
    Name:"Exquisite Villa",
    rent: "2.3M/year",
    bedrooms: 7,
    bathroom: 10,
    cautionFee: 5000,
    legalfree: 4000,
    facilities: ["pool","theatre", "gym"],
    location: {
        street: "Charly Boy",
        area: "Gbagada",
        city: "lagos",
        num: 45,
        geo:{
            lat: 100.27,
            lng:45.78,
        }
    }
}

const product = {
    price: 9.99,
    discount: 7.17,
};
const {price, discoun} = product;

let newPrice = price - (discount / 100) * price;

console.log(newPrice.toFixed(2));
