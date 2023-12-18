// Promenljive definisane preko var keyword mozemo ponovo deklarisati, odnosno izvrsiti redeklaraciju, kao i reinicijalizaciju, odnosno novo dodeljivanje vrednosti.
var x = 10;
console.log(x);
x = 14;
console.log(x);
var x = 15;
console.log(x);
// let i const nam obezbedjuju Block Scope.

// Promenljive definisane preko let keyword mozemo ponovo deklarisati, ako se radi o drugom prostoru, odnosno izvrsiti redeklaraciju, dok reinicijalizaciju, odnosno novo dodeljivanje vrednosti mozemo izvrsiti i u istom prostoru.
let y = 3;
console.log(y);

y = 6;
console.log(y);
// let y = 7 nije dozvoljeno deklarisanje u istom prostoru

{
  //   console.log(y); y se prepoznaje u global scope
  let y = 20;
  console.log(y);
}
console.log(y);

//promenljive definiane preko const mozemo ponovo deklarisati  ako s radi o drugom prostoru.

const e = 5;
console.log(e);
// nije dzvoljeno redeklarisanje u istom prostoru

{
  const e = 10;
  console.log(e);
}
console.log(e);
