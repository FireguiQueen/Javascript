// Calculadora de IMC pura, sem o javascript.


function whatsMyIMC(yourWeight, yourHeight){
    return calcIMC(yourWeight, yourHeight);
    
} 

function calcIMC(weight, height){
    const imc = weight / (height**2);
    return imc
}



console.log(whatsMyIMC(67, 1.75));