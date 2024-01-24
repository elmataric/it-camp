// TIPOVI PODATAKA //

// Da bismo znali tip promenljive u JavaScriptu koristimo typeof operator.

// Tipovi podataka u JavaScriptu se dele u dve grupe:
// 1.  Primitivni tipovi podataka (vrednosni)
// 2.  Neprimitivni tipovi podataka (referentni)

// 1.1. string - Niz karaktera koji je zapisan pod navodnicima. Obicnim ili duplim.
console.log("Ovo je nas prvi string.");
console.log(typeof "Ovo je nas prvi string.");

// 1.2. number - Predstavlja broj i on moze biti zapisan sa ili bez decimalnog zareza.

console.log(25);
console.log(typeof 25);

// 1.3. BigInt - Brojevi koji prelaze granice obicnih brojeva.

console.log(BigInt(28374562987345629837465298736458723465872346));
console.log(typeof BigInt(28374562987345629837465298736458723465872346));

// 1.4. Boolean - Logicki entitet koji ima dve vrednosti: true i false.

console.log(true);
console.log(typeof true);

// 1.5. undefined - Promenljiva koja je definisana, ali joj nije dodeljena vrednost ima vrednost undefined i tip takodje undefined.

var a;
console.log(a);
console.log(typeof a);

// 1.6. null - Predstavlja nekorektnu vrednost ili vrednost koja (za sada) ne postoji.

var a = null;
console.log(a);
console.log(typeof a);

// 1.7. Symbol - Tip podatka za skladistenje anonimnih i unikatnih vrednosti.

b = Symbol("Demir");
console.log(b);
console.log(typeof b);

// Primitivni tipovi podataka mogu skladistiti samo jednu vrednost.

// 2.  Neprimitivni tipovi podataka (referentni)

// Za skladistenje vise vrednosti ili kompleksnih vrednosti se koriste neprimitivni tipovi podataka.
// Svaka promenljiva koja nije primitivnog tipa je tipa Object u JavaScriptu.
// Objekti se koriste za skladistenje neke kolekcije podataka.

// 2.1. Array (niz) - predstavlja strukturu podataka za skladistenje vise vrednosti.
// Elementi niza ne moraju biti istog tipa.

nasBrat = ["Demir", 18, true];
console.log(nasBrat);
console.log(typeof nasBrat);

// 2.2. Object (objekat) - predstavlja strukturu podataka za skladistenje vise vrednosti. Objekti se zapisuju u key:value (name:value) parovima.

obj = {
  ime: "Demir",
  brojGodina: 18,
  punoletan: true,
};
console.log(obj);
console.log(typeof obj);

// 2.3. Set - predstavlja strukturu podataka za skladistenje vise vrednosti. Duplikati nisu dozvoljeni.

set = new Set(["Kanita", 19, true, "Kanita"]); // druga Kanita se ne vidi
console.log(set);
console.log(typeof set);

// 2.4. Map - predstavlja strukturu podataka za skladistenje vise vrednosti. Slicni su objektima.

