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
console.log(pessoas[0]);




//                     QUANTANDO QUANTOS ITENS O ARRAY POSSUI
console.log(pessoas.length);




//                     ALTERANDO UM ITEM DO ARRAY
// Neste exemplo mudamos o indice 0 (Pablo) para o nome "Julia"
pessoas[0] = 'Julia'
console.log(pessoas)




//                     EMPURRANDO (adicionando) UM OU MAIS ITENS AO FINAL DO ARRAY
// Neste exemplo empurramos dois itens: 'alice' e 'juju'.. Mas podemos empurrar quantos itens quisermos
pessoas.push('Alice', 'Juju');
console.log(pessoas)



//                    REMOVENDO UM ITEM AO FINAL DO ARRAY
pessoas.pop()
console.log(pessoas)





//                   ADICIONANDO UM OU MAIS ITENS AO INÍCIO DO ARRAY
// Usamos "unshift" pois é o contrário de "shift". "Shift" significa mudança, mudança relacionada a remoção de um item
pessoas.unshift('Aline');
console.log(pessoas)



//                  REMOVENDO UM ITEM DO INÍCIO DO ARRAY
pessoas.shift()
console.log(pessoas)





//                  REMOVENDO UM ITEM ESPECÍFICO E SEM ALTERAR OS INDÍCES
// Indices:    0       1        2         3    
const nomes = ['Hugo', 'Maria', 'Gaspar', 'Cleiton'];
delete nomes[2]
console.log(nomes)




//                          PEGANDO INDICES DESEJADOS
// Useremos o "slice". Vamos "fatiar" quais itens do array nós queremos.
// Indices:        0               1        2            3             4
const usernames = ['FireguiQueen', 'x_2KB', 'kovadetha', 'MaeCareca_', 'Darknesswarrior']

// Agora vamos supor que queremos os itens: x_2KB, kovadetha e MaeCareca_
console.log(usernames.slice(1, 4)) // colocamos o indice "4" pois o último elemento não é incluido
