let input = document.getElementById("calculatorInput");
let newNumber = 0;
let operator
let resultNumber = 0;
let previousNumber = 0

function operation(sym) {
    previousNumber = +input.value
    input.value = 0
    operator = sym
} 

function getResult() {
    newNumber = +input.value
    if (operator == '+') {
        resultNumber = previousNumber + newNumber
    } else if (operator == '-') {
        resultNumber = previousNumber - newNumber
    } else if (operator == '*') {
        resultNumber = newNumber * +previousNumber
    } else if (operator == '/') {
        resultNumber = previousNumber / newNumber
    }
    input.value = resultNumber
} 