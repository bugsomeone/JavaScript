//alert("Life Is Gud");

let prvaPremena = 3;
const druhaPremena = 7;

//let vysledok = 3 + 7;
let vysledok01 = prvaPremena + druhaPremena;

//alert("3 + 7");
//alert(3 + 7);
//alert("prvaPremena + druhaPremena");
//alert(prvaPremena + druhaPremena);
//alert("vysledok01");
//alert(vysledok01);
//15 + 3 * (4 - 8 / 2);
//150,2 / 8 * (18,3 - 20,1) / 3;
//3**2 + 8 - (31/8);

/**
let a = 15 + 3 * (4 - 8 / 2);
let b = ((150.2 / 8) * (18.3 - 20.1)) / 3;
let c = 3 ** 2 + 8 - 31 / 8;
let prikaldA = "15 + 3 * (4 - 8 / 2)";
let prikaldB = "((150.2 / 8) * (18.3 - 20.1)) / 3";
let prikaldC = "3 ** 2 + 8 - 31 / 8";
alert(prikaldA + " = " + a);
alert(prikaldB + " = " + b);
alert(prikaldC + " = " + c);
*/

let mojVek = 17;
let meno = "Richard";
let priezvisko = "Sedlak";
let mojeMeno = meno + "" + priezvisko;
let ulica = "Sasinková";
let mesto = "Kopčany";
let PSČ = "908 48";
let mojaAdresa = ulica + " " + mesto + " " + PSČ;
let adresaSkoly = "Holíč 908 51; Námestie sv. Martina 5";
/**alert(mojaAdresa);*/

console.log(mojaAdresa.toLowerCase());
console.log(mojaAdresa.toUpperCase());
console.log(mojeMeno.substring(2));
console.log(mojeMeno.repeat(3));
console.log(mojeMeno.replace("Richard", "Radek"));
/**
console.log(mojaAdresa);
console.log('moje meno je vid dalsi riadok');
console.log(mojeMeno);
console.log(console)
console.log(mojeMeno.endsWith('ak'))
console.log(mojeMeno.indexOf('k'))*/

function MojaPrvaFukcia() {
  alert("toto je moja prva funkcia");
  console.log("TOTO JE MOJA PRVA FUNKCIA!!!");
}

