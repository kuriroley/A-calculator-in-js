//dom elements
const display = document.querySelector('.display')
const clear = document.querySelector('.clear');
const buttonContainer = document.querySelector('.bContainer');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');

let operand1 = '';
let operand2 = '';
let op = '';
let result;

operands.forEach((operand)=>{
    operand.addEventListener('click', (e)=>{
        //using conditionals for storing different values when using 
        //an event listener
        if(op === ''){
          // if the operator is empty add val to operand 1
            operand1 += e.target.value;
            //display value is updated
            display.textContent = operand1;
        } else{
            // else if it is not empty, the value to operand 2 should be stored
          operand2 += e.target.value;
          //display value is updated
          display.textContent = operand2;
        }
    })
})
//keyboard support for operands
window.addEventListener('keydown',(e) =>{
    let keyValue = e.key;
    if((keyValue > -1 && keyValue < 10) || keyValue === '.'){
        if(op === ''){
            // if the operator is empty add val to operand 1
              operand1 += keyValue;
              //display value is updated
              display.textContent = operand1;
          } else{
              // else if it is not empty, the value to operand 2 should be stored
            operand2 += keyValue;
            //display value is updated
            display.textContent = operand2;
          }
    }
})


operators.forEach((operator)=>{
    operator.addEventListener('click', (e)=>{
        //a condition for avoiding using first an operator
        //check if there is not an empty operand
        if(operand1 !== ''){
            op = e.target.value;
            display.textContent = op;
        }
    })
})

equal.addEventListener('click', ()=>{
    //on clicking equal, the operate function begins
    operate(operand1,operand2);
})
//an event for clearing all inside the calculator
clear.addEventListener('click', clearAll);

function clearAll(){
    display.textContent = '';
    display.textContent = '0';
    operand1 = '';
    operand2 = '';
    op = '';
}
function operate(a,b){
    //a condition for making sure that there are no empty values
            if(a !== '' && b !== '' && op !== ''){
        //a is turned into an integer
            a = parseInt(a);
        //b is turned into an integer
            b = parseInt(b);
        //the result value is created
        //comparing if certain operator is op
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
                if(b == 0){
                    alert(`Can't divide by zero. Try again`);
                    document.location.reload();
                } else{
                    result = divide(operand1,operand2);
                }
            }
            if(op == 'v'){
                result = rootSquare(operand1);
            }
            //the display should be cleared

            clearAll();
            //once has been cleared, only the first operand will be shown
            operand1 = result.toString();
            //the result is shown and at the same time the result is taken as the first operand
            display.textContent = result;
        }
        function add(a,b){return a + b}
        function substract(a,b){return a - b}
        function multiply(a,b){return a * b}
        function divide(a,b){return a / b}
        function rootSquare(a){return Math.sqrt(a)}
}