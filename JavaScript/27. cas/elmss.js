// 1. .toString
// ova metoda se koristi da neki broj pretvori u string i vrati isti(broj)
const a = 10;
console.log(typeof a, a);

const b = a.toString();
console.log(typeof b, b);

//  Number()
console.log(`10` + 2);
const c = `10`;
console.log(typeof c, c);

const d = Number(c);
console.log(typeof c, c);

// .parseInt()
const e = `10`;
console.log(typeof e, e);

// const f = e.parseInt() ne moze, uvek ocekuje argument unutar metode,
// u slucaju da se argument ne prosledi - metoda nece raditi
console.log(parseInt(e));

// parseInt u slucaju da postoji broj sa decimalnim zapisom - taj broj zaokruzuje na donju granicu

// .parseFloat
// .parseFloat metoda sem toga sto decimalan broj, koji je u obliku stringa transformise u
// oblik broja, takodje, on cuva decimale unutar tog broja, ne zaokruzuje ga
const PI1 = `3.14`;
console.log(parseFloat(PI1));

// .toFixed()
const PI2 = 3.873649695809104;
const rez = PI2.toFixed(2);
console.log(rez);
//radi skoro isto kao fixed, samo sto se fixed odnosi samo na decimale, odnosno cifre posle decimalnog zareza, a toPrecision uzima u obzir sve cifre broja
console.log(PI2.toPrecision(3));

// dodatne meotde:
//Number.MAX_VALUE
//Number.MIN_VALUE

console.log(`hello` * 2);

// igweivg3uf
const recenica2 = prompt("Unesite recenicu: ");

// for (let i = 0; i < recenica2.length; i++) {
//   if (recenica2[i] === "a") {
//     console.log(5);
//   } else if (recenica2[i] === "s") {
//     continue;
//   } else {
//     console.log(recenica2[i]);
//   }
// }
