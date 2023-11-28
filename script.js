//variables... probably to use later
let displayValue = 0;
let value1 = 0;
let value2 = 0;
let operator = '';

//dom elements
const display = document.querySelector('.display')
const clearButton = document.querySelector('.clear');
const numbersButton = document.querySelector('.number');

clearButton.addEventListener('click',()=>{
    display.value= '';
    display.textContent = 'borrado'
})

// numbersButton.addEventListener('click', ()=>{
//     let numberValue = numbersButton.value;
//     numberValue.foreach((number)=>{
//         display.
//     })

// })













// functions for calculator

function add(a,b){
    return a + b;
}
function substract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
function rootSquare(a){
    return Math.sqrt(a);
}

//what if I pass this function as a high-order function?

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
