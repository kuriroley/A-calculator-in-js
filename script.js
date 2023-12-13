//dom elements
const display = document.querySelector('.display')
const clear = document.querySelector('.clear');
const buttonContainer = document.querySelector('.bContainer');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');

let previousValue = '';
let currentValue = '';

let operand1 = '';
let operand2 = '';
let op = '';

let disStart = display.textContent;


operands.forEach((operand)=>{
    operand.addEventListener('click', (e)=>{
        if(op === ''){
          operand1 += e.target.value;
          display.textContent = operand1;
        } else{
          operand2 += e.target.value;
          display.textContent = operand2;
        }
        
    })
})

operators.forEach((operator)=>{
    operator.addEventListener('click', (e)=>{
        if(operand1 !== ''){
            op = e.target.value;
            display.textContent = op;
        }
    })
})
equal.addEventListener('click', ()=>{
    operate(operand1,operand2);
})

clear.addEventListener('click', ()=>{
    display.textContent = ''
    operand1 = '';
    operand2 = '';
    op = '';
});


//functions 
        //main operate function
    function operate(a,b){
        a = parseInt(a);
        b = parseInt(b);
        let result;
        if(op === '+'){
            result = add(a,b);
        }
        if(op === '-'){
            result = substract(a,b);
        }
        if(op === '*'){
            result = multiply(a,b);
        }
        if(op === '/'){
            result = divide(operand1,operand2);
        }
        if(op == 'v'){
            result = rootSquare(operand1);
        }
        display.textContent = result;
        function add(a,b){return a + b}
        function substract(a,b){return a - b}
        function multiply(a,b){return a * b}
        function divide(a,b){return a / b}
        function rootSquare(a){return Math.sqrt(a)}
    }