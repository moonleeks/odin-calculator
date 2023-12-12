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
    display.textContent = content;
/*     display.textContent = content + " |a=" + a + " | b=" + b + 
        "| otor=" + operator + " |orand=" + operand + "|res=" + result; */
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


// if a digit is pressed after a calculate press we should clear
// everything and start fresh. But if an operator is pressed after
// calculate then we use the result
const buttonsContainer = document.querySelector('.buttonsContainer');
buttonsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('digitContainer')) {
        if (lastKey === 'calculate') { //when calculate press if followd by digit press
            clear();
        }
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
            updateDisplay(result);
            }
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
        lastKey = 'operator';
    } else {
        switch (e.target.id) {
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

