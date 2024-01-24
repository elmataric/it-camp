// switch naredbu koristimo kada zelimo kroz slucajeve pokriti tacne moguce vrednosti

switch (5 - 3) {
  case 10:
    //kod koji se izvrsava ako je izraz === 10
    break;
  case 5:
    //kod koji se izvrsava ako je izraz === 5
    break;
  case 2:
    //kod koji se izvrsava ako jenizraz === 2
    break;
  default:
    //kod koji se izvrsava ako nijedan prethodni slucaj nije zadovoljen
    break;
}

// break keyword stavljamo na kraju slucaja da se ne bi izvrsio kod od narednog slucaja koji nije zadovoljen.

const broj = +prompt("unesite broj izmedju 12 i 15");

switch (broj) {
  case 12:

  case 13:

  case 14:

  case 15:
    console.log("uneli ste broj " + broj);
    break;
  default:
    console.log("niste uneli broj iz trazenog opsega");
    break;
}

const dan = +prompt("unesite redni broj dana");

switch (dan) {
  case 1:
    console.log("ponedeljak");
    break;
  case 2:
    console.log("utorak");
    break;
  case 3:
    console.log("sreda");
    break;
  case 4:
    console.log("cetvrtak");
    break;
  case 5:
    console.log("petak");
    break;
  case 6:
    console.log("subota");
    break;
  case 7:
    console.log("nedelja");
    break;
  default:
    console.log("niste uneli redni broj dana");
}
