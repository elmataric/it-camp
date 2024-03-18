// promises
// promise chaining, reject, resolve, then, catch, finally

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.random();
    if (rand > 0.5) {
      console.log("we re in resolve");
      resolve("tekst");
    }
    resolve(resolve);
  }, 2000);
  console.log("we re in reject");
  reject("sdf");
});
// console.log(promise);

promise
  .then((result) => {
    console.log(result);
  })
  .catch((reject) => {
    console.log(reject);
  });

//   fetchApi
