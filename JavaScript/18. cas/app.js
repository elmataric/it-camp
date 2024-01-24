let username = prompt("unesite korisnicko ime");

while (username.length < 6) {
  username = prompt("unesite korisnicko ime");
}

const isSunny = false;

if (isSunny) {
  console.log("napolju je suncano");
} else if (!isSunny) {
  console.log("trenutno nije suncano");
}

// truthy i falsy vrednosti nam olaksavaju pisanje uslova
// ako je vrednost truthy, to znaci da je uslov zadovoljen i da ce se izvrsiti kod koji sledi.
// ako je vrednost falsy, to znaci da uslov nije zadovoljen i nece se izvrsiti kod koji sledi.
// postoji 8 falsy vrednosti:

//nabrojati falsy vrednosti (pitanje za sledeci test)

// 1. false
// 2. ""
// 3. 0
// 4. -0
// 5. 0n
// 6. NaN
// 7. undefined
// 8. null

// dok ne unese bilo sta

let recenica = prompt("unesi neki karakter");

while (recenica.length < 1) {
  recenica = prompt("unesi neki karakter");
}
///
let nesto = prompt("unesi neki karakter1");
while (!nesto) {
  nesto = prompt("unesi neki karakter1");
}

// napraviti funkciju gde se trazi unos od strane korisnika i vraca poruka ds li je uneta vrednost truthy ili falsy

const isTruth = () => {
  const value = prompt("enter some value");
  if (value) {
    return "entered value is truthy value";
  } else {
    return "entered value is falsy value";
  }
};
console.log(isTruth());

//
const isTruth1 = () => {
  const value = +prompt("enter some value");
  if (value) {
    return "entered value is truthy value";
  } else {
    return "entered value is falsy value";
  }
};
console.log(isTruth1());

//
