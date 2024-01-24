// 1. Primer ako korisnik unosi broj:(isti zadatak, ali posmatrati brojeve)

const isTruth1 = () => {
  const value = +prompt("enter some value");
  if (value) {
    return "entered value is truthy value";
  } else {
    return "entered value is falsy value";
  }
};
console.log(isTruth1());

// 2. Korisnik unosi svoje ime. Proveriti da li je uneto ime truthy vrednost (nije prazan string, undefined ili null).
// Ako je uneto ime truthy, ispisati korisnikovo ime, inače ispisati da korisnik nema definisano ime.

let ime = prompt("unesite vase ime");

if (ime) {
  console.log(ime);
} else {
  console.log("Vase ime nije definisano");
}

// 3. Korisnik unosi broj. Proveriti da li je uneti broj falsy vrednost (0 ili NaN). Ako je uneti broj falsy, ispisati poruku da korisnik nema definisan broj, inače ispisati uneti broj.

let broj = prompt("unesite neki broj");
if (!broj || isNaN(broj)) {
  console.log("nedefinisan broj");
} else {
  console.log(broj);
}

// 4. Definisati promenljivu koja nije inicijalizovana. Proveriti da li je vrednost promenljive falsy (undefined).
// Ako je vrednost falsy, ispisati poruku da korisnik nema definisanu vrednost, inače ispisati vrednost promenljive.

var bezInicijalizacije = "cao";

if (!bezInicijalizacije) {
  console.log("ne postoji definisana vrednost");
} else {
  console.log(bezInicijalizacije);
}
bezInicijalizacije = "zdravo";
