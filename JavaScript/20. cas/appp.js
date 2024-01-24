console.log("pokretanje preko node.js");

// javascript template literals

// template literals koristi back tics sintaksu (``) za ispisivanje stringa

// back tics sintaksa

console.log(`elma`);

// navodnici unutar stringa:
// sa template literals mozemo koristiti navodnike, duple ili obicne, unutar samog stringa

// stringovi u vise redova

// template literals nam omogucuje multiline strings

// interpolacija

// template literals nam omogucuje lagan nacin za prikazivanje promenljivih unutar stringa

const ime = "Amir";
const godine = 16;

const poruka = ` nas kolega ${ime} ima ${godine} i on je danas uradio svoj prvi domaci`;

//  replace() metoda za menjanje specificnog karaktera ili niza karaktera odredjenog stringa

// po defaultu, replace metoda menja samo prvi match (prvo poklapanje)

const recenica2 = "danas je padao sneg, mada veceras takodje pada sneg";
const recenica3 = recenica2.replace(/sneg/i, "kisa");
console.log(recenica2);
console.log(recenica3);

//za menjanje reci (case insensitive) mozemo koristiti regular expression sa dodatkom /i

const recenica4 = recenica2.replace(/sneg/i, "kisa");
console.log(recenica4);

// regular expression /g nam omogucava menjanje svuh matcheva (poklapanja) koliko god da ih ima

const recenica5 = recenica2.replace(/sneg/g, "kisa");
console.log(recenica5);
const recenica6 = recenica2.replace(/sneg/gi, "kisa");
console.log(recenica6);
