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
        case '+': result = add(a, b); break;
        case '-': result = substract(a, b); break;
        case '*': result = multiply(a, b); break;
        case '/': result = divide(a, b);
    }
    operand = 'a';
}

function updateDisplay(content) {
    /* console.log("updating display");
    if (result === '') {
        display.textContent = a + " " + operator + " " + b;
    } else {
        display.textContent = a + " " + operator + " " + b + " = " + result;
    } */
    display.textContent = content + " |a=" + a + " | b=" + b + 
        "| otor=" + operator + " |orand=" + operand + "|res=" + result;
}

function clear() {
    console.log("clearing");
    display.textContent = "";
    a = '';
    b = '';
    operator = '';
    result = '';
    operand = 'a';
    updateDisplay('');
}


let a = '';
let b = '';
let operator = '';
let result = '';
let operand = 'a';
let lastKey = '';
const display = document.querySelector('.display');

const buttonsContainer = document.querySelector('.buttonsContainer');
buttonsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('digitContainer')) {
        if (operand === 'a') {
            a += e.target.dataset.symbol;
            updateDisplay(a);
        } else {
            b += e.target.dataset.symbol;
            updateDisplay(b);
        }
        lastKey = 'digit';
    } else if (e.target.classList.contains("operator")) {        
        if (b !== '') {
            operate(parseInt(a), parseInt(b), operator);
            a = result;
            b = '';
            operand = 'b';
            updateDisplay(result);
            switch (e.target.id) {
                case 'add': 
                    operator = '+'; 
                    break;
                case 'substract': 
                    operator = '-';
                    break;
                case 'multiply': 
                    operator = '*';
                    break;
                case 'divide': 
                    operator = '/';
                    break;
            } 
        } else {
            switch (e.target.id) {
                case 'add': 
                    operator = '+'; 
                    break;
                case 'substract': 
                    operator = '-';
                    break;
                case 'multiply': 
                    operator = '*';
                    break;
                case 'divide': 
                    operator = '/';
                    break;
            }
            operand = 'b';
        }
        lastKey = 'operator';
    } else {
        switch (e.target.id) {
            // what if a digit is pressed after a calculate press?
            // we should clear everything and start fresh
            // but if an operator is pressed after calculate then we use the result
            // maybe store lastPressedKey in a variable (digit, operator, calc, clear)
            case 'calculate': 
                operate(parseInt(a), parseInt(b), operator);
                updateDisplay(result);
                a = result;
                b = '';
                result = '';
                operator = '';
                operand = 'b';              
                lastKey = 'calculate';
                break;
            case 'clear': 
                clear();  
                break;
        }
    }
});

