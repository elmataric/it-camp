//  array methods and es6
//  sort
//  some, find, findIndex, join, concat, every

// sort

const arr = [1, 8, 9, 56, 43, 31, 2, 5, 7];

const arr2 = [2, 3, 7, 6, 22, 8, 9];

// arr2.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   }
//   return 0;
// });

// const arr2 = arr.sort();

arr2.sort((a, b) => a - b);

console.log(arr2);

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

mockData.sort((a, b) => a.age - b.age);

console.log(mockData);

//

mockData.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (b.name > a.name) {
    return -1;
  }
  return 0;
});

console.log(mockData);
//

// sort

const arr3 = [1, 6, 3, 4, 5, 7, "a", "b", "1a"];
arr3.sort();
console.log(arr3);
//
const arr4 = arr3
  .filter((value) => {
    if (typeof value === "number") {
      return true;
    }
    false;
  })
  .sort((a, b) => a - b);

console.log(arr4);

const arr5 = arr3
  .filter((value) => {
    if (typeof value === "string") {
      return true;
    }
    false;
  })
  .sort((a, b) => a - b);

console.log(arr5);

const petstopedesetpetiArray = arr4.concat(arr5);
console.log(petstopedesetpetiArray);

//
const str = "ovo je neki nebitan string";

const arr6 = str.split(" ");
const str2 = arr6.join();

console.log(str2);

// funkcija koja uzima nek recenic i prAVi od nje kebeb case

function makeKebabCase(string) {
  const arr6 = string.split(" ");
  return arr6.join("-");
}

console.log(makeKebabCase("hocu da ovo bude kebab case"));

//
const arr77 = [1, 2, 3, 4, 5, 6];

const found = arr77.find((value) => {
  if (value === 7) return true;
});

console.log(found);

// nadji objekat u kome je ie jednako enver

const found1 = mockData.find((item) => {
  if (item.name === "Enver") return true;
});

console.log(found1);
const found3 = mockData.findIndex((item) => {
  if (item.surname === "Smith") return true;
});

console.log(found3);

// every, some

const arr45 = [1, 3, 5, 7, 9];

const check = arr45.every((value) => {
  if (value % 2 === 0) {
    return false;
  }
  return true;
});

console.log(check);

const check2 = arr45.some((value) => {
  if (value % 2 === 0) {
    return true;
  }
  return false;
});
console.log(check2);

//

const arr8 = ["1", 2, 3, 5, "6"];

const check3 = arr8.some((value) => {
  if (typeof value === "string") {
    return true;
  }
  return false;
});
console.log(check3);

const check4 = arr8.every((value) => {
  if (typeof value === "number") {
    return true;
  }
  return false;
});
console.log(check4);

const check56565 = mockData.some((value) => {
  if (value.age > 40) {
    return true;
  }
  return false;
});
console.log(check56565);

// const userNames3 = mockData.filter((value) => {
//   if (value.age > 24) {
//     return true;
//   } else false;
// });
// console.log(userNames3);
