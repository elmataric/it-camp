//function initialization, callbacks, hoisting, arrow functions
// closure

// function testFN(params) {} // hoistovanje, svaka funckija definisana ovako se hoista u potpunosti

// const testFN2 = () => true;

// console.log(a);

// const a = 10;
// var b = 20;
// // callback, funkcija koja se poziva unutar neke druge funkcije

// const sum = (a, b) => a + b;
// const div = (a, b) => a - b;
// const prod = (a, b) => a * b;
// const dif = (a, b) => a % b;

// const executeFnOnArray = (arr, fn) => {
//   let result = initValue;
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     result = fn(result, element);
//   }
// };
// //
// const printThanks = (text) => {
//   console.log(text);
//   console.log("thank u for using my services. elma ");
// };

// //
// const makeUpperCase = (text, fn) => {
//   const result = text.toUpperCase();
//   fn(result);
// };
// makeUpperCase("ovo je bas lep dan", printThanks);

const toUpperCase = (text) => text.toUpperCase();
const addYToEveryWorld = (text, command) => {
  const result = command(text);
  console.log(result);
};
executeStringCommand("ovo je moj text", toUpperCase);
//
// const toLowerCase = (text) => text.toLowerCase();
// const addYToEveryWorld = (text) => text.replaceAll(" " - 1, y);
// const executeStringCommand1 = (text, command) => {
//   const result = command(text);
//   console.log(result);
// };
// executeStringCommand("CAS TRAJE PREDUGO, IZ NEKOG RAZLOGA", toLowerCase);
// //
// const trimEnd = (text) => text.trimEnd();
// const executeStringCommand3 = (text, command) => {
//   const result = command(text);
//   console.log(result);
// };
// executeStringCommand3("..ovo je moj text", trimEnd);
// addYToEveryWorld("ovaj cas je dosadan", replaceAll);
// //
