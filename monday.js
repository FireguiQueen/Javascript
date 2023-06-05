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