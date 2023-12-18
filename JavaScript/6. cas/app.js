// KONDICIONALI //

// (5 > 4) je uslov koji kada je zadovoljen izvrsice se deo koda izmedju viticastih zagrada

if (5 > 4) {
  console.log("vece je");
}

trenutnoVreme = 20;

if (trenutnoVreme >= 6 && trenutnoVreme < 12) {
  console.log("dobro jutro");
} else if (trenutnoVreme >= 12 && trenutnoVreme < 16) {
  console.log("dobar dan");
} else {
  console.log("dobro vece");
}

brojGodina = 17;

if (brojGodina >= 18) {
  console.log("punoletni ste");
} else {
  console.log("maloletni ste");
}

x = 12;
y = 0;

if (((x = 12), (y = 6))) {
  console.log(x / y);
} else {
  console.log("deljenje je nemoguce");
}

if (y === 0) {
  console.log("deljenje je nemoguce");
} else {
  console.log(x / y);
}

// Domaci:
// Na osnovu promenljive brojGodina ispisati u konzoli sledece:
// ako je broj godina manji od 12: "Vi ste decijeg doba"
// ako je broj godina izmedju 12(ukljucuje) i 18(ne ukljucuje): Vi ste maloletni
// ako je broj godina izmedju 18(ukljucuje) i 40(ne ukljucuje): Vi ste punoletni
// ako je broj godina veci ili jednak 40: Vi ste zrela osoba.

brojGodina = 17;

if (brojGodina <= 12) {
  console.log("Vi ste decijeg doba");
} else if (brojGodina > 12 && brojGodina < 18) {
  console.log("Vi ste maloletni");
} else if (brojGodina >= 18 && brojGodina > 39) {
  console.log("Vi ste punoletni");
} else {
  console.log("Vi ste zrela osoba.");
}
