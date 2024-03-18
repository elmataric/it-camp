// closure and practice

// callback
function fn21(callback) {
  return callback;
}

// clousure, kada imamo funkciju koja vraca drugu funkciju. cl nastaje kod leksickog scope a. pamti spoljasnji scope
function fn1(a) {
  return function fn2(b) {
    return a + b;
  };
}

const a = fn1(20);
const sum = a(20);
const sum1 = a(10);
const sum2 = a(1);

console.log(sum, sum1, sum2);

// currying
const result = fn1(20)(10);

console.log(result);
