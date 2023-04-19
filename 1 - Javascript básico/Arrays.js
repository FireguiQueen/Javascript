//                      O QUE SÃO ARRAYS
/* 
    Arrays são estruturas de dados usadas em JavaScript para armazenar e acessar coleções de 
    valores de forma organizada. Um array é uma lista ordenada de elementos que podem ser números, strings, 
    objetos ou outros arrays. Cada elemento é identificado por um índice, que começa em 0 para o 
    primeiro elemento e aumenta em 1 para cada elemento subsequente. Os arrays em JavaScript são 
    dinâmicos, o que significa que você pode adicionar e remover elementos de um array a qualquer
    momento.
*/

//                      FAZENDO UM ARRAY
// Indices:     0       1        2
let pessoas = ['Pablo', 'Flora', 'Nathalia'];



//                      ACESSANDO UM ITEM DO ARRAY
console.log(pessoas[0]) 



//                     QUANTANDO QUANTOS ITENS O ARRAY POSSUI
console.log(pessoas.length)



//                     ALTERANDO UM ITEM DO ARRAY
// Neste exemplo mudamos o indice 0 (Pablo) para o nome "Julia"
pessoas[0] = 'Julia'
console.log(pessoas)



//                     EMPURRANDO (adicionando) UM ITEM AO FINAL DO ARRAY
// Neste exemplo empurramos dois itens: 'alice' e 'juju'.. Mas podemos empurrar quantos itens quisermos
pessoas.push('Alice', 'Juju');
console.log(pessoas)


//                    REMOVENDO