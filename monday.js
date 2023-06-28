// ARAYS


// Crie um array e coloque um ou mais elementos.
const list = ['Julia', 'Nicolas']

// Acesse um item 
console.log(list[0])


// Conte quantos elementos há
console.log(list.length)

// Altere um elemento
list[0] = 'Amanda'
console.log(list)

// +1 item ao final da lista
list.push('Olavo')
console.log(list)

// -1 item ao final da lista
list.pop()

// +1 item ao inicio 
list.unshift('Juju')

//-1 item ao inicio
list.shift()

// remover item sem alterar os indices 
delete list[0]
console.log(list)

// pegando indices desejados 
console.log(list.slice(1))



// FUNCTIONS

// crie um método 
const oi = {

    saudacao(){
        return 'oi!'
    }
}
console.log(oi.saudacao())

// crie uma function declaration
function pessoa(){

}

// arrow function
const pessoa1 = () => {

}

// IIFE (Imeadiatly invoked function expression)
(function(){

})



// Defina valores padrões aos argumentos 
const sum = (x=0, y=0) => x+y;
console.log(sum(23,5))




// verifique se é INT
console.log(Number.isInteger(2)) // true

// arrume as casas decimais
const num = 1.535425
console.log(num.toFixed(0))
console.log(Math.floor(num))

// verifique se é NaN
console.log(Number.isNaN('2'/7 *'a'))

// Arredonde pra cima
console.log(Math.ceil(2.5))

// pra baixo 
console.log(Math.floor(2.1))

// pro número inteiro mais próximo
console.log(Math.round(2.6))

// maior número de uma sequencia
console.log(Math.max(2,525,2352525,35123))

// menor número
console.log(Math.min(4, 14141.0, 141.0, 33))


// OBJECTS

// Crie um objeto
const oi1 = { 

}