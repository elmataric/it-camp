// Postoji nekoliko nacina za prikazivanje podataka u JavaScriptu:
// 1. innerHTML

paragraf = document.getElementById("paragraf");
paragraf.innerHTML = "Ovo je paragraf.";

// 2. document.write() - koristi se samo za testiranje

// 3. alert()

// alert("Upozorenje korisniku");

// 4. console.log()

console.log(paragraf.innerHTML);

// JavaScript name mora pocinjati sa:
// - Slovom (velikim ili malim) (A-Z ili a-z)
// - (dolar znakom)
// - donjom crtom

// promenljive od dve ili vise reci:
// nas brat = "Demir" nije ispravan nacin
// NasBrat = "Demir" lower camel case
nasBrat = "Demir"; //upper camel case

// Napomena - u nazivu promenjive, varijable,  se moze naci broj ali ona ne sme pocinjati brojem

amir = "Amir je odlican ucenik";
Amir = "Amir je dovoljan ucenik";

// JavaScript je case sensitive (razlikuje velika i mala sloova)

console.log(Amir);

// Postoje 4 nacina da deklarisemo promenljivu u JavaScriptu:
// 1. koriscenjem kljucne reci (keyword), rezervisana rec
// 1. var - prvenstveno koriscen na ranijim browserima
// var prijatno = "prijatno"; primer istovremenog deklarisanja i inicijalizovanja promenljive
var prijatno; //deklarisanje promenljive
prijatno = "prijatno"; //inicijalizacija deklarisane promenljive prijatno
console.log(prijatno);
console.log(typeof prijatno);
// 2. koriscenjem let keyword (rezervisana rec) - koristimo kad je vrednost promenljive sklona menjanju
// let brojGodina - 25 //primer istovremenog deklarisanja i inicijalizovanja promenljive pomocu let.
let brojGodina; //deklarisanje
brojGodina = 27; // inicijalizacija
// 3. koristenjem const keyword (rezervisane reci) - koristimo za vrednosti koje se ne menjaju.
// koristenjem const nije dozvoljeno posebno inicijalizovanje vec mora uz deklaraciju
const ime = "Elma"; //istovremeno deklarisanje i inicijalizovanje

// 4. koriscenjem niceg.
mervan = "Mervan";

// napomena - promenljive odnosno varijable su kontejneri za skladistenje vrednosti.
