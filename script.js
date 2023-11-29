//variables... probably to use later
let operand1 = 0;
let operand2 = 0;
let operator = '';

//functions 
    //operations
function add(a,b){return a + b}
function substract(a,b){return a - b}
function multiply(a,b){return a * b}
function divide(a,b){return a / b}
function rootSquare(a){return Math.sqrt(a)}

    //main operate function
function operate(a,operator,b){
    if(operator == '+'){
        return add(a,b);
    }
    if(operator == '-'){
        return substract(a,b);
    }
    if(operator == '*'){
        return multiply(a,b);
    }
    if(operator == '/'){
        return divide(a,b);
    }
    if(operator == 'v'){
        return rootSquare(a)
    }
}
//dom elements
const display = document.querySelector('.display')
const clearButton = document.querySelector('.clear');
const buttonContainer = document.querySelector('.buttons-container');
const operand = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const log = document.querySelector('.log');


//event listeners
//first forEach and then the eventlistener 
operand.forEach((number)=>{
    number.addEventListener('click', ()=>{
        display.value = number.value

    })
});
//for operators (test)
operators.forEach((operator)=>{
    let op = '';
    operator.addEventListener('click',()=>{
        if(operator.value == '='){
            op = operator.value;
        }
        if(operator.value == '+'){
            op = operator.value;
        }
        if(operator.value == '*'){
            op = operator.value;
        }
        if(operator.value == '-'){
            op = operator.value;
        }
    })
})







//using event delegation for buttons
//could that work?


//for clearing button
clearButton.addEventListener('click',()=>{
    display.value= '';
});










//for a history
log.textContent = 'History tracker: ////'








// functions for calculator



//what if I pass this function as a high-order function?

