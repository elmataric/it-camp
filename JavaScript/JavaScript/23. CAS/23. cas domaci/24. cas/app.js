// negde cemo naici da je javascript interpreterski jeziku, medjutim, to nije u potpunosti tacno.
// naime, u pozadini JS masina kompajlira skriptu (fajl) pre samog izvrsavanja

var x;
x = 15;

let y;
y = 10;

const z = 5;

w = 20;
console.log(w);

// hoisting predstavlja izvlacenje deklaracija na vrhu skriptevkako bi se oe mogle koristiti

prom = 5;
var prom;

console.log(prom);

///  napravi funkciju koja uzima neki trocifren broji za argument vraca zbir cifara tog broja

function trocifrenBroj(broj) {
  broj.toString();
}

//unosi se string a i znak z. kreirati novi string b kojise dobija tako sto se iz unetog stringa izbacuje svaka pojava znaka z

function second(A, Z) {
  const B = A.replace(Z, "");
  return B;
}
console.log(second("madagaskar", /a/g));
