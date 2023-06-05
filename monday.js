// ARAYS

// Crie um array.
const lista = ['gui', 'flora', 'C3PO']

// Acesse um item 
console.log(lista[1])

// Conte quantos elementos há
console.log(lista.length);


// Altere um item
lista[2] = 'R2D2'
console.log(lista)

// +1 item ao final da lista
lista.push('C3PO')

// -1 item ao final da lista
lista.pop()

// +1 item ao inicio 
lista.unshift('Julia')
console.log(lista)

//-1 item ao inicio
lista.shift()

// remover item sem alterar os indices 
delete lista[2]
console.log(lista)

// pegando indices desejados 
console.log(lista.slice(1, 2));




// FUNCTIONS

// crie um método 
const caneca = {
    cor: 'azul',
    quebrarCaneca(){
        return 'Você pega a caneca e joga ela no chão. Ela quebrou.'
    }
}

console.log(caneca.quebrarCaneca())


// crie uma function declaration
function sayHi(){
    return 'Hi'
}

// arrow function
const sayHello = name =>{
    return `Hello, ${name}`
}
console.log(sayHello('gui'));

// IIFE (Imeadiatly invoked function expression)
(name =>{
    console.log(`Olá, ${name}`)
}) ()