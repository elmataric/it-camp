const recenica = "Mama voli Miru i Elma voli Miru";

let brojac = 0;

for (let i = 0; i <= recenica.length - 1; i++) {
  if (recenica[i] === "m") {
    brojac++;
  } else if (recenica[i] === "M") {
    brojac++;
  }
}

console.log(brojac);

// koliko znakova su cifre u stringu

const r3cenica = prompt("unesite recenicu");
let br0jac = 0;

//
console.log(br0jac);
/// p4rohrih4rh

const r3c3nica = prompt("unesite recenicu");
let broojac = 0;

for (let i = 0; i < r3c3nica.length; i++) {
  if (!isNaN(r3c3nica[i])) {
    broojac++;
  }
}

// NAPRAVITI NOVU RECENICU BEZ RAZMAKA

const recenica2 = "Elma zna zdravstvenu negu";

let recenica3 = " ";

for (let i = 0; i < recenica2.length; i++) {
  if (recenica2[i] === " ") continue;
  else recenica3 += recenica2[i];
}
console.log(recenica3);

// ako je a onda t, a ako je posle a slovo n onda d umesto a

const originalnaRecenica = "Danas je lep dan";
const fakeRecenica = " ";

for (let i = 0; i < originalnaRecenica.length; i++) {
  if (originalnaRecenica[i] === "a" && originalnaRecenica[i + 1] === "n") {
    fakeRecenica += "d";
  } else if (originalnaRecenica[i] === "a") {
    fakeRecenica += "t";
  } else {
    fakeRecenica += originalnaRecenica[i];
  }
}

console.log(fakeRecenica);
