/*MojaPrvaFukcia(); 
MojaPrvaFukciaSParametrom("toto je vstupny parameter");

function MojaPrvaFukcia() {
    alert("toto je moja prva funkcia");
    console.log("TOTO JE MOJA PRVA FUNKCIA!!!");
}

function MojaPrvaFukciaSParametrom (lokalnaPremenna) {
    console.log(lokalnaPremenna);
}

function mojaToUpperCase (vstupnyText) {
    let upravenyText = cstupnyText.toUpperCase();
    console.log(upravenyText);
}
*/
let ulica = 'Sasinková';
let mesto = 'Kopčany';
let PSČ = '908 48';
let mojaAdresa =  ulica + " " + mesto + " " + PSČ;

function toUppercase(adresa) {
    return adresa.toUpperCase();
}

function toLowercase(adresa) {
    return adresa.toLowerCase();
}

function getSubstring(adresa, startIndex, length) {
    return adresa.substring(startIndex, startIndex + length);
}

function repeatAddress(adresa, repeatCount) {
    return adresa.repeat(repeatCount);
}

function replaceSpaceWithDash(adresa) {
    return adresa.replace(/\s/g, '-');
}
function endsWith(adresa, suffix) {
    return adresa.endsWith(suffix);
}
// Použitie funkcií:
let adresaUpperCase = toUppercase(mojaAdresa);
let adresaLowerCase = toLowercase(mojaAdresa);
let castAdresy = getSubstring(mojaAdresa, 0, 10); // Získajte prvých 10 znakov adresy
let opakovanaAdresa = repeatAddress(mojaAdresa, 3); // Opakujte adresu trikrát
let adresaSoZmenenymiMedzerami = replaceSpaceWithDash(mojaAdresa); // Nahraďte medzery pomlčkami
let koniecAdresy = endsWith(mojaAdresa, '48'); // Zistí, či adresa končí číslom 48

console.log(adresaUpperCase);
console.log(adresaLowerCase);
console.log(castAdresy);
console.log(opakovanaAdresa);
console.log(adresaSoZmenenymiMedzerami);
console.log(koniecAdresy);

let originalString = "hello";
let result = originalString.toUpperCase().repeat(2);
console.log(result);

