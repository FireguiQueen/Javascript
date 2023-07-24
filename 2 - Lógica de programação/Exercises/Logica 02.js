// Exercício 1: Soma de elementos em um array
// Escreva uma função que recebe um array de números como parâmetro e retorna a soma de todos os elementos no array.
function sumElements(array){
    let total = 0;
    for(let elemento of array){
        if(typeof elemento === 'number' ){
            total += elemento
        } else{
            continue;
        }
    }
    return `Soma feita apenas com números do array: ${total}`;
}
console.log(sumElements([4]))


// Exercício 2: Encontre o maior elemento em um array
// Escreva uma função que recebe um array de números como parâmetro e retorna o maior elemento presente no array.
function maxNum(array){
    array.sort().reverse()
    return array[0]

    // or
    // return Math.max(...array)
}
console.log(maxNum([1,424,52]))

// Exercício 3: Filtrar números pares
// Escreva uma função que recebe um array de números como parâmetro e retorna um novo array contendo apenas os números pares do array original.
function apenasPares(array){
    const pares = [];
    
    for(let numero of array){
        if(numero % 2 === 0){
            pares.push(numero)
        } else{
            continue;
        }
    }
    return pares.sort()
} 
console.log(apenasPares([4,41,42,13,14]))


// Exercício 4: Verificar se uma palavra é um palíndromo
// Escreva uma função que recebe uma string como parâmetro e retorna true se a string for um palíndromo (ou seja, se ela permanecer igual quando lida de trás para frente), e false caso contrário.
function palidromo(str){
    let newArray;
    for(let i of str.split('').reverse()){
        newArray += i;
    }
    const checkPalidromo = str === newArray? 'Esta palavra é um palidromo' : 'Não é um palidromo'
    return checkPalidromo;
}
console.log(palidromo('Bacana'))



// Exercício 5: Fatorial
// Escreva uma função que recebe um número inteiro como parâmetro e retorna o fatorial desse número. O fatorial de um número é o produto de todos os inteiros positivos menores ou iguais a ele.
function fatorial(num){
    let fatorial = 1;
    
    for(let i = num; i >= 1; i--){
        fatorial *= i;
    }
    return fatorial
}
console.log(fatorial(10))


// Exercício 6: Contagem de vogais
// Escreva uma função que recebe uma string como parâmetro e retorna o número de vogais presentes nessa string.

// Exercício 7: Média e desvio padrão
// Escreva uma função que recebe um array de números como parâmetro e retorna tanto a média quanto o desvio padrão dos elementos no array.

// Exercício 8: Verificar número primo
// Escreva uma função que recebe um número inteiro como parâmetro e retorna true se o número for primo, e false caso contrário. Um número primo é aquele que é maior que 1 e possui apenas dois divisores, 1 e ele mesmo.

// Exercício 9: Fibonacci
// Escreva uma função que recebe um número inteiro n como parâmetro e retorna um array contendo os n primeiros números da sequência de Fibonacci.

// Exercício 10: Busca em um array ordenado
// Escreva uma função que recebe um array de números ordenados em ordem crescente e um valor como parâmetro, e retorna o índice desse valor no array (ou -1 se o valor não estiver presente).

// Lembre-se de tentar resolver esses exercícios por conta própria. Se precisar de ajuda ou desejar verificar as soluções, fique à vontade para perguntar!