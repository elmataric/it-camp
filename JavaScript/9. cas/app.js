const demir = "demir";
for (let i = 0; i < 10; i++) {
  console.log(demir);
}

for (let i = 1; i <= 10; i++) {
  console.log(i >= 1 && i < 2);
  console.log(i > 2 && i < 5);
  console.log(i > 5 && i <= 10);
}

for (let broj = 1; broj <= 10; broj++) {
  if (broj !== 2 && broj !== 5) {
    console.log(broj);
  }
}

// continue keyword koristimo kada zelimo da preskocimo radnju za tu iteraciju i nastavimo petlju sa narednom iteracijom.

// ispisati sve brojeve od 1 do 10. ako je neki deljiv sa 7 neka se prekine petlja

// break izvrsava prekid petlje, a continue samo preskace naznaceno. ako zelimo da prekinemo izvrsavanje bez nastavka koristimo break.

for (let i = 1; i <= 10; i++) {
  if (i % 7 === 0) {
    break;
  }
  console.log(i);
}
