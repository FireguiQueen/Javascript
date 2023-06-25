# Escopo 
Antes de nos aprofundarmos nas "principais" diferenças entre as variáveis (const, let e var) relacionadas ao escopo, precisamos ter o conhecimento sobre os escopos.
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
// Veja que esta função possuia seu próprio escopo
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



## Let e Const
Diferentemente do comportamento mostrado acima, o `let` e o `const` fazen uso de escopos locais.
Isto significa que, 
```js
// ESCOPO GLOBAL

let pessoa = 'Pablo';
{   // ESCOPO LOCAL
    let pessoa = 'Julião';
}
console.log(pessoa) // 'Pablo'
