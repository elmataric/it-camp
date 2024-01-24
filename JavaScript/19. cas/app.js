// STRINGOVI SU IMMUTABLE VREDNOSTI!

// const recenica = "Danas je bio 'suncan' dan.";
// const recenica2 = 'Danas je bio "suncan" dan.';

const recenica3 = 'Danas je bio "suncan" dan.';
console.log(recenica3);

const recenica4 = "Sta ako zelimo \\ da se nadje u textu";
console.log(recenica4);

const recenica5 =
  "sta ako zelimo da se nadje u textu \
 sta ako zelimo da se nadje u textu \
 sta ako zelimo da se nadje u textu \
 sta ako zelimo da se nadje u textu \
 sta ako zelimo da se nadje u textu \
 sta ako zelimo da se nadje u textu \
 sta ako zelimo da se nadje u textu";
console.log(recenica5);

const recenica6 =
  "Sta ako zelimo da se nadje u textu \n Sta ako zelimo da se nadje u textu";
console.log(recenica6);

// Postoje 3 metode za extraktovanje fela stringa:

// 1. slice(start, end) start se ukljucuje, end se ne ukljucuje

const isecak = recenica4.slice(0, 7);
console.log(isecak);

console.log(recenica4.slice(8, recenica4.length));
console.log(recenica4.slice(8)); // do kraja (izostavljanjem drugog argumenta uzimamo ostatak stringa)
console.log();

console.log(recenica4.slice(-6));

// 2. substring(start, end), za nju vazi sve sto vazi za slice samo sto ne prihvate negativne indekse

console.log(recenica4.substring(0, 3));

// substr(start, length)
// drugi argument predstavlja duzinu isecka

console.log(recenica4.substr(4, 10));

// concat() - metoda za spajanje stringova, spaja dva ili vise stringova

const ime = "demir";
const prezime = "miraljemovic";

const imeIPrezime = ime.concat(" ", prezime);
console.log(imeIPrezime);

// trim() kosacica - brise razmake na krajevima

const email = "     elmataric@gmail.com     ";
console.log(email);
console.log(email.length);
console.log(email.trim());
console.log(email.trim().length);
