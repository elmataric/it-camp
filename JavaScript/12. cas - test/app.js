//1.	(20) Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja (poželjno je obuhvatiti slučaj kada korisnik ne unese odgovarajuću vrednost).

const broj = +prompt("Unesite realan broj.");

if (isNaN(broj)) {
  console.log("Niste uneli odgovarajucu vrednost.");
} else {
  console.log(broj * broj);
}

//2.	(20) Napisati program koji ispisuje u konzoli brojeve od 1 do 100(uključujući) tako da:

//(i)	ako je broj deljiv sa 3, potrebno je ispisati ‘FIZZ’ umesto tog broja;
//(ii)	ako je broj deljiv sa 5, potrebno je ispisati ‘BUZZ’ umesto tog broja;
//(iii)	ako je broj deljiv i sa 3 i sa 5, potrebno je ispisati ‘FIZZ BUZZ’ umesto tog broja.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizz buzz");
  } else {
    console.log(i);
  }
}

//3.	(20)
//Ispisati prva tri broja koji su deljivi sa 4 i 6.

let brojac = 0;
for (let i = 1; brojac < 3; i++) {
  if (i % 4 === 0 && i % 6 === 0) {
    console.log(i);
    brojac++;
  }
}
