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

function updateDisplay() {
    console.log("updating display");
    display.textContent = a + " " + operator + " " + b;

}

function clear() {
    console.log("clearing");
    display.textContent = "";
    a = 'x';
    b = 'x';
    operator = 'x';
}


let a = 'x';
let b = 'x';
let operator = 'x';
const display = document.querySelector('.display');
clear();

const buttonsContainer = document.querySelector('.buttonsContainer');
buttonsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('digitContainer')) {
        if (a === 'x') {
            a = parseInt(e.target.dataset.symbol);
        } else {
            b = parseInt(e.target.dataset.symbol);
        }
        console.log("digit pressed");
        updateDisplay();
    } else {
        switch (e.target.id) {
            case 'add': operator = '+';
            case 'substract': operator = '-';
            case 'multiply': operator = '*';
            case 'divide': operator = '/';
            case 'calculate': operate(a, b, operator);
            case 'clear': clear();
        }
        updateDisplay();
        console.log("nondigit pressed");
    }
});

