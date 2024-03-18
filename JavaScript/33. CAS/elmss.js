// array functions, es6
// map, filter

// es6 or ECMAscript
// let, const, arrow funct, array methods....

const arr = [1, 2, 3, 4, 5, 6];
const arr2 = arr.map((value, index, array) => {
  console.log(value, index, array);
  return `this is number ${value}, with index ${index}`;
});

console.log(arr2);

const arr3 = [1, 2, 3, 4, 5, 6];
const arr4 = arr.map((value, index, array) => {
  return value * 2;
});

console.log(arr4);
const arr5 = arr.map((value, index, array) => {
  if (value % 2 === 0) {
    return undefined;
  } else {
    return value;
  }
});

console.log(arr5);

const arr6 = arr.map((value, index, array) => {
  if (value % 2 !== 0) {
    return value * value;
  } else {
    return value;
  }
});
console.log(arr6);

const arr7 = "this is an array created fro a string".split("");

const arr8 = arr7.map((value) => value.toUpperCase());

console.log(arr8);

const arr9 = arr7.filter((value) => {
  return !value.includes("a");
});

console.log(arr9);
//
const mockData = [
  {
    name: "John",
    surname: "Doe",
    age: 25,
    address: "123 Main St, Cityville",
  },
  {
    name: "Alice",
    surname: "Smith",
    age: 30,
    address: "456 Oak St, Townsville",
  },
  {
    name: "Bob",
    surname: "Johnson",
    age: 22,
    address: "789 Pine St, Villagetown",
  },
  {
    name: "Eva",
    surname: "Brown",
    age: 28,
    address: "101 Elm St, Hamletsville",
  },
];

const userNames = mockData.map((value) => {
  return value.name;
});
console.log(userNames);

const userNames2 = mockData.map((value) => {
  return value.name + " " + value.surname;
});
console.log(userNames2);

const userNames3 = mockData.filter((value) => {
  if (value.age > 24) {
    return true;
  } else false;
});
console.log(userNames3);

const userNames4 = mockData.filter((value) => {
  switch (value.name[0].toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
      break;
    default:
      return false;
  }
});
console.log(userNames4);
// napraviti search functionality gde na osnovu varijable search filtriramo array po imenu

const search = "e";

const found = mockData.filter((value) => {});
