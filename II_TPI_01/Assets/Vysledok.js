function sucetCiselvDatumeNarodenia() {
    // Try premenné pre deň, mesiac a rok narodenia
    var den = 29;
    var mesiac = 7;
    var rok = 2006;

    // Vypočítaj súčet
    var sucet = den + mesiac + rok;

    return sucet;
}

// Vypíše súčet dňa, mesiaca a roku narodenia
console.log(sucetCiselvDatumeNarodenia());