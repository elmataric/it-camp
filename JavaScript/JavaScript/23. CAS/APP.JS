function isPalindrom(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrom("anavolimilovana"));
console.log(isPalindrom("ugkuygdbi"));

// sva velika slova u sringu sveesti u mala. slova koja pripadaju engleskoj abecedi.

const toLower = (str) => str.toLowerCase();
console.log(toLower("KOMbinACIja maLIh i VEliKIH slOvA"));

// pronaci poziciju poslednjeg ramakau stringu

function lastIndex(str) {
  lastPosition = str.lastIndexOf(" ");

  if (lastPosition === -1) {
    return "dati string nema razmaka";
  } else {
    return lastPosition;
  }
}

console.log(lastIndex("Pera ima devojku"));

// drugi

const duzinaPrveReci = (str) => str.indexOf(" ");
console.log(duzinaPrveReci("danas smo bas tihi"));

//za uneti string "a" treba kreirati string "b" koji se sastoji od prve i poslednje reci prvog stringa. npr za string "svuda podji - kuci dodji" treba ispisati "svuda dodji"

const firstAndLast = (A) => {
  let B = "";
  const firstWord = A.slice(0, A.indexOf(" "));
  const lastWord = A.slice(A.lastIndexOf(" "));
  B += `${firstWord} ${lastWord}`;
  return B;
};
console.log(firstAndLast("svuda podji, kuci dodji"));

// substr za domaci
