// Napraviti arrow funkciju koja na osnovu unete vrednosti vraca jedno od cetiri stanja:
// Ako je unet pozitivan broj, ispisuje poruku "UNET JE POZITIVAN BROJ"
// Ako je unet negativan broj, ispisuje poruku "UNET JE NEGATIVAN BROJ"
// Ako je uneta nula, ispisuje poruku "UNETA JE NULA"
// Ako nije unet broj, ispisuje poruku "UNETA VREDNOST NIJE BROJ"

// Zadatak 2:
// Napiši funkciju koja prima broj i vraća true ako je broj paran, a false ako je neparan.

// Zadatak 3:
// Napiši funkciju koja prima dva broja i vraća veći od njih.

// Zadatak 4:
// Napiši funkciju koja prima broj i vraća sumu svih brojeva do tog broja (uključujući taj broj). Na primer, za broj 4, funkcija treba vratiti 1 + 2 + 3 + 4 = 10.

const proveriBroj = (vrednost) => {
  if (typeof vrednost !== "number") {
    return "uneta vrednost nije broj";
  } else if (vrednost > 0) {
    return "unet je pozitivan broj";
  } else if (vrednost < 0) {
    return "unet je negativan broj";
  } else {
    return "uneta je nula";
  }
};
console.log(proveriBroj(0));

// Zadatak 2:
const paranNeparan = (broj) => {
  return broj % 2 === 0;
};
console.log(paranNeparan(10));

// Zadatak 3:
const većiBroj = (broj1, broj2) => {
  return broj1 > broj2 ? broj1 : broj2;
};
console.log(većiBroj(6, 3));

// Zadatak 4:
const viseBr = (broj) => {
  let suma = 0;
  for (let i = 1; i <= broj; i++) {
    suma += i;
  }
  return suma;
};
console.log(viseBr(7));
