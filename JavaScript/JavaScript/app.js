naslov = document.getElementById("naslov");
naslov.innerHTML = "Naslov ispisan preko Java Scripta";
naslov.style = "color: pink; font-size: 42px";

//TIPOVIPODATAKA//

// Da bismo znali tip promenljive u JavaScriptu koristimo typeof operator.

//Tipove podataka delimo na:
// 1. Primitivni tipovi podataka (vrednosni)

// 2. Neprimitivni ili referentni tipovi podataka

// 1.1. Stringovi - Niz karaktera koji je zapisan pod navodnicima. Obicnim ili duplim.
console.log("ovo je nas prvi string.");
console.log(typeof "ovo je nas prvi string.");
// 1.2. Number - Predstavlja broj i on moze biti zapisan sa ili bez decimalnog zareza.
console.log(25);
console.log(typeof 25);
// 1.3. BigInt - Brojevi koji prelaze granice obicnih brojeva.
console.log(BigInt(12345678987654321234567234567890098765432234567876543289));
console.log(typeof BigInt(12345678987654321234567890098765432234567876543289));
// 1.4. Boolean - Logicki entitet koji ima dve vrednosti: true i false.

console.log(true);
console.log(typeof true);

//1.5. Undefined - Promenljiva koja je definisana, ali joj nije dodeljena vrednost ima vrednost undefined i tip takodje undefined

var a;
console.log(a);
console.log(typeof a);

//1.6. Null - Predstavlja nekorektnu vrednost ili vrednost koja (za sada) ne postoji
var a = null;
console.log(a);
console.log(typeof a);

//1.7. Symbol - tip podatka za skladistenje anonimnih i unikatnih vrednosti.
b = Symbol("Demir");
console.log(b);
console.log(typeof b);
// Primitivni tipovi podataka mogu skladistiti samo jednu vrednost.

//2. NEPRIMITIVNI (referentni)

// Za skladistenje vise vrednosti ili kompleksnih vrednosti se koriste neprimitivni tipovi podataka

// Svaka promenljiva koja nije primitivnog tipa je tipa object u JavaScriptu.

//Objekti se koriste za skladistenje neke kolekcije podataka.
//2.1. Arary (niz) - predstavlja strukturu podataka za skladistenje vise vrednosti.
// Elementi niza ne moraju biti istog tipa.
nasBrat = ["Demir", 18, true];
console.log(nasBrat);

//2.2. Object (objekat) - prestavlja strukturu podataka za skladistenje vise vrednosti. Objekti se zapisuju u key:value (name:value) parovima.
obj = {
  ime: "Demir",
  brojGodina: "18",
  punoletan: true,
};
console.log(obj);

//2.3. Set - struktura podataka za skladistenje vise vrednosti. Duplikati nisu dozvoljeni.
set = new Set(["Kanita", 19, true]);
console.log(set);
console.log(typeof set);

//2.4. Map - predstavlja strukturu podataka za skladistenje vise vrednosti. Slicni su objektima.

map = new Map([
  ["ime", "Kanita"],
  ["brojGodina", 19],
  ["punoletnost", true],
]);
console.log(map);
console.log(typeof map);
