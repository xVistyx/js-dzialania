let number1 = 5;
let number2 = 10;

function kalkulator(_par1, _par2) {

    let addition = _par1 + _par2
    let subtraction = _par1 - _par2
    let multiplication = _par1 * _par2

    if (addition >= 0) {

        console.log(`Wynik dodawania wynosi: ${addition}`);
    }
    else {

        console.log("Wynik jest niepoprawny!")
    }

    if (subtraction >= 0) {

        console.log(`Wynik odejmowania wynosi: ${subtraction}`);
    }
    else {

        console.log("Wynik jest niepoprawny!")
    }
    if (multiplication >= 0) {

        console.log(`Wynik mnożenia wynosi: ${multiplication}`);
    }
    else {

        console.log("Wynik jest niepoprawny!")
    }
}

kalkulator(number1, number2);