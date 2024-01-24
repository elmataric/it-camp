const d = +prompt("unesite duzinu terena");
const r = +prompt("unesite rastojanje izmedju ograde i terena");
const s = +prompt("unesite sirinu terena");

if (d >= 90 && d <= 120 && r >= 2 && r <= 10 && s >= 45 && s <= 95) {
  console.log(d + 2 * r + d + 2 * r + s + 2 * r + s + 2 * r);
} else if (isNaN(d || r || s)) {
  console.log(console.log("Niste uneli broj."));
} else if (d < 90 || d > 120 || s < 45 || s > 95 || r < 2 || r > 10) {
  console.log("Niste uneli broj iz trazenog opsega.");
}

// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, njegov kvadrat i vrednost broja umanjenu za 25.

const broj = +prompt("Unesite broji izmedju 12 i 15.");

if (broj >= 12 && broj < 16) {
  for (var i = broj; i >= 1; i--) {
    var kvadrat = i ** 2;
    var umanjenoZa25 = i - 25;
    console.log(
      "Broj: " +
        i +
        ", Kvadrat: " +
        kvadrat +
        ", Vrednost - 25: " +
        umanjenoZa25
    );
  }
} else {
  console.log("Uneti broj nije u intervalu [12, 16).");
}

//if (isNaN(broj)) {
//  console.log("Niste uneli broj.");
//} else if (broj < 12 || broj > 16) {
// console.log("Niste uneli broj iz trazenog opsega.");
//} else {
//  console.log(broj, broj * broj, broj - 25);
//}
