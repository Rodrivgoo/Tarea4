const buttonNumber = document.getElementsByName("data-number");
const buttonOperation = document.getElementsByName("data-operation")
const buttonEqual = document.getElementById("data-equal")
const buttonClear = document.getElementById("data-clear")
var result = document.getElementById("result");
var actualOperation = '';
var previousOperation = '';
var operation = undefined;

buttonNumber.forEach(function(button){
    button.addEventListener('click', function(){
        addNumber(button.innerText);
    })
});

buttonOperation.forEach(function(button){
    button.addEventListener('click', function(){
        selectOperation(button.innerText)
    })
});

function calculate(){
    var calculation;
    const previous = parseFloat(previousOperation);
    const actual = parseFloat(actualOperation);
    if(isNaN(previous) || isNaN(actual)) return;
    switch(operation){
        case '+':
            calculation = previous + actual;
            break;
        case '-':
            calculation = previous - actual;
            break;
        case 'x':
            calculation = previous * actual;
            break;
        case '/':
            calculation = previous / actual;
            break;
        default:
            return;
    }
    actualOperation = calculation;
    operation = undefined;
    previousOperation = '';
}

buttonEqual.addEventListener('click', function(){
    calculate();
    updateDisplay();
});

buttonClear.addEventListener('click', function(){
    clear();
    updateDisplay();
});

function selectOperation(op){
    if(actualOperation === '') return;
    if(previousOperation !== ''){
        calculate()
    }
    operation = op.toString();
    previousOperation = actualOperation;
    actualOperation = '';
}

function addNumber(num){
    actualOperation = actualOperation.toString() + num.toString();
    updateDisplay();
}

function clear(){
    actualOperation = '';
    previousOperation = '';
    operation = undefined;
}

function updateDisplay(){
    result.value = actualOperation;
}

clear();

