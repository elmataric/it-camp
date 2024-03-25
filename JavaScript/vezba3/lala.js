// test prep

// Test has 2 parts

// 1st part
// Imacete 20 minuta za ovaj deo. I radicete na google formi.
// Necete imati pravo na korsticenje interneta.
// Imate 10tak teroriskih pitanja iz oblasti navdene u 17-tom casu
// najvise pitanja iz simple js i 2-3 pitanja iz advanced i medium js

// select a primitive js type? i onda abcd, odgovori
// String, Number, BigInt, Boolean, Null, Undefined, and Symbol.

// what are complext types in js? abcd
// represents a number of similar or different data under a single declaration of a variable.

// what are the scopes of const, let, and var
// let and const are block-scoped, var declarations are either globally scoped or function-scoped.

// what are the differces between let and const...

// Use let if you want block-scoped variables that can be reassigned.
// Use const if you want block-scoped variables that are constant and cannot be reassigned.

// what is the result of the code console.log("yes" || "no")?

console.log("yes" || "no");

// what is the result of the code if(true){console.log(true)}

const recenica = 0;

for (let i = 0; i < recenica.length; i++) {
  if (true) {
    console.log(true);
  }
}

// what are the loops use in js?
// Loops are used to execute a set of instructions repeatedly until a particular condition is met.

// what is an object in js?

// how do we dinamically access values inside of the object?
// What are the property accessor for objects?
// kad znamo ime objekta . i dinamicko []

// Which are the array fuctions?

// There are different types of array methods based on their functionality:
// Manipulation Methods: push(), pop(),shift(), slice(), etc.
// Searching and Sorting Methods: sort(), find(),indexof(), etc.
// Conversion Methods: join(), concat(),tostring().
// Iteration Methods: foreach(), map(), filter(), etc.
// Utility Methods: isArray()

// What does this code do? [].map(()=>{})
// advanced only definitions of concepts.

// Part 2
// Practical part.
// Imacete 40 minuta za ovaj deo. Po potrebi i vise.
// Imacete pristup internetu i svemu sto smo radili do sada.
// chat gpt ne dolazi u obzir.
// Imacete 2 pitanja
// Morate napraviti repostori na svom github nalogu gde ce te pushati kod
// link ka repozitoriju ce te ostaviti na google formu za ovaj deo

// Prvo pitanje:
// Bice vise algoritamskog tipa gde imate neku obradu podataka i vi
// trebate nesto sa tim podacima da uradite. 5,6,7 cas

// Drugo pitanje:
// Trebate fetchati nesto sa nekog apija i onda to prikazati na stranici
// Moguca dodatna komplikacija gde ce te morati i na neki event da fetchate podatke

// imate primere od 9 casa pa nadalje. A navise na casu 15.

// U ovom zadatku se koristi filter metoda nad nizom mockData. Ova metoda prolazi kroz svaki element niza i provjerava da li zadovoljava uslov koji je definiran u funkciji koja je proslijeđena filter metodi.

// U ovom slučaju, funkcija koja je proslijeđena filter metodi prima jedan argument, value, koji predstavlja trenutni element niza koji se trenutno obrađuje. Funkcija provjerava da li je age atribut trenutnog elementa veći od 24. Ako jeste, tada će ta vrijednost biti zadržana u rezultujućem nizu.

// Dakle, nakon izvršenja ovog koda, olderThen24 će sadržavati sve elemente niza mockData čiji je age atribut veći od 24.

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

const userName = mockData.map((value) => {
  return value.name;
});
console.log(userName);

const surname = mockData.map((value) => {
  return value.name + " " + value.surname;
});
console.log(surname);

const age = mockData.filter((value) => {
  return value.age > 24;
});
console.log(age);

const age1 = mockData.includes;
