console.log("ee");
// ekstraktovanje na tri nacina

// charAt(position)
// charcodeAt(position)
// pristupanje pomocu []

const recenica = "jos max 10 dana";
console.log(recenica.charAt(5));
console.log(recenica.charCodeAt(5));
console.log(recenica[5]);

// ako karakter sa odredjenom pozicijom ne postoji, charAt vraca prazan string, dok string[*] od tog neceg vraca undefined

// postoji nekoliko search metoda u javascriptu:
// indexOf() metoda vraca indeks odnosno poziciju poslatog argumenta

console.log(recenica.indexOf("max"));

// ako trazena vrednost ne postoji, pozicija koju doiamo iznosi -1
console.log(recenica.indexOf("skola"));

// indexOf metoda prihvata drugi argument. on predstavlja startnu poziciju za trazenje odredjene vrednosti

console.log(recenica.indexOf("max", 7));

// lastindexOf() metoda vraca poslednju poziciju poslatog argumenta

console.log(recenica.lastIndexOf("a"));

// search() metoda vraca index (poziciju) poslatog argumenta

console.log(recenica.search("max", 7));
console.log(recenica.search("1"));

// drugi argument nema smisla

console.log(recenica.search("max", 7));
