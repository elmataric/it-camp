// OPERATORI U JS//

// postoji 6 vrsta operatora u js
// 1. aritmeticki
// 2. operatori dodele vrednosti/assignment
// 3. string operatori
// 4. operatori poredjeenja (comparison)
// 5. logicki (logical)
// 6. tipovni (type)

// 1.1. addition (sabiranje)
console.log(5 + 5);
// 1.2. subtraction (oduzimanje)
console.log(7 - 3);
// 1.3. multiplication (*)
console.log(2 * 6);
// 1.4. division (/)
console.log(12 / 2);
// 1.5. exponentation (**)
console.log(2 ** 3);
// 1.6. modul (ostatak pri deljenju)
console.log(12 % 5);

// da bi broj bio paran mora ostatak pri deljenju sa 2 biti 0.
// da bi broj bio neparan mora ostatak pri deljenju sa 2 biti razlicit od nule.
// broj % 2 mora biti 0.
// broj % 2 mora biti razlicit od nule.

// 1.7. increment (++)
let a = 13;
a++;
console.log(a);

// 1.8. decrement (--)
let b = 13;
b--;
console.log(b);

//2. operatori dodele vrednosti/assignment
// 2.1. =
x = 34;
console.log(x);

// 2.2. +=
x += 6; // x = x + 6
console.log(x);

// 2.3.-=
x -= 5; // x = x - 5
console.log(x);

// 2.4. *=
x *= 2;
console.log(x);

// 2.5. *=
x /= 7;
console.log(x);

// 2.6. *=
x %= 4;
console.log(x);

// 2.7. *=
x **= 4;
console.log(x);

// 3. string operatori
// + operator moze biti koriscen za spajanje stringova
ime = "demir";
prezime = "miraljemovic";

imeIPrezime = ime + " " + prezime;
console.log(imeIPrezime);

brojGodina = 18;
console.log(ime + brojGodina);
// Pomocu + operatora mozemo dodavati broj stringu i obratno, rezultat je string.

console.log("55" + 44);
console.log("55" - 44);
// ako string moze da se pretvori u broj javascript ce izvrsiti to pretvaranje, pa tek onda oduzimanje ili bilo koju drugu aritmeticku operaciju osim sabiranja.
console.log("55" - 44);
console.log("55a" - 44);
// NaN - not a number predstavlja nekorektan broj i jegov tipje number
console.log(typeof ("55a" - 44));
console.log(typeof (5 * "3"));
console.log(5 * "3");

// 4. Operatori poredjenja
// 1.1. == poredjenje vrednosti

console.log(4 == 7);
console.log(5 == 5);
console.log("5" == 5);

// 4.2. === poredjenje tia i vrednosti
console.log("5" === 5);
console.log(5 === 5);

// 4.3. != razlicita vrednost
console.log(5 != 5);
console.log(5 != "5");

// 4.4. !== razlcit tip ili vrednost
console.log(5 !== 5);
console.log(5 !== "5");

// 4.5. > vece od
console.log(5 > 4);

// 4.6. < manje od
console.log(5 < 4);

// 4.7. >= vece ili jednako
console.log(5 >= 4);

// 4.8. <= manje ili jednako
console.log(5 <= 4);

// 4.9. ? ternary operator
trenutnoVreme = 21;
pozdrav = trenutnoVreme < 4 ? "dobar dan" : "dobro vece";
console.log(pozdrav);

// 5. logicki operatori (logical operators)

// 5.1. && logicko and (i)

prviBroj = 2;
drugiBroj = 3;
// ispitati da ;i su oba broja pozitivna.
console.log(prviBroj > 0 && drugiBroj > 0);

// 5.2. || logicko ili
// ispitati da li je bar jedan od ponudjenih brojeva paran broj

prviBroj = 6;
drugiBroj = 7;
console.log(prviBroj % 2 === 0 || drugiBroj % 2 === 0);

// 5.3. ! logicko not
console.log(!(prviBroj % 2 === 0));

// 6. tipovni operatori

// 6.1. typeof
console.log(typeof 14.17);
// 6.2. instanceof
console.log(typeof [1, 2, 3]);
console.log([1, 2, 3] instanceof Array);