map = new Map([
  ["ime", "Kanita"],
  ["brojGodina", 19],
  ["punoletnost", true],
]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Postoji nekoliko nacina za prikazivanje podataka u JavaScriptu:

// 1. innerHTML
paragraf = document.getElementById("paragraf");
paragraf.innerHTML = "Ovo je paragraf.";

// 2. document.write() - koristi se samo za testiranje.

// 3. alert()
// alert("Upozorenje korisniku.");

// 4. console.log()
console.log(paragraf.innerHTML);

// JavaScript name mora pocinjati sa:

//  1. Slovom (velikim ili malim) (A-Z ili a-z)
//  2. $ (dolar znakom)
//  3. _ (donjom crtom)

// Promenljive od vise reci:

// nas brat = "Demir" Nije ispravan nacin
// nas_brat = "Demir" Snake Case
// NasBrat = "Demir"  Upper Camel Case
nasBratDobri = "Demir"; // Lower Camel Case

// Napomena. U nazivu promenljive (varijable) se moze naci broj, ali ona ne sme poceti brojem.

amir = "Amir je odlican ucenik druge godine srednje skole.";
Amir = "Amir je dovoljan ucenik druge godine srednje skole.";

// JavaScript je case sensitive!!! (Razlikuje velika i mala slova)

console.log(Amir);

// Postoje 4 nacina da deklarisemo promenljivu u JavaScriptu:

// 1. koriscenjem var keyword (rezervisane reci) - prvenstveno koriscen na ranijim browserima;

// var prijatno = "Prijatno!"; primer istovremenog deklarisanja i inicijalizovanja promenljive pomocu var.
var prijatno; // deklarisanje promenljive

console.log(prijatno); // undefined
console.log(typeof prijatno); // undefined

prijatno = "Prijatno!"; // inicijalizacija deklarisane promenljive prijatno

// 2. koriscenjem let keyword (rezervisane reci) - koristimo kada je vrednost promenljive(varijable) sklono menjanju.

// let brojGodina = 25 primer istovremenog deklarisanja i inicijalizovanja promenljive pomocu let.

let brojGodina; // deklarisanje promenljive
brojGodina = 27; // inicijalizacija deklarisane promenljive brojGodina

// 3. koriscenjem const keyword (rezervisane reci) - koristimo za vrednosti koje se ne menjaju.

// const ime = "Dzenan"; primer istovremenog deklarisanja i inicijalizovanja promenljive pomocu const.

// Koriscenjem const keyword nije dozvoljeno posebno inicijalizovanje, vec mora uz deklaraciju zajedno.
// const ime;
// ime = "Dzenan"

// 4. koriscenjem niceg.

mervan = "Mervan";

// Napomena.
// Promenljive (varijable) su kontejneri za skladistenje vrednosti.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Promenljive definisane preko var keyword mozemo ponovo deklarisati (izvrsiti redeklaraciju), kao i reinicijalizaciju (novo dodeljivanje vrednosti).

var x = 10;
console.log(x);

x = 14;
console.log(x);

var x = 15;
console.log(x);

// let i const keywords obezbedjuju Block Scope.

// Promenljive definisane preko let keyword mozemo ponovo deklarisati (izvrsiti redeklaraciju) ako se radi o drugom prostoru, dok reinicijalizaciju (novo dodeljivanje vrednosti) mozemo izvrsiti i u istom prostoru.

let y = 3;
console.log(y);

y = 6;
console.log(y);
// let y = 50; nije dozvoljeno redeklarisanje u istom prostoru

{
  //   console.log(y); y se prepoznaje iz global scope
  let y = 20;
  console.log(y);
}
console.log(y);

// Promenljive definisane preko const keyword mozemo ponovo deklarisati (izvrsiti redeklaraciju) ako se radi o drugom prostoru.
// Reinicijalizacija nije dozvoljena za promenljive definisane preko const.

const z = 30;

// const z = 45; nije dozvoljeno redeklarisanje u istom prostoru
// z = 60; nije dozvoljena reinicijalizacija u istom prostoru

{
  //   console.log(z); z se prepoznaje iz global scope
  const z = 20;
  console.log(z);
}
console.log(z);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// KONDICIONALI //

// (5 > 4) je uslov koji kada je zadovoljen izvrsice se deo koda izmedju viticastih zagrada.
if (5 > 4) {
  console.log("vece je");
}

trenutnoVreme = 20;

if (trenutnoVreme >= 6 && trenutnoVreme < 12) {
  console.log("Dobro jutro");
} else if (trenutnoVreme >= 12 && trenutnoVreme < 17) {
  console.log("Dobar dan");
} else {
  console.log("Dobro vece");
}

//  Ako je broj godina  >= 18, neka se ispise poruka "punoletni ste",
// inace neka se ispise poruka "maloletni ste".
const brojGodina = 27;

if (brojGodina >= 18) {
  console.log("Punoletni ste");
} else {
  console.log("Maloletni ste");
}

// 2. Zadatak
// Na osnovu dve promenljive x i y napisati program koji izracunava i stampa
// kolicnik x/y ako je broj y razlicit od nule, a inace ispisuje poruku: Deljenje je nemoguce.
const x = 12;
const y = 6;

if (y === 0) {
  console.log("Deljenje je nemoguce.");
} else {
  console.log(x / y);
}

// Domaci:
// Na osnovu promenljive brojGodina ispisati u konzoli sledece:
// ako je broj godina manji od 12: "Vi ste decijeg doba"
// ako je broj godina izmedju 12(ukljucuje) i 18(ne ukljucuje): Vi ste maloletni
// ako je broj godina izmedju 18(ukljucuje) i 40(ne ukljucuje): Vi ste punoletni
// ako je broj godina veci ili jednak 40: Vi ste zrela osoba.

// const brojGodina = 27;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Za interakciju sa korisnikom koristimo prompt metodu.

const fullName = prompt("Unesite vase ime i prezime");
console.log(fullName);

const age = prompt("Unesite broj godina");
console.log(age);
console.log(typeof age);

// Vrednost dobijena preko prompt metode je uvek tipa string.
// Taj string se moze prevesti u tip number na nekoliko nacina:

// 1. Number(age)
const brojGodina = Number(age);
console.log(brojGodina);
console.log(typeof brojGodina);

// 2. +age
const brojGodina2 = +age;
console.log(brojGodina2);
console.log(typeof brojGodina2);

// const visina = Number(prompt("Unesite vasu visinu"));
const visina = +prompt("Unesite vasu visinu");
console.log(visina);

// isNaN() je metoda koja proverava da li je neka vrednost nekorektan broj (NaN).

console.log(isNaN("55")); // false
console.log(isNaN("5ewe5")); // true

// Na osnovu unetih godina ispisati u konzoli sledece:
// ako je broj godina manji od 12: Vi ste decijeg doba
// ako je broj godina izmedju 12(ukljucuje) i 18(ne ukljucuje): Vi ste maloletni
// ako je broj godina izmedju 18(ukljucuje) i 40(ne ukljucuje): Vi ste punoletni
// ako je broj godina veci ili jednak 40: Vi ste zrela osoba
// ako je korisnik uneo negativan broj: Broj godina ne moze biti negativan.
// ako korisnik nije uneo broj: Niste uneli broj godina.

const brojGodina3 = +prompt("Unesite broj godina");
if (isNaN(brojGodina3)) {
  console.log("Niste uneli broj godina");
} else if (brojGodina3 < 0) {
  console.log("Broj godina ne moze biti negativan");
} else if (brojGodina3 < 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodina3 >= 12 && brojGodina3 < 18) {
  console.log("Vi ste maloletni");
} else if (brojGodina3 >= 18 && brojGodina3 < 40) {
  console.log("Vi ste punoletni");
} else if (brojGodina3 >= 40) {
  console.log("Vi ste zrela osoba");
}

// Provera broja:
// Napiši program koji će tražiti od korisnika da unese broj, a zatim ispiši poruku koja će reći da li je broj pozitivan, negativan ili nula.

// Ocena studenta:
// Napiši program koji će korisnika pitati za unos ocene (broj između 0 i 100) i ispisati odgovarajuću ocenu (A, B, C, D ili F) prema standardnom školskom sistemu ocenjivanja.

// Provera parnosti broja:
// Napiši program koji će korisnika pitati za unos broja, a zatim ispisati poruku da li je broj paran ili neparan.

// Upoređivanje dva broja:
// Napiši program koji će tražiti od korisnika da unese dva broja, a zatim ispisati poruku koja će reći koji od ta dva broja je veći, ili da su jednaki.

// 1.
const broj = Number(prompt("Unesite neki broj"));

if (isNaN(broj)) {
  console.log("Niste uneli broj");
} else if (broj < 0) {
  console.log("Broj je negativan");
} else if (broj === 0) {
  console.log("Broj je jednak nuli");
} else {
  console.log("Broj je pozitivan");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Switch naredbu koristimo kada zelimo kroz slucajeve pokriti tacne moguce vrednosti.

switch (5 - 3) {
  case 10:
    // kod koji se izvrsava ako je izraz === 10
    break;
  case 5:
    // kod koji se izvrsava ako je izraz === 5
    break;
  case 2:
    // kod koji se izvrsava ako je izraz === 2
    break;
  default:
  // kod koji se izvrsava ako nisu zadovoljeni prethodni slucajevi
}

// break zapravo prekida izvrsavanje naredbe.
// break keyword stavljamo na kraju slucaja da se ne bi izvrsio kod od narednog slucaja koji nije zadovoljen.

// 1. Korisnik unosi broj:
// Ako je uneo broj izmedju 12 i 15 (ukljucujuci oba) neka se se ispise poruka: "uneli ste vrednostBroja"
// Defaultno: Niste uneli broj iz trazenog opsega.

const broj = +prompt("Unesite broj izmedju 12 i 15");

switch (broj) {
  case 12:
  case 13:
  case 14:
  case 15:
    console.log("Uneli ste broj " + broj);
    break;
  default:
    console.log("Niste uneli broj iz trazenog opsega");
}

// Dani u nedelji:
// Napiši program koji će tražiti od korisnika da unese redni broj dana u nedelji (1 za ponedeljak, 2 za utorak, itd.) i ispisati ime tog dana.

const dan = +prompt("Unesite redni broj dana u nedelji:");

switch (dan) {
  case 1:
    console.log("Ponedeljak");
    break;
  case 2:
    console.log("Utorak");
    break;
  case 3:
    console.log("Sreda");
    break;
  case 4:
    console.log("Cetvrtak");
    break;
  case 5:
    console.log("Petak");
    break;
  case 6:
    console.log("Subota");
    break;
  case 7:
    console.log("Nedelja");
    break;
  default:
    console.log("Niste uneli broj iz trazenog opsega");
}

// Ipisati brojeve od 1 do 10 u konzoli jedan ispod drugog:

// 1. nacin
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// 2. nacin

// Za iteraciju kroz neki objekat (niz, karaktere stringa...) u JavaScriptu koristimo petlju.
// Postoje 3 pretlje u JS

// 1. for petlja:

// for (statement1; statement2; statement3) {
// kod koji se izvrsava u svakoj iteraciji
// }
// statement1 - Izvrsava se samo na pocetku i predstavlja definisanje iteratora.

// statement2 - Granicu do koje ce se petlja izvrsavati

// statement3 - Promena vrednosti iteratora koja se desava nakon svake iteracije.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Domaci zadaci:
// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

// 2. Zadatak - switch naredba
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.

// 3. Sezona godine:
// Napiši program koji će korisnika pitati za unos meseca (broj između 1 i 12) i ispisati odgovarajuću sezonu godine.

// 4. Kalkulator operacija:
// Napiši program koji će tražiti od korisnika da unese dva broja i operaciju (‘+’, ‘-’, ‘*’, ‘/’), a zatim ispisati rezultat te operacije.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const demir = "Demir";

for (let i = 0; i < 10; i++) {
  console.log(demir);
}

// 1. Ispisati brojeve od 1 do 10, izuzev broja 2 i broja 5.

// 1. nacin
for (let i = 1; i <= 10; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

// continue keyword koristimo kada zelimo da preskocimo radnju za tu iteraciju i nastavimo petlju sa narednom iteracijom.

// 2. nacin
for (let i = 1; i <= 10; i++) {
  if (i === 2 || i === 5) {
    continue;
  } else {
    console.log(i);
  }
}

// 2. Ispisati sve brojeve od 1 do 10. Ako je neki broj deljiv sa 7 neka se prekine petlja.

// break izvrsava prekidanje petlje. Ako zelimo da se u nekom momentu prestane izvrsavanje onda koristimo break.

for (let i = 1; i <= 10; i++) {
  if (i % 7 === 0) {
    break;
  } else {
    console.log(i);
  }
}

// Domaci:
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati parne brojeve od 1 do 20 na dva nacina.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

const a = Number(prompt("Unesite prvi broj"));
const b = +prompt("Unesite drugi broj");

if (a === b) {
  console.log("Povrsina kvadrata je " + a * b);
} else {
  console.log("Povrsina pravougaonika je " + a * b);
}

// 4. Kalkulator operacija:
// Napiši program koji će tražiti od korisnika da unese dva broja i operaciju (‘+’, ‘-’, ‘*’, ‘/’), a zatim ispisati rezultat te operacije.

const operacija = prompt("Unesite aritmeticku operaciju");

switch (operacija) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    if (b === 0) {
      console.log("Deljenje nije moguce nulom.");
    } else {
      console.log(a / b);
    }
    break;
  default:
    console.log("Nepoznata aritmeticka operacija");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.
// Ispisati parne brojeve od 1 do 20 na dva nacina.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.

// 1. nacin
for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 2. nacin
for (let i = 2; i < 21; i += 2) {
  console.log(i);
}

// 1. nacin
for (let i = 6; i < 15; i++) {
  console.log(i * 2);
}

// 2. nacin
for (let i = 6; i < 15; i++) {
  const doubleValue = i * 2;
  console.log(doubleValue);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

const prviBroj = +prompt("Unesite prvi broj:");
const drugiBroj = +prompt("Unesite drugi broj:");

if (isNaN(prviBroj) || isNaN(drugiBroj)) {
  console.log("Niste uneli brojeve.");
} else if (prviBroj === drugiBroj) {
  console.log("Uneli ste jednake brojeve.");
} else if (prviBroj > drugiBroj) {
  for (let i = drugiBroj; i <= prviBroj; i++) {
    console.log(i);
  }
} else {
  for (let i = prviBroj; i <= drugiBroj; i++) {
    console.log(i);
  }
}

// Preko switch naredbe:
console.log(new Date().getDay());
// getDay() - daje vrednost 0-6
// switch (new Date().getDay())...
// Na osnovu vrednosti koju nam daje izraz iz switch naredbe, kroz case_ove i eventualno default ispisati poruku:
// "Danas je 'radni dan'"
// "Ugodno provedite vikend"

switch (new Date().getDay()) {
  case 6:
  case 0:
    console.log("Ugodno provedite vikend");
    break;
  default:
    console.log("Danas je 'radni dan'");
}

// Sabrati brojeve od 1 do 10 i ispisati taj zbir.

let zbir = 0;
for (let i = 1; i <= 10; i++) {
  zbir += i;
}
console.log(zbir);

// Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.

const n = +prompt("Unesite neku vrenost.");
let saberi = 0;
let brBr = 0;
for (i = 1; i < n; i++) {
  if (i % 5 === 0) {
    saberi += i;
    brBr += 1;
  }
}
console.log(brBr);
console.log(saberi);

// 1.
// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.

// 2.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// while petlja se koristi za iteraciju kroz neki objekat.
// definise se drugacije u odnosu na for petlju.

// vreme = "Suncano";
// while (vreme === "Suncano") {
//   console.log("Danas je lep dan.");
//   vreme = "Kisovito";
// }

let i = 1;
while (i < 6) {
  console.log(i);
  //   Kad zavrsimo celu logiku za kod pod odredjenim uslovom moramo menjati i.
  i++;
}

// do while petlja se koristi za iteraciju kroz neki objekat.
// Razlika u odnosu na while petlju je sto se prvo izvrsava kod pa tek onda proverava uslov.

let j = 1;
do {
  console.log(j);
  j++;
} while (j < 6);

// nedostatak:
let z = 10;
do {
  console.log(z);
  z++;
} while (z < 6);

// While
// Traziti od korisnika da unese neki broj.
// Na osnovu te vrednosti izvrsiti ispis kvadrata brojeva od 1 do tog unetog broja:

const broj = +prompt("Unesite broj:");
let iter = 1;
while (iter <= broj) {
  console.log(iter ** 2);
  iter++;
}

// Tražiti unos brojeva od korisnika sve dok ne unese nulu:

let korisnikovBroj = +prompt("Unesite vas broj");

while (korisnikovBroj !== 0) {
  korisnikovBroj = +prompt("Unesite vas broj");
}

// Domaci:
// 1.
// Ispisati sve brojeve od 1 do 10 koji su parni

// 2.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

// Razni zadaci:
// https://www.znanje.org/knjige/computer/algoritmi/88_quiz/ciklicna_for_0.php

// Proizvod neparnih 1 do 5.
let proizvod = 1;
for (let i = 1; i < 6; i++) {
  if (i % 2 !== 0) {
    proizvod *= i;
  }
}
console.log(proizvod);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1.
// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.

// 2.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.

// 1.
for (i = 99; i >= -99; i--) {
  if (i % 4 === 0) {
    console.log(i + 14);
  }
}

// 2.
zbir = 0;
brBr = 0;
for (i = 3; i < 18; i++) {
  if (i % 3 === 0) {
    zbir += i;
    brBr++;
  }
}
arVrednost = zbir / brBr;
console.log("Aritmeticka vrednost brojeva je " + arVrednost);

// Domaci:
// 1.
// Ispisati sve brojeve od 1 do 10 koji su parni

// 2.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

// Razni zadaci:
// https://www.znanje.org/knjige/computer/algoritmi/88_quiz/ciklicna_for_0.php

// Proizvod neparnih 1 do 5.
