// Domaci zadaci:
// 1.
// Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
// Ako dati string ima vecu duzinu od 9:
// pravi novi string gde menjamo sva mala slova "a" sa "B" i funkcija ce vratiti novi string koji je sastavljen od "Ovo je novodobijena recenica, " + novaRecenica
// Ako string ima duzinu <= 9:
// Funkcija treba vratiti poruku:
// Recenica je nedovoljne duzine za dalje ispitivanje.

function string(pocetniString) {
  if (pocetniString.length > 9) {
    let novaRecenica = pocetniString.replace(/a/g, "B");

    let rezultat = "Ovo je novodobijena recenica, " + novaRecenica;

    return rezultat;
  } else {
    return "Recenica je nedovoljne duzine za dalje ispitivanje.";
  }
}

// 2. Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca, datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima;
// 2. recenicu ispisanu malim slovima;
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima;
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju 'fakultet'.

function obradiRecenicu(ulaznaRecenica) {
  let velikaRecenica = ulaznaRecenica.toUpperCase();

  let malaRecenica = ulaznaRecenica.toLowerCase();

  let polaPolaRecenica =
    ulaznaRecenica
      .substring(0, Math.ceil(ulaznaRecenica.length / 2))
      .toUpperCase() +
    ulaznaRecenica
      .substring(Math.ceil(ulaznaRecenica.length / 2))
      .toLowerCase();

  let zamenaReci = ulaznaRecenica.replace(/skola/g, "fakultet");

  let rezultat = `1. ${velikaRecenica}\n2. ${malaRecenica}\n3. ${polaPolaRecenica}\n4. ${zamenaReci}`;

  return rezultat;
}

// Primeri upotrebe
let prviString = "Ovo je primer za prvu funkciju.";
let drugiString = "Skola je mesto gde učimo.";

console.log(obradiString(prviString));
console.log(obradiString(drugiString));

let korisnickaRecenica = prompt("Unesite neku recenicu:");
console.log(obradiRecenicu(korisnickaRecenica));
