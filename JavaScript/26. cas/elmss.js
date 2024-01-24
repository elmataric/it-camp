// racunanje realnih brojeva nije uvek tacno u javascriptu

const x = 0.1;
const y = 0.2;
console.log(x + y);

// infinity ( -infinity ) je javascriot vrednost koja je veca od najveceg broja u js (koja je manja od najmanjeg broja u js), odnosno beskonacnost.

// heksadecimalni brojevi u js se interpretiraju sa prefiksom 0x

const br = 0xff;
const br2 = 0xab;
console.log(br);
console.log(br2);

// const white = 0xfff
// console.log(white)

//  const white = #ffffff  //crvena, zelena, plava
// const white (255, 255, 255)

// brojeve mozemoo definisati i preko new keyword
let z = new Number(0.3);
console.log(z);

console.log(y + z);
