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
if (isNaN(nekiBroj)) {
  console.log("niste uneli broj");
} else if (nekiBroj % 2 === 0) {
  console.log("ovaj broj je paran");
} else {
  console.log("ovaj broj je neparan");
}

// Upoređivanje dva broja:
// Napiši program koji će tražiti od korisnika da unese dva broja, a zatim ispisati poruku koja će reći koji od ta dva broja je veći, ili da su jednaki.

const random1Broj = +prompt("unesite prvi broj");
const random2Broj = +prompt("unesite drugi broj");

if (isNaN(random1Broj) || isNaN(random2Broj)) {
  console.log("niste uneli broj");
} else if (random1Broj > random2Broj) {
  console.log("prvi broj je veci od drugog");
} else if (random2Broj > random1Broj) {
  console.log("drugi broj je veci od prvog");
} else {
  console.log("oba broja su jednaka");
}
