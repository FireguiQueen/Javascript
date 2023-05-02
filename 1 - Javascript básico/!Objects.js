// O QUE SÃO
/*
    Objetos em JS são como os da vida real.
    Pense em uma caneca. 
    Uma caneca é um objeto, e esta mesma caneca possui diversos atributos, tais como.:
    cor, espessura, largura, altura, material e assim por diante..

    No Javascript, também utilizamos dos objetos para acessar informações que irão possuir 
    propriedades e os valores dessas propriedades.

    Nos objetos temos propriedades, valores e métodos.
    As propriedades são os nomes dos atributos, por exemplo a palavra 'cor' é uma
    propriedade.
    Valores são os valores que serão dados as propriedades, por exemplo a palavra 'verde' é o valor
    da propriedade 'cor'.
    E por fim, os métodos são funções que estão dentro de objetos. Podemos imaginar que seria algo como.:
    Se você encostar na caneca, ela irá acender um LED laranja. 
*/

const pessoa_01 = {         // Utilize chaves '{}' para inicializar um objeto
    nome: 'Guilherme',      // 'nome' é a propriedade, 'Guilherme' é o valor.
    idade: 14,              // 'idade' é a propriedade, 14 é o valor.        
}
console.log(pessoa_01.nome) // Para acessar alguma propriedade do objeto, utilize um ponto final (.)


