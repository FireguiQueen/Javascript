//  ATRIBUIÇÃO VIA DESESTRUTURAÇÃO
/*
    A atribuição via desestruturação é uma sintaxe em JavaScript que permite extrair valores 
    de arrays ou objetos e atribuí-los a variáveis individuais de forma concisa. 
    Isto é útil quando você deseja atribuir vários valores de uma vez ou quando deseja extrair 
    propriedades específicas de um objeto.
*/

// OBJETO 
const pessoa = {
    nome: 'Julia',
    endereco: {
        rua: 'Oswaldo pinto',
        casa: '296'
    }
}

// Reatribuindo valores das propriedades do objeto:
pessoa.name = 'Amanda';
pessoa.endereco.rua = 'Rogerio Bragas'




// Por que "atribuição via desestruturação"?
/*
    Uma analogia bem simples seria uma casa de tijolos.
    Você remove o tijolo da casa, e escreve um código nele. Assim quando você for se referir
    a aquele determinado tijolo, você irá dizer o código dele. 
    > A casa seria o objeto, o tijolo seria a propriedade, e o código a nossa variável.

    Primeiro nós desestruturamos nosso objeto, escolhemos quais propriedades desejamos, 
    e por fim, atribuimos uma variável a ela.  
*/


    


