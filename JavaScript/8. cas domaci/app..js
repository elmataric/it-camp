// Domaci zadaci
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

let broj1 = +prompt("Unesite prvi broj:");
let broj2 = +prompt("Unesite drugi broj:");

if (broj1 === broj2) {
  // Povrsina kvadrata
  let povrsina = broj1 * broj1;
  console.log("Povrsina kvadrata je: " + povrsina);
} else {
  // Povrsina pravougaonika
  let povrsina = broj1 * broj2;
  console.log("Povrsina pravougaonika je: " + povrsina);
}

let x = +prompt("Unesite vrednost za x:");
let y = +prompt("Unesite vrednost za y:");

switch (true) {
  case y !== 0:
    console.log("Kolicnik x/y je: " + x / y);
    break;
  default:
    console.log("Deljenje je nemoguce.");
    break;
}

let mesec = +prompt("Unesite broj meseca (od 1 do 12):");

if (mesec >= 1 && mesec <= 12) {
  switch (true) {
    case mesec >= 3 && mesec <= 5:
      console.log("Prolece");
      break;
    case mesec >= 6 && mesec <= 8:
      console.log("Leto");
      break;
    case mesec >= 9 && mesec <= 11:
      console.log("Jesen");
      break;
    default:
      console.log("Zima");
      break;
  }
} else {
  console.log("Neispravan unos meseca.");
}

let broj3 = +prompt("Unesite prvi broj:");
let broj4 = +prompt("Unesite drugi broj:");
let operacija = prompt("Unesite operaciju (+, -, *, /):");

switch (operacija) {
  case "+":
    console.log("Rezultat sabiranja je: " + (broj3 + broj4));
    break;
  case "-":
    console.log("Rezultat oduzimanja je: " + (broj3 - broj4));
    break;
  case "*":
    console.log("Rezultat mnozenja je: " + broj3 * broj4);
    break;
  case "/":
    if (broj2 !== 0) {
      console.log("Rezultat deljenja je: " + broj3 / broj4);
    } else {
      console.log("Deljenje nulom nije dozvoljeno.");
    }
    break;
  default:
    console.log("Nepodrzana operacija.");
    break;
}
