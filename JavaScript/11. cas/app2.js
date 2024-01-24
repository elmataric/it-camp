// while petlja se koristi za iteraciju kroz neki objekat
// definise se drugacije u odnosu na for petlju

// vreme = "suncano"
// wile (vreme === "suncano") {
//    console.log("danas je lep dan")
//   vreme = "kisovito"
//}

let i = 1;

while (i < 6) {
  console.log(i);
  // kad zavrsimo celu logiku za kod pod odredjenim uslovom moramo menjati i.
  i++;
}

// do while petlja se koristi za iteraciju kroz neki objekat
// razlika u odnosu na while petlju je sto prvo izvrsava kod pa tek onds proverava uslov.

let j = 1;
do {
  console.log(j);
  j++;
} while (j < 6);

// nedostatak
let z = 10;
do {
  console.log(z);
  z++;
} while (z < 6);

// traziti od korisnika da unese neki broj
// na osnovu tog broja izvrsiti ispis kvadrata brojeva od 1 do tog unetog broja

const nekiBroj = +prompt("unesite random broj");

let iter = 1;
while (iter <= nekiBroj) {
  console.log(iter * iter);
  iter++;
}
// lalalalalal

let random = +prompt("unesite broj razlicit od nule");

while (random !== 0) {
  random = +prompt("unesite broj razlicit od nule");
}

// proizvod neparnih od 1 do 5

let proizvod = 1;
for (i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    proizvod *= i;
  }
}
console.log(proizvod);
