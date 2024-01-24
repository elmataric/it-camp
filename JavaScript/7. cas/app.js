// Za interakciju sa korisnikom koristimo prompt metodu.

const fullName = prompt("unesite Vase ime i prezime");
// kod promenljivih sa const se istovremeno vrsi deklaracija i inicijalizacija
console.log(fullName);

const ageNumber = prompt("unesite broj godina");
console.log(ageNumber);
console.log(typeof ageNumber);

// vrednost dobijena preko prompt metode je uvek string.
// taj string se moze prevesti u tip number na nekoliko nacina:

// 1. Number(ageNumber)
const brojGodina = Number(ageNumber);
console.log(ageNumber);
console.log(typeof brojGodina);

// 2. +

const broj2Godina = +ageNumber;
console.log(brojGodina);
console.log(typeof brojGodina);

//

const visina = Number(prompt("unesite vasu visinu"));
console.log(visina);
console.log(typeof visina);
// moze i +

// isNaN je metoda koja proverava da li je neka vrednost nekorektn broj, odnosno da li je NotaNumber

console.log(isNaN("55")); //false
console.log(isNaN("5ewe5")); //true

// Na osnovu promenljive brojGodina ispisati u konzoli sledece:
// ako je broj godina manji od 12: "Vi ste decijeg doba"
// ako je broj godina izmedju 12(ukljucuje) i 18(ne ukljucuje): Vi ste maloletni
// ako je broj godina izmedju 18(ukljucuje) i 40(ne ukljucuje): Vi ste punoletni
// ako je broj godina veci ili jednak 40: Vi ste zrela osoba.
// ako je korisnik uneo negativan broj: BROJ GODINA NE MOZE BITI NEGATIVAN
// ako korisnik nije uneo broj: niste uneli broj godina

const broj1Godina = +prompt("unesite broj godina");
if (broj1Godina < 0) {
  console.log("broj godina ne moze biti negativan");
} else if (isNaN(broj1Godina)) {
  console.log("niste uneli broj godina");
}

// napisi program koji ce odkorisnika traziti da unese broj, a zatim ispisi poruku koja ce reci da li je broj pozitivan, negativan ili nula

const broj = +prompt("unesite broj");
if (broj < 0) {
  console.log("broj je negativan");
} else if (broj > 0) {
  console.log("broj je pozitivan");
} else if ((brpj = 0)) {
  console.log("broj je 0");
} else if (isNaN(broj)) {
  console.log("niste uneli broj");
}

// Ocena studenta:
// Napiši program koji će korisnika pitati za unos ocene (broj između 0 i 100) i ispisati odgovarajuću ocenu (A, B, C, D ili F) prema standardnom školskom sistemu ocenjivanja.

const ocena = +prompt("unesite ocenu");
if (isNaN(ocena)) {
  console.log("niste upisali ocenu");
} else if (ocena >= 90) {
  console.log("Vasa ocena je A");
} else if (ocena >= 80) {
  console.log("Vasa ocena je B");
} else if (ocena >= 70) {
  console.log("Vasa ocena je C");
} else if (ocena >= 60) {
  console.log("Vasa ocena je D");
} else {
  console.log("Vasa ocena je F");
}

// Provera parnosti broja:
// Napiši program koji će korisnika pitati za unos broja, a zatim ispisati poruku da li je broj paran ili neparan.

const nekiBroj = +prompt("unesite random broj");
if (nekiBroj % 2 === 0) {
  console.log("ovaj broj je paran");
} else {
  console.log("ovaj broj je neparan");
}

// Upoređivanje dva broja:
// Napiši program koji će tražiti od korisnika da unese dva broja, a zatim ispisati poruku koja će reći koji od ta dva broja je veći, ili da su jednaki.

const randomBroj = +prompt("poredjenje dva broja");

if (isNaN(uporedi)) {
  console.log("niste uneli broj");
} else if (10 > 5) {
  console.log("prvi broj je veci od drugog");
} else if (5 < 10) {
  console.log("drugi broj je veci od prvog");
} else {
  console.log("oba broja su jednaka");
}
