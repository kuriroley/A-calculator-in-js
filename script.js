//variables... probably to use later
let displayValue = 0;
let value1 = 0;
let value2 = 0;
let operator = '';

//dom elements
const display = document.querySelector('.display')
const clearButton = document.querySelector('.clear');
const buttonContainer = document.querySelector('.buttons-container');
const numberButtons = document.querySelectorAll('.number');

//event listeners

//using event delegation for buttons
buttonContainer.addEventListener('click', (e)=>{
    if(e.target && e.target.matches == 'button.number'){
        console.log('number clicked');
    }
})

function doSomething(){
    alert('aaaa');
}


//events for number buttons



//for clearing button
clearButton.addEventListener('click',()=>{
    display.value= '';
});


















// functions for calculator

// function add(a,b){
//     return a + b;
// }
// function substract(a,b){
//     return a - b;
// }
// function multiply(a,b){
//     return a * b;
// }
// function divide(a,b){
//     return a / b;
// }
// function rootSquare(a){
//     return Math.sqrt(a);
// }

//what if I pass this function as a high-order function?

// function operate(a,operator,b){
//     if(operator == '+'){
//         return add(a,b);
//     }
//     if(operator == '-'){
//         return substract(a,b);
//     }
//     if(operator == '*'){
//         return multiply(a,b);
//     }
//     if(operator == '/'){
//         return divide(a,b);
//     }
//     if(operator == 'v'){
//         return rootSquare(a)
//     }
// }
