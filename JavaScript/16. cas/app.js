// FUNKCIJA je blok koda se pravi, kako bi jedan te isti kod mogli da izvrsavamo vise puta

// Funkcija je kod koji mozemo iznova koristiti, koji pokrece set instrukcija. Koristimo ga kako bi jedan isti kod mogli da izvrsavamo vise puta.

// Funkcija se korist kako bismo nas kod mogli bolje da organizujemo.
// jos jedan razlog zbog koga se koriste funkcije je da bismo mogl da kreiramo varijable unutar funkcije

// postoje tri nacina za deklarisanje funkcije

// funcion declaration
function printHelloWorld1() {
  console.log("HelloWorld1");
}
printHelloWorld1();

// function expression
const printHelloWorld2 = function () {
  console.log("HelloWorld2");
};
printHelloWorld2();

// arrow function
const printHelloWorld3 = () => {
  console.log("helloworld3");
};
printHelloWorld3();
// arrow funkcija se uglavnom koristi za ispisivanje manje ili jednog seta instrukcija
// ako imamo kod koji se moze ispisati u jednoj liniji koda, za takav najvise koristimo arrow funkcije

// takodje, funkcije mogu prihvatati argumente. broj argumenata moze biti razlicit, u odnosu na to kolio nam istih treba da bismo u kod uneli nasu funkciju

// postoje tri fraze koje su sastavni deo funcije, a to su
// parametar
// argument
// return

// parametre unutar funkcije uvek postavljamo u obicnim zagradama

console.log("cao, miRRRza");
console.log("cao, amire");
console.log("cao, mapice");
console.log("cao, merjem");

function pozdrav(ime) {
  console.log("cao, " + ime);
}
pozdrav("elmss queen");

function brojevi(broj1, broj2) {
  console.log(broj1, broj2);
}
brojevi(2, 3);

function nesto(a, b) {
  console.log(a + b);
}
nesto(2, 3);

// return moze vratiti vrednost koju mi deklarisemo unutar funkcije

const nekiReturn = function (broj3, broj4) {
  let rezultat = broj3 + broj4;
  return rezultat;
};
console.log(nekiReturn(3, 4));
