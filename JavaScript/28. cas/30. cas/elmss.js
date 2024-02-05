// objekti
// creating objects
// cloning objects
// transforming objects into arrays
// accesing values in objects
// adding all types as values

//za skladstenje podataka, maniplaciju njima, njihovo prikazivanje...

var obj = { name: 10 };
const obj1 = new Object();

const obj2 = {
  key1: "this is a value one",
  key2: false,
  key3: 12,
  key4: null,
  key5: function zamena(str) {},
  key6: undefined,
};

// accesing values in objects
console.log(obj2);
console.log(obj2.key1);

console.log(obj2.key2);
console.log(obj2.key3);
console.log(obj2.key4);
console.log(obj2.key5);
console.log(obj2.key6);
// passing by value and passing by reference
obj2.key1 = "this is changed";
console.log(obj2);
function sum(a, b) {
  a = 20;
  b = 30;
  o.name = 20;
  console.log(a, b, o);
}
const x = 2;
const y = 3;
sum(x, y);
console.log(x, y);

// cloning objects

const obj2Clone = { ...obj2 };
