// Escreva uma função que recebe dois números e retorne o maior deles.
function maxNum(x, y){
    return Math.max(x, y)
}
console.log(maxNum(6,4))

// Escreva uma função que possua dois parâmetros: altura e largura. Retorne true se ela estiver em modo paisagem.
const ePaisagem = (height, width) => `Está em modo paisagem? ${width < height}`
console.log(ePaisagem(1,5))


// Escreva uma função que recebe um númmero. Retorne o seguinte.:
// Número é divisível por 3 = Fizz 
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = Retorna ele mesmo
function checkNum(num){
    if(Number.isInteger(num)){
        if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'; 
        if(num % 3 === 0) return 'Fizz';
        if(num % 5 === 0) return 'Buzz';
        return num
    }
    return 'Passe um número como argumento!'
}
console.log(checkNum(''))