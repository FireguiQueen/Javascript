# Escopo 
Antes de nos aprofundarmos nas "principais" _diferenças_ entre as variáveis (const, let e var) relacionadas ao escopo, precisamos ter o conhecimento sobre os escopos.
Escopos são como caixas, e por este motivo, você pode criar diversas variáveis que possuem do mesmo nome, entretanto, elas devem estar em escopos distintos.
De uma forma muito simples podemos identificar um escopo, basta procurar pelas chaves ({}).

### Exemplo  
```js
// Criamos um objeto chamado pessoa
// Veja que este objeto possui seu próprio escopo
const pessoa = {
    idade: 12
} 

// Criamos uma função chamada "digaOI"
// Veja que esta função possui seu próprio escopo
function digaOI(){
    return 'Oi!"'
}
```

</br>

___________________________________________________________

## Var
O comportamento de uma variável `var` é com base no escopo global.

> Neste exemplo, riamos duas variáveis com o mesmo nome, e por fim, printamos ela em nosso console. Pelo fato da `var` ser global, o valor dela será com base no último valor que foi escrito.
```js
var pessoa = 'Flora';
{
    var pessoa = 'Julia';
}
console.log(pessoa) // 'Julia'
```

</br>

> Neste exemplo, possuimos também dois escopos: o global e o local. Podemos observar que __NÃO__ há nenhuma variável chamada "veiculo" no escopo global, apenas em um escopo local, mas mesmo assim conseguimos invocá-la (algo que não seria possível fazer caso usassemos let ou cost).
```js
// Escopo global (não possui nenhuma variável)

{   // Escopo local (possui uma variável)
    var veiculo = 'Caminhão';
}
console.log(veiculo)
```

</br>


## Let 
Diferentemente do comportamento mostrado acima, o `let` não pode ser usado de maneira global.

> Neste exemplo, declaramos uma variável usando `let`, esta variável se encontra em um escopo local. Ao tentarmos chamá-la, teremos um erro.
```js
// ESCOPO GLOBAL (não possui nenhuma variável)

{   // ESCOPO LOCAL
    let pessoa = 'Julião';
}
console.log(pessoa) // "Pessoa" is not defined
```

</br>

_________________________________

## Var e escopo de função
As funções possui um escopo um pouco diferente. Antigamente, nas versões mais antigas do ECMAScript, não havia outras formas de declarar variáveis, havia apenas o `var`.
A única forma de se possuir variáveis `var` com diferentes valores seria através de escopos de função.

> Neste exemplo há uma função, perceba que a nossa variável `var` não existe fora dela.
```js
function pessoa(){
    var pessoa = 'Gus';
}
console.log(pessoa) // 'pessoa' is not defined
```

</br>

> Neste exemplo, há duas funções, ambas possuem variáveis com o mesmo nome e valores diferentes, e isto não seria possível com escopos globais, pois no final, ambas teriam o mesmo valor
```js
function pessoa01(){
    var name = 'Walter White';
}

function pessoa02(){
    var name = 'Jessie Pinkman';
}
