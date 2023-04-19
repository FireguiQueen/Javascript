// *** ESCOLHA UM NÚMERO E.:
// Mostre a raiz quadrada;
// Se é inteiro ou não;
// Se é NaN ou não;
// Arredonde para baixo;
// Arredonde para cima;
// Deixe apenas duas casas decimais.

const num = 9;

const squareRoot = num ** 0.5;
const itIsInteger = Number.isInteger(num);
console.log(`
Raiz quadrada: ${parseInt(squareRoot)}
Seu número ${itIsInteger? 'é inteiro' : 'não é inteiro'}
${Number.isNaN? 'Seu número não é \'NaN\'' : 'Seu número é \'NaN\''}
Número arredondado para baixo: ${itIsInteger? 'impossível arredondar pois é um número inteiro' : Math.floor(num)}
Número arredondado para cima: ${itIsInteger? 'impossível arredondar pois é um número inteiro' : Math.ceil(num)}
Número com duas casas decimais: ${num.toFixed(2)}

`)


console.log(typeof(2 + 'a2'))