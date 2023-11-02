// Calculadora de IMC pura, sem o javascript.
function whatsMyIMC(yourWeight, yourHeight){
    return calcIMC(yourWeight, yourHeight);
} 

// Funcão criada exclusivamente para calcular seu IMC
function calcIMC(weight, height){
    const imc = weight / (height**2);
    return Math.round(imc);
}

console.log(whatsMyIMC(69, 1.72));