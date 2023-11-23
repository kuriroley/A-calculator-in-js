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

//what if I pass this function as a high-order function?

function operation(a,b,operator){
    if(operator == '+'){
        return add(a,b);
    }
    if(operator == '-'){
        return substract(a,b);
    }
}

