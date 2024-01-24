//Za uneti string A, treba izdvojiti podstring B, koji počinje od unete pozicije N i ima M znakova. Npr. za string 'Pera ima devojku', N=6 i M=7, dobija se B='ima dev'

function izdvojiPodstring(A, N, M) {
  if (N < 0 || N >= A.length || M <= 0) {
    return "Pogrešni parametri";
  }

  var podstringB = A.substr(N, M);
  return podstringB;
}

var stringA = "pera ima devojku";
var brojN = 5;
var brojM = 7;

var rezultat = izdvojiPodstring(stringA, brojN, brojM);
console.log("Rezultat:", rezultat);

// 2.	Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

const pera = "demir";

function zamena(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.length % 2 !== 0 && i === str.length - 1) {
      newStr += str[i];
    } else if (i % 2 === 0) {
      newStr += str[i + 1];
    } else if (i % 2 !== 0) {
      newStr += str[i - 1];
    }
  }
  return newStr;
}

console.log(epar);
