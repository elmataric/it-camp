const recenica = "Danas pocinjemo rad sa stringovima.";
const rec = "Demir";

console.log(recenica);

// pomocu indeksa pristupamo nekom karakteru stringa
// indeksiranje ide od 0
// poslednji karakter u stringu ima vrdnost cela duzina - 1

console.log(recenica[0]);
console.log(recenica[4]);

console.log(recenica[34]);

// koristimo length metodu za izracunavanje duzine stringa

console.log(recenica.length);

const duzinaRecenice = recenica.length;
console.log(recenica[duzinaRecenice - 1]);

for (let i = 0; i < rec.length; i++) {
  console.log(rec[i]);
}

// na osnovu unetee recenice od strane korisnika ispisati recenicu da svaki karakte ide jedan ispod drugog. dok ako je neki karakter = "a", neka se ispise broj 5, a ako je "s", nek se ne ispise nista.

const recen1ca = prompt("Unesite neku recenicu.");

for (let i = 0; i < recen1ca.length; i++) {
  if (recen1ca[i] === "a") {
    console.log(5);
  } else if (recen1ca[i] === "s") continue;
  else {
    console.log(recen1ca[i]);
  }
}

// metoda toLowerCase() pretvara ceo string u mala slova
console.log("NEKI STRING ZA PRETVARANJE U MALA SLOVA".toLowerCase());
console.log("neki stringic".toUpperCase());

const recenica2 = "e ko ovo uradi - on je mnogo dobar";
let recenica3 = "";

for (let i = 0; i < recenica2.length; i++) {
  if (i === 0) {
    recenica3 += recenica2[i].toUpperCase;
  } else if (recenica2[i - 1] === " ") {
    recenica3 += recenica2[i].toUpperCase();
  } else {
    recenica3 += recenica2[i];
  }
}

console.log(recenica3);

// 2.
