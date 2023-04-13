/* 
(pessoa) tem (n) anos, pesa (n)kg.
Tem (n) de altura, e seu IMC é de (n).
(pessoa) nasceu em (n) ano.
*/

const date = new Date;

const nome = 'Guilherme Pires';
const altura = '1.74 cm';
const peso = '68kg';
const idade = 17
const anoAtual = date.getFullYear();
let imc = Number(peso.replace('kg','')) / (Number(altura.replace(' cm', ''))**2) // peso / (altura²)

console.log(`
${nome} tem ${idade} anos, pesa ${peso}.
Tem ${altura}, e seu IMC é de ${imc}.
${nome} nasceu em ${anoAtual - idade}

`)

