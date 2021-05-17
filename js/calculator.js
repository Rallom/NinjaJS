let input = document.getElementById("calculatorInput");
let newNumber = 0;
let operator
let resultNumber = 0;
let previousNumber = 0


function plus() {
    getNumberAndClearInput()
    operator = '+'
} 

function minus() {
    getNumberAndClearInput()
    operator = '-'
} 

function multiplication() {
    getNumberAndClearInput()
    operator = '*'
} 

function division() {
    getNumberAndClearInput()
    operator = '/'
} 

function getNumberAndClearInput(){
    previousNumber = +input.value
    input.value = 0
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
