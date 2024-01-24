// korisnik unosi 2 broja
// na osnovu toga koji je broj manji, iteracija se vrssi od njega do veceg broja
// ispisuju se brojevi od manjeg ka vecem

const prviBroj = +prompt("unesite prvi broj");
const drugiBroj = +prompt("unesite drugi broj");

if (isNaN(prviBroj) || drugiBroj) {
  console.log("niste uneli brojeve");
} else if (prviBroj === drugiBroj) {
  console.log("uneli ste jednake brojeve");
} else if (prviBroj > drugiBroj) {
  for (let i = drugiBroj; i <= prviBroj; i++) {
    console.log(i);
  }
} else
  for (let i = prviBroj; i <= drugiBroj; i++) {
    console.log(i);
  }

// drugi zadatak

// getDay() - daje vrednost 0-6

switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Danas je 'radni dan' ");
    break;
  default:
    console.log("ugodno provedite vikend");
}

// ispisati zbir brojeva os 1 do 10

let zbir = 0;
for (let i = 1; i <= 10; i++) {
  zbir += i;
}
console.log(zbir);

// prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n

const n = +prompt("unesite neku vrednost");

let saberi = 0;
for (i = 1; i < n; i++) {
  if (i % 5 === 0) {
    saberi += i;
  }
}
