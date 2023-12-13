//dom elements
const display = document.querySelector('.display')
const clear = document.querySelector('.clear');
const buttonContainer = document.querySelector('.bContainer');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');

let previousValue = '';
let currentValue = '';

let num1 = '';
let num2 = '';


operands.forEach((operand)=>{
    operand.addEventListener('click', ()=>{
        display.textContent += operand.value;
        currentValue = display.innerText;
    })
})

operators.forEach((operator)=>{
    operator.addEventListener('click', (e)=>{
        display.textContent += e.target.value;
        currentValue = screen.innerText;
    })
})
equal.addEventListener('click', ()=>{
    let x = eval('(' + display.textContent + ')')
    display.textContent = x;
})


clear.addEventListener('click', ()=>{
    display.textContent = '';
});


//functions 
        //main operate function
    function operate(){
        let num1 = parseInt(num1);
        let num2 = parseInt(num2);
        if(operators === '+'){
            add(a,b);
        }
        if(operators === '-'){
            substract(a,b);
        }
        if(operators === '*'){
            multiply(a,b);
        }
        if(operators === '/'){
            divide(a,b);
        }
        if(operators == 'v'){
            rootSquare(a)
        }
        function add(a,b){return a + b}
        function substract(a,b){return a - b}
        function multiply(a,b){return a * b}
        function divide(a,b){return a / b}
        function rootSquare(a){return Math.sqrt(a)}
    }