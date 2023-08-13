// Utilize callbacks para determinar operações matemáticas usando X e Y. 
function sum(x,y){
    return x + y;
}
function multiply(x,y){
    return x * y
}
function subtract(x,y){
    return x - y;
}
function devide(x, y){
    return x / y;
}
function mathOperation(x,y, operacao){
    console.log(operacao(x, y))
}

mathOperation(562, 12, devide)