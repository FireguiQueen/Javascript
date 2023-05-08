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

# Operador condicional (?)
Javascript possui apenas um único operador condicional, ele é um operador ternário. 
Operadores ternários recebem três operando, sendo.:
> _condição_ ? _resultado caso condição = true_ &nbsp;&nbsp;:&nbsp;&nbsp; _resultado caso condição = false_



# Operadores lógicos
Operadores lógicos são utilizados para avaliar expressões booleanas.

</br>

## && 
Este operador significa "AND". </br>
O operador `&&` exige que _todas_ as expressões sejam verdadeiras (true). 
```js
let saldoBancario = 42000;
let saldoBancario_02 = 53000;

// No console abaixo basicamente estamos perguntando.:
// "O saldo bancário da conta um é maior que 10000     E    o saldo da conta 2 é maior que 40000?
console.log(saldoBancario > 10000 && saldoBancario_02 > 40000);

// Neste caso, ambas as expressões são verdadeiras, logo, teremos "true" como resultado no console.
```


</br>

## || 
Este operador significa "OR". </br>
O operador `||` não exige que todas as expressões sejam true, mas exige que uma delas seja verdadeira.
```js
let conta_01 = 100;
let conta_02 = 200;

// "O saldo da conta 1 é maior que 50    OU    o saldo da conta 2 é maior que 300?
console.log(conta_01 > 50 || conta_02 > 300);

/* Neste caso, temos uma expressão que é verdade (conta 1 > 50), porém, temos uma 
expressão falsa (conta 2 > 300).. 
Mas como estamos utilizando este operador, apenas UMA expressão precisa ser verdadeira. 
*/
```

</br>

## !
Este operador significa "NOT" (negação). </br>
O operador `!` nega o valor boolean de uma expressão, como consequência, o valor inverso será dado. </br> Por exemplo, caso sua expressão seja 'true' e você coloque este operador, o valor dela será 'false'.
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

> Vamos supor que você possua uma loja que vende vinhos.
> Como um bom e velho patriota, você vende vinhos apenas para brasileiros que possuem 18 anos ou mais. </br> Então nesta situação temos duas expressões a _nacionalidade_ e a _idade_ da pessoa, e ambas precisam ser avaliadas para você vender o vinho para esta pessoa. 

```js
const nacionalidade = 'brasil';
const idade = '18';

console.log(nacionalidade === 'brasil' && idade >= 18? 'Você pode comprar' : 'Você não pode comprar');