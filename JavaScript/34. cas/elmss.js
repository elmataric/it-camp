// es6 + array methods
// reduce. forEach

// [].map(); //menjamo vrednosti unutar array a, tj.  podaci u starom array u ostaju isti, a map nam vraca novi array sa izmenjenim elementima

// [].filter() // filtrira elemente

const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [];

arr.forEach((element, index) => {
  arr2.push({ element: element, index: index });
});

console.log(arr2);

// koristeci forEach clg sve elemente niza arr
arr.forEach((element) => {
  console.log(element);
});

// koristeci forEach obrisati sve elemente niza arr

// arr.forEach((element, index, array) => {
//   arr.splice(0);
// });

// console.log(arr);

// reduce

const sum = arr.reduce((result, value, index, array) => {
  console.log(result, value);
  return result + value;
}, 0);
//  ubaciti sve elemente niza arr u objekat sa key om indexa tog elementa

const objFromArr = arr.reduce((result, value, index) => {
  console.log(result, value);

  result[index] = value;
  return result;
}, {});

console.log(objFromArr);

// dobiti imena svih korisnika koji su stariji od 24

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
    name: "elma",
    surname: "taric",
    age: 17,
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

const userArray4 = mockData.reduce((result, value) => {
  if (value.age > 24) {
    result.push(value.name);
  }
  return result;
}, []);
console.log(userArray4);
// naci adresu townsville

const userAddress = mockData.reduce((result, value) => {
  if (value.address.includes("Townsville")) {
    result = value.address;
  }
  return result;
}, " ");
console.log(userAddress);

// naci niz adresa svih korisnika iz townsville
const userAddress1 = mockData.reduce((result, value) => {
  if (value.address.includes("Townsville")) {
    result.push(value.address);
  }
  return result;
}, []);
console.log(userAddress1);
