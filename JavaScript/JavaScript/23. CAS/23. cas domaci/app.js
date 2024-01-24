// Domaci zadaci:
// 1.	Iz unetog stringa treba izdvojiti N znakova sa leve strane. Npr. za string 'Pera ima devojku' i N=6, dobija se 'Pera i'. Ako je N veće od dužine stringa, kao rezultat se dobija ceo string.

function levaStrana(str, N) {
  if (N >= str.length) {
    return str;
  } else {
    return str.slice(0, N);
  }
}

let string = "pera ima devojku";
let N = 6;
let rezultat = levaStrana(string, N);

console.log(rezultat);

// 2.	Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.

function desnaStrana(str, N) {
  if (N >= str.length) {
    return str;
  } else {
    var desnihN = str.slice(-N);
    return desnihN;
  }
}

var rezultat1 = desnaStrana("Pera ima devojku", 8);
console.log(rezultat1);
