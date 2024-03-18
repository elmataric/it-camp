// arrays, creating arrays, accesin data in arrays, matrix
// arrays and objects, iterating over arrays

// creating arrays
const niz = [];
const niz2 = [1, 2, 3, 4, 5];
const niz3 = [1, false, null, undefined, "", {}];

const noviniz = ["0, 1, 2, 3"];

// accesing
console.log(niz2[1]);
console.log(niz2[niz2.length - 1]);

niz2.push(6, "profesor me nervira"); //dodaaje na kraj niza
niz2.pop(); // sklanja sa kraja niza

niz2.unshift("ovo je pocetak pakla sa novim profesorom ");
niz2.shift("profesor smara");

niz2.splice(2, 3); // prvi br oznacava broj elementa koji uyimamo, drugi koliko elemenata uzimamo
niz2.splice(2, niz2.length - 2);

console.log(niz2);

// iterating arrays
for (let i = 0; i < niz2.length; i++) {
  const element = niz2[i];
  console.log(element);
}
[];
//
const niz4 = [1, false, null, undefined, "", {}];
for (let i = 0; i < niz4.length; i++) {
  const element = niz4[i];
  console.log(element);
}
//
function isStringInArray(niz) {
  for (let i = 0; i < niz.length; i++) {
    if (typeof niz2[i] === "string") {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isStringInArray(niz2));
console.log(isStringInArray(niz3));

//
function isUndefinedInArray(niz) {
  for (let i = 0; i < niz.length; i++) {
    if (typeof niz[i] === "undefined") {
      return true;
    }
  }
  return false;
}
console.log(isUndefinedInArray(niz3));

// matrix
const multiNiz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(multiNiz[1][1]);
console.log(multiNiz[0][0]);
console.log(multiNiz[2][2]);
// console.log(multiNiz[2] [2]);

for (let i = 0; i < multiNiz.length; i++) {
  for (let j = 0; j < multiNiz[i].length; j++) {
    console.log(multiNiz[i][j]);
  }
}
//
function isStringInMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    if (typeof multiNiz[i] === "string") {
      return true;
    }
  }
  return false;
}

console.log(isStringInMatrix(multiNiz));
//
// const users = [{ name: "elma", surname: "taric" }];
// const users = [{ name: "hena", surname: "avdovic" }];
// const users = [{ name: "anela", surname: "ukic" }];
// console.log(users[0].name);
// console.log(users[2].surname);
//
function findInArray(niz, property, valueOfProperty) {
  for (let i = 0; i < niz.length; i++) {
    const element = niz[i];
    if (
      element.hasOwnProperty(property) &&
      element[property] === valueOfProperty
    ) {
      return element;
    }
  }
  return false;
}

console.log(findInArray(users, "surname", "taric"));
