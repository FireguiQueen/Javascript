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

//****************************************************************************// 

// Objeto comum
const caneca = {
    cor: 'preta'
}

// Atribuindo uma variável a propriedade 'cor' do objeto
/*  
    Primeiro colocamos qual seria o tipo da variável (const, let ou var). 
    Depois abrimos chaves, dentro dela selecionamos as propriedades que desejamos.
    Após selecionar a propriedade, coloque dois pontos e o nome que deseja para a variável
    Por fim, escolhe o objeto (ele precisa possuir a propriedade colocada anteriormente).
*/
const {cor: cor_da_caneca} = caneca;


// Simplificando o código
/*
    Não precisamos colocar os dois pontos e escolher um nome de variável.
    Podemos fazer isto diretamente. Por exemplo, se a proriedade se chama "cor",
    basta colocar "cor" entre as chaves.
    A sua variável irá se chamar 'cor'.
*/


// Por que "atribuição via desestruturação"?
/*
    Uma analogia bem simples seria uma casa de tijolos.
    Você remove o tijolo da casa, e escreve um código nele. Assim quando você for se referir
    a aquele determinado tijolo, você irá dizer o código dele. 
    > A casa seria o objeto, o tijolo seria a propriedade, e o código a nossa variável.

    Primeiro nós desestruturamos nosso objeto, escolhemos quais propriedades desejamos, 
    e por fim, atribuimos uma variável a ela.  
*/


    


