# Variáveis

## Escopo 
Antes de nos aprofundarmos nas "principais" diferenças entre as variáveis (const, let e var), precisamos ter o conhecimento sobre os escopos.
Escopos são como caixas, e por este motivo, você pode criar diversas variáveis que possuem do mesmo nome, entretanto, elas devem estar em escopos distintos.
De uma forma muito simples podemos identificar um escopo, basta procurar pelas chaves ({}).

#### Exemplo  
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