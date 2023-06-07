# First things first! 
O "Date" que utilizamos na verdade é uma função construtora.
Por isso, utilizamos "new" ao chamar o "Date".
    
## Função construtora 
Uma função construtora nada mais é do que um objeto dentro de uma função.
Este objeto irá possuir propriedades, mas não irá possuir valores.

Podemos utilizar da função construtora para criar novos objetos de maneira mais inteligente
em determinado contexto.
Vamos supor que você seja um professor de matemática. 
Para cada aluno seu, será necessário criar um objeto informando as seguintes propriedades.:
- Nome
- Idade 
- Etnia 

Uma maneira não muito eficiente, seria criar um objeto novo para cada aluno.
Mas invés disso, podemos pegar um projeto pronto e apenas adicionar as propriedades.
Ou seja, usaremos uma função construtora, pois ela é basicamente um protótipo.

Utilizar o this é EXTREMA importância. Pois ele se refere ao identificador atual do objeto.
Por exemplo

```js
const alunos = function(nome, idade, etnia){
    this.nome = name,
    this.idade = idade,
    this.etnia = etnia
}
const Julia = new alunos('Julia', 15, 'Branca');
const 

const date = new Date();
console.log(date)