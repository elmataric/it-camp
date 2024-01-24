// funkcije

function nesto(a, b) {
  console.log(a + b);
}
nesto(10, 7);
///

const zbir = 10 + 7;
console.log(zbir);

function zbir2(broj1, broj2) {
  const zbir = broj1 + broj2;
  return zbir;
}
console.log(zbir2(5, 8));
//////

//napravi funkciju koja vraca zbir kvadrata dva broja

function zbir3(a, b) {
  const zbir3 = a * a + b * b;
  return zbir3;
}
console.log(zbir3(10, 5));
///

const zbirKvadrata = (a, b) => {
  const zbir = a ** 2 + b ** 2;
  return zbir;
};
console.log(zbirKvadrata(3, 4));

// ako je funkcija jednostavna, ima jedan return, onda mozemo izostaviti viticaste zagrade i return keyword
// 1. nacin
const zbirKvadrata1 = (a, b) => {
  if (b === undefined) {
    return a ** 2;
  } else {
    const zbir = a ** 2 + b ** 2;
    return zbir;
  }
};
console.log(zbirKvadrata1(3));

// 2. nacin

const zbirKvadrata2 = (a, b = 0) => {
  return a ** 2 + b ** 2;
};
console.log(zbirKvadrata1(3));
//

// napravi funkciju koja vraca aritmeticku sredinu 3 broja, sa defaultnim vednostima

const noviZbir = (a = 1, b = 1, c = 1) => {
  return (a + b + c) / 3;
};
console.log(noviZbir());

///
// napraviti funkciju povrsina koja uzima dve vrednosti. ako su te dve vrednosti jednake, funkcija vraca povrsinu kvadrata uz jednu, a ako su razlicite uz drugu poruku.

function povrsina(a, b) {
  if (a === b) {
    return "povrsina kvadrata je " + a * a;
  } else {
    return "povrsina pravougaonika je " + a * b;
  }
}
console.log(povrsina(10, 10));
console.log(povrsina(5, 10));
