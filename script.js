function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+': return add(a, b);
        case '-': return substract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
    }
}

let a = 0;
let b = 0;
let operator = 'x';

