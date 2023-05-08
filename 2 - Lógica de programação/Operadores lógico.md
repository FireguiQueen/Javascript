# Operadores lógicos
Operadores lógicos são utilizados para avaliar expressões booleanas.

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

// Algo curioso dos operadores lógicos é que, caso não pass
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