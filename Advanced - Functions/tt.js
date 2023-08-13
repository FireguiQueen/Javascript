function somarNumeros(x,y){
    return x + y;
}
function multiplicarNumeros(x,y){
    return x*y;
}
function escolherOperacao(x,y, operacao){
    return operacao(x,y);
}

console.log(escolherOperacao(4,2, somarNumeros))