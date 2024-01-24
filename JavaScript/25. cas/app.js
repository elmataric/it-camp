// unose se dva stringa a i b. kreirati novi kao kombinaciju stringova a i b, tako sto se kombinuju 1. sa 1, 2. sa 2, 3. sa 3... npr za "pera"
// i "sladoled" se dobija "pselradoled"

function zamena(A, B) {
  let C = "";
  let duziString;
  if (A.length > B.length) {
    duziString = A.length;
  } else {
    duziString = B.length;
  }

  for (let i = 0; i < length; i++)
    if (A[i] === undefined) {
      C += B[i];
    } else if (B[i] === undefined) {
      C += A[i];
    } else {
      C += A[i] + B[i];
    }
  return C;
}

console.log(zamena("pera", "sladoled"));

// match metoda za vise pojavljivanja, pozicija indexof

function index(recenica) {
  const dveReci = "ko osvaja";

  const brojPojavljivanja = recenica.includes(dveReci)
    ? recenica.match(/ko osvaja/g).length
    : 0;
  if (!recenica.includes(dveReci)) {
    return "nismo pronasli dati string";
  } else if (brojPojavljivanja > 1) {
    return `pozicija prvog pojavljivanja je: ${recenica.indexOf(dveReci)} /n
   pozicija poslednjeg pojavljivanja je ${recenica.lastIndexOf(dveReci)}. `;
  } else {
    return `pozicija pojavljivanja je: ${recenica.indexOf(dveReci)}`;
  }
}
console.log(index("ko osvaja ligu sampiona ove godine"));
