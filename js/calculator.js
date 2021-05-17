let input = document.getElementById("calculatorInput");
let newNumber = 0;
let operator
let resultNumber = 0;
let previousNumber = 0

function calculate(sym) {
    previousNumber = +input.value
    input.value = 0
    currentOperator = sym
} 

function getResult() {
    newNumber = +input.value
    if (currentOperator == '+') {
        resultNumber = previousNumber + newNumber
    } else if (currentOperator == '-') {
        resultNumber = previousNumber - newNumber
    } else if (currentOperator == '*') {
        resultNumber = newNumber * +previousNumber
    } else if (currentOperator == '/') {
        resultNumber = previousNumber / newNumber
    }
    input.value = resultNumber
} 
