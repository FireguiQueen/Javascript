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

</br>

> Neste exemplo, possuimos também dois escopos: o global e o local. Podemos observar que __NÃO__ há nenhuma variável chamada "veiculo" no escopo global, apenas em um escopo local, mas mesmo assim conseguimos invocá-la (algo que não seria possível fazer caso usassemos let ou cost).
```js
// Escopo global (não possui nenhuma variável)

{   // Escopo local (possui uma variável)
    var veiculo = 'Caminhão';
}
console.log(veiculo)
```



## Let 
Diferentemente do comportamento mostrado acima, o `let` faz uso de escopos locais.
Isto significa que, caso a variável não exista no escopo local onde você chamou ela, irá retornar erro.  
```js
// ESCOPO GLOBAL

{   // ESCOPO LOCAL
    let pessoa = 'Julião';
}
console.log(pessoa) // 'Pablo'
