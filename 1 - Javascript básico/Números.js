//                                  Limitando casas decimais de valores quebrados
// Podemos imaginar que "toFixed" significar "fixar". Ou seja, fixar um número de casas decimais.
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



//***************************************************************** */


//                            Arredondando para baixo (objeto: Math)  
// 'floor()' é usado para arredondar um número para baixo para o próximo número inteiro.
// "Floor" significa "chão/piso". Sendo assim, é como se o número arredondando fosse o "chão" do número original.
const num4 = 7.5
console.log(Math.floor(num4))


//                            Arredondando para cima (objeto: Math)  
// 'ceil()' é usado para arredondar um número para cima para o próximo número inteiro.
// "Ceil" significa "teto". Sendo assim, é como se o número arredondado fosse o teto do número original.
const num5 = 1.3
console.log(Math.ceil(num5))

//                 Arredondando um número quebrado para o número inteiro mais próximo
// 'around()' é usado para arredondando um número quebrado para o número inteiro mais próximo.
// "Around" significa "ao redor". Sendo assim, é como se o número arredondado fosse o número mais próximo do original.
const num6 = 502
console.log(Math.around(num6))


//                               IEEE 754-2008
/*
Em JavaScript (e em muitas outras linguagens de programação), o armazenamento de números em ponto flutuante segue o padrão IEEE 754. Esse padrão define a maneira como os números de ponto flutuante são representados e operados, mas pode resultar em algumas imprecisões devido às limitações de representação.

No caso específico de somar 0.1 e 0.7 em JavaScript, o resultado pode ser impreciso devido à forma como esses números são representados em ponto flutuante. Quando você soma 0.1 e 0.7, o resultado correto é 0.8, mas a representação interna desses números em ponto flutuante pode ser algo como:

0.1 = 0.0001100110011001100110011001100110011001100110011... (repetindo infinitamente)
0.7 = 0.101100110011001100110011001100110011001100110011... (repetindo infinitamente)

Quando você soma esses dois números, o resultado correto seria:
0.1 + 0.7 = 0.8 = 0.1000000000000000055511151231257827021181583404541015625 (em notação científica)

Observe que a representação em ponto flutuante do resultado correto também tem algumas casas decimais extras que se repetem infinitamente.
No entanto, como a representação interna de 0.1 e 0.7 em ponto flutuante é imprecisa, o resultado da soma pode ser algo como:

0.1 + 0.7 = 0.7999999999999999

Isso ocorre porque a soma é realizada com base nas representações internas dos números em ponto flutuante, que têm algumas limitações em relação à precisão. No entanto, observe que esse valor é muito próximo do resultado correto e pode ser arredondado para 0.8 com o uso do método "toFixed" em JavaScript.
*/