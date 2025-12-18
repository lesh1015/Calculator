let display = document.getElementById('result');
let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(op) {
    operator = op;
    operand1 = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
    display.value = '';
}

function calculateResult() {
    operand2 = currentInput;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
    }
    display.value = result;
    currentInput = result;
}