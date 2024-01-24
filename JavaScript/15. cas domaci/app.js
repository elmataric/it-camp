// Domaci:

// Zadatak 1:
// Napiši program koji će zamijeniti sva mala slova u datom stringu velikim slovima i obrnuto. Na primjer, za string "Hello World" program treba vratiti "hELLO wORLD".

const string = "Hello World";
let drugiString = "";

for (let i = 0; i < string.length; i++) {
  const karakter = string[i];
  if (karakter >= "a" && karakter <= "z") {
    drugiString += karakter.toUpperCase();
  } else if (karakter >= "A" && karakter <= "Z") {
    drugiString += karakter.toLowerCase();
  } else {
    drugiString += karakter;
  }
}
console.log(drugiString);

// Zadatak 2:
// Originalnu recenicu vratiti u obrnutom redosledu. Koristi petlju i bez korišćenja gotovih metoda poput.

const unetaRecenica = prompt("Unesite recenicu koju Vi zelite:");
let obrnutaRecenica = " ";

for (let i = unetaRecenica.length - 1; i >= 0; i--) {
  obrnutaRecenica += unetaRecenica[i];
}
console.log(obrnutaRecenica);

// Zadatak 3: Na osnovu date recenice napraviti i ispisati novu recenicu tako da:
// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	ostali karakteri se ne menjaju.

const dataRecenica = prompt("Unesite recenicu koju Vi zelite:");
let transformacijaRecenice = "";

for (let i = 0; i < dataRecenica.length; i++) {
  const karakter1 = dataRecenica[i];
  const jeSamoglasnik = "aeiouAEIOU".includes(karakter1);
  transformacijaRecenice += jeSamoglasnik ? karakter1.toUpperCase() : karakter1;
}
console.log(transformacijaRecenice);
