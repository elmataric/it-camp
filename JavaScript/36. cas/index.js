// event loop
// execution stack, event queue, web apis
// sinhrone su one koje zavise jedna od druge
// asinhrono, izvrsavaju se u isto vreme
// js zivi u browseru, mozila, googlr chrome...

//

// console.log('first')

// setTimeout(()=>{
//     console.log("text in set timeout")
// }, 0)

// Promise.resolve().then(()=>{
//     console.log("text in promise")
// })

// first
// text in promise
// text in set timeout

const myPromise = new Promise((resolve, reject) => {
  resolve("this text");
});

console.log("my name is");

setTimeout(() => {
  console.log("timeout");
}, 0);

myPromise.then((result) => {
  console.log(result);
});

console.log("this works");
