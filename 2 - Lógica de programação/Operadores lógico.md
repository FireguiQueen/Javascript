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

