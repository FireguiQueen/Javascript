//                                  ARREDONDANDO VALORES
// Podemos imaginar que "toFixed" significar "fixar". Ou seja, ficar um número de casas decimais.
const num1 = 3.14159265
console.log(num1.toFixed(2)) // dentro dos parentesis colacamos quantas casas queremos que apareça


//                              VERIFICANDO SE O NÚMERO É INTEIRO
// Acessamos o objeto "number", depois acessamos o método "isInteger" e colocamos qual valor
// queremos saber se é inteiro ou não. 
const num2 = 7
console.log(Number.isInteger(num2));



//                              VERIFICANDO SE O VALOR É NaN
// Acessamos o objeto "number", depois acessamos o método "isNaN" e colocamos qual valor
// queremos saber se é 'not a number' ou não.
const num3 = 7 * 'oi'
console.log(Number.isNaN(num3))


