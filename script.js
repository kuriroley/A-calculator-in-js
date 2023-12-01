//dom elements
const display = document.querySelector('.display')
const clearButton = document.querySelector('.clear');
const buttonContainer = document.querySelector('.buttons-container');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');

//variables... probably to use later



//event listeners
// functions to populate display

//function for getting the first operand;


//for getting the first
operands.forEach((operand)=>{
    let displayValue = display.textContent;
    let operand1;
    let operand2;
    let operator;
    operand.addEventListener('click', (e)=>{
        operand1 += e.target.value;
        display.textContent = operand1;
    });


    operand.addEventListener('click', (e)=>{
        operand2 += e.target.value;
        display.textContent = operand2;
    });

    operators.forEach((operator)=>{
        operator.addEventListener('click', (e)=>{
            if(operator.value == '+'){
                display.textContent =+ add(2,3);
            }
        })
    })
    clearButton.addEventListener('click', ()=>{
        display.textContent = displayValue;
    })
})


//first forEach and then the eventlistener 


//functions 
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
        function add(a,b){return a + b}
        function substract(a,b){return a - b}
        function multiply(a,b){return a * b}
        function divide(a,b){return a / b}
        function rootSquare(a){return Math.sqrt(a)}
    }