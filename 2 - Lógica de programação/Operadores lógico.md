# Falsy e Truthy
O Javascript possui um mecanismo onde, podemos passar valores de um tipo, mas caso o contexto necessita de um valor boolean (true ou false), ele fará uma conversão. Está conversão irá pegar nosso valor e irá transformar ele em true ou false. Vale lembrar que os valores "falsy" não são literalmente do tipo booleano "false", mas são avaliados como "false" em um contexto booleano. Já os valores "truthy" não são literalmente do tipo booleano "true", mas são avaliados como "true" em um contexto booleano.

Por exemplo, uma string vazia é do tipo "string", mas é avaliada como "falsy" em um contexto booleano. Isso significa que, se você usar uma string vazia em um "if" ou "while", ela será automaticamente convertida em "false". Por outro lado, uma função é do tipo "function", mas é avaliada como "truthy" em um contexto booleano. Isso significa que, se você usar uma função em um "if" ou "while", ela será automaticamente convertida em "true".

## Falsy
* false
* 0 
* NaN
* null 
* undefined 
* Uma string vazia `' '`
* A propriedade um objeto que inclua um desses valores acima

## Truthy
* true
* Um número diferente de zero
* Uma string não vazia `'..'`
* A propriedade um objeto que inclua um desses valores acima

</br>

____________________________________________________

# Operadores lógicos
Operadores lógicos são utilizados para avaliar expressões booleanas.

</br>

## && 
Este operador significa "AND".
O operador `&&` exige que _todas_ as expressões sejam verdadeiras (true). 
```js
let saldoBancario = 42000;
let saldoBancario_02 = 53000;

// No console abaixo basicamente estamos perguntando.:
// "O saldo bancário da conta um é maior que 10000 E o saldo da conta 2 é maior que 40000?
console.log(saldoBancario > 10000 && saldoBancario_02 > 40000);

// Neste caso, ambas as expressões são verdadeiras, logo, teremos "true" como resultado no console.
```

### Curiosidade
O operador && e o operador || podem ser usados ​​para criar expressões condicionais que avaliam se uma determinada condição é verdadeira ou falsa. Se a primeira expressão em && for falsa, o resultado será a primeira expressão. Caso contrário, o resultado será a última expressão.

>

// No exemplo abaixo, temos uma expressão do tipo 'falsy' (não é literalmente falsa, mas strings vazias são consideradas "false"). Teremos uma string vazia retornada no console. 
console.log('' && 'Olá');

// Vale a pena saber isto pois podemos montar sistemas condicinais sem a necessidade de utilizar o 'if'. Veja o exemplo abaixo.: Caso a expressão seja falsa, o sistema irá printar uma string vazia no console, caso a primeira expressão seja 'true', ele irá analisar a última expressão, e printar ela no console. Porém podemos utilizar funções.
let queroDizerOI = true;
function digaOi(){
    return 'oi'
}
console.log(queroDizerOi && digaOi();)
```

</br>

## || 
Este operador significa "OR".
O operador `||` não exige que todas as expressões sejam true, mas exige que uma delas seja verdadeira.
```js
let conta_01 = 100;
let conta_02 = 200;

// "O saldo da conta 1 é maior que 50  OU  o saldo da conta 2 é maior que 300?
console.log(conta_01 > 50 || conta_02 > 300);

// Neste caso, temos uma expressão que é verdade (conta 1 > 50), porém, temos uma expressão falsa (conta 2 > 300).. Mas como estamos utilizando este operador, apenas UMA expressão precisa ser verdadeira. 
```

</br>

## !
Este operador significa "NOT" (negação).
O operador `!` nega o valor boolean de uma expressão, como consequência, o valor inverso será dado. Por exemplo, caso sua expressão seja 'true', mas você coloque este operador, o valor dela será 'false'.
```js
// Se estamos negando o "true", teremos um 'false' como resposta.
console.log(!true); 

// Também podemos utilizar este operador mais uma vez.
// O resultado será true, pois primeiro negamos que será true, e negamos novamente que será 'false'.
console.log(!!true);
```

</br>
</br>

_________________________________________________________________

## Exemplos práticos utilizando operadores lógicos

> Vamos supor que você possui um site, onde pega a _altura_ e o _peso_ da pessoa.
> Você quer montar um sistema onde, se a _altura_ __e__ _peso_ da pessoa for maior que determinado número, será retornada uma mensagem dizendo para ela emagrecer.

```js

let peso = 68kg; 
let altura = 1.73; 

console.log()