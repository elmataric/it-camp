// math ojekat u jsima mnogo metoda za rad sa brojevima
// pored metoda, postoje i matematickw konstante
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
// postoje 4 metode za zaokruzivanje brojeva u js
// math.round(x)
const x = 2.51;
const y = Math.round(x);
console.log(y);

// math.ceil(x)
const a = 2.31;
const b = Math.ceil(a);
console.log(b);
console.log(Math.ceil(-2.31));

// math.floor(x)
const e = 4.5;
const n = Math.floor(e);
console.log(n);

// math.trunc(x)
const q = 2.31;
const z = Math.trunc(q);
console.log(z);

// math.sign() metoda vraca -1 ili 0 ili 1
console.log(Math.sign(-222));
// 1 - pozitivan, -1 - negativan, 0 - 0

// math.pow(x, y) metoda vraca x na y (x**y)
console.log(Math.pow(2, 3));

// math.sqrt(x) metoda vraca kvadratni koren broja x
console.log(Math.sqrt(16));

// math.abs(x) metoda vraca apsolutnu vrednost broja x
console.log(Math.abs(-17));

// math.min(x), (math.max(x)) metoda vraca najmanju, odnosno najvecu vrednost iz poslate liste brojeva

console.log(Math.min(2, -90, 88, 101));
console.log(Math.max(2, -90, 88, 101));

// math.random() metoda vraca random broj izmedju 0 (ukljucujuci i 0) i 1 (nije ukljuceno)

console.log(Math.random());

// pomocu math.random() metode dobiti broj izmedju 1 i 5
console.log(Math.ceil(Math.random() * 5));
// pomocu math.random() metode dobiti broj izmedju 50 i 100
console.log(Math.ceil(Math.random() * 50) + 50);

//  split() metoda pretvara string u niz

const recenica = "kanita je kasnila, sto je inace njeno drugo ime";
console.log(recenica.split());
console.log(recenica.split(","));
console.log(recenica.split("je"));

//

function decimals(num1, num2) {
  return num1.toFixed(num2);
}
console.log(decimals(2.7646, 1));

//
const time = (sec) => {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec - hours * 3600) / 60);
  const seconds = Math.floor(sec - (hours * 3600 + minutes * 60));
  return `${hours}  \n${minutes} \n${seconds}`;
};

console.log(time(3670));
// NODE JE OKRUZENJE ZA POKRETANJE JS
// end operator (&&) vraca prvu false ili ako su sve true onda poslednju vraca
// || (or) operator vraca prvu true vrednost
