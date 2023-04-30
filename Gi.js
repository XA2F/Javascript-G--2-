//Very easy

function min(c, v) {
  if (c > v) {
    return c;
  } else {
    return v;
  }
}

// Very easy Arrow function

let min1 = (c, y) => (c > v ? c : b);

// Easy

let students = [
  { lastName: "Doe", firstName: "John", age: 19 },
  { lastName: "smith", firstName: "Jane", age: 21 },
  { lastName: "Johnson", firstName: "bob", age: 18 },
];
console.log(
  `Hello, my name is ${students[1].firstName} ${students[1].lastName} and I'm ${students[1].age} years old.  `
);

//Medium

let monthIn = parseInt((prompt = "Pick a number btween 1-12:"));

if (monthIn < 1 || monthIn > 12) {
  console.log("Invalid month");
} else {
  let monthsOfTheYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Secptember",
    "October",
    "November",
    "December",
  ];
  console.log(`${monthIn} is ${monthsOfTheYear[monthIn - 1]},`);
}

//Hard

let massTom = 8;
let heightTom = 9;
let massJerry = 45;
let heightJerry = 10;

let BMITom = massTom / heightTom ** 2;
let BMIJerry = massJerry / (heightJerry * heightJerry);
let JerryHigherBMI = BMITom > BMIJerry;
console.log(BMITom, BMIJerry, JerryHigherBMI);
