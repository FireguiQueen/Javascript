# Operadores de comparação
Assim como na matemática, nas linguagens de programação temos temos operadores que comparam os valores. Quando os operadores de comparação são usados, ele irá nos retornar um valor _bolean_, ou seja, ou é verdadeiro ou é falso. Podemos observar no exemplo abaixo.:
```js
console.log(100 > 10); 
// output: true (pois 100 é maior que 10)
```


</br>


## _maior que:_ > 
Este sinal faz uma comparação, analisando se o operando da esquerda é __maior__ que o da direita.
```js
console.log(10 > 10);
// output: false (pois 10 não é maior que 10)
```

### _maior ou igual:_ >= 
Este sinal analisa se o operando da esquerda é __maior__ ou __igual__ ao da direita.
```js
console.log(10 >= 10);
// output: true (10 não é maior que 10.. Mas 10 é IGUAL a 10)
```


</br>



## _menor que:_ < 
Este sinal faz uma comparação, analisando se o operando da esquerda é __menor__ que o da direita.
```js
console.log(5 < 10);
// output: true (pois 5 é menor do que 10)
```

### _menor ou igual:_ <= 
Este sinal analisa se o operando da esquerda é __menor__ ou __igual__ ao da direita. 
```js
console.log(5 <= 5);
// output: true (5 não é menor do que 5.. Mas 5 é igual a 5)
```


</br>


## _igualdade:_ == 
Este sinal verifica se ambos os operandos são IGUAIS. Mas este sinal não analisa os tipos de dados de cada operando, por consequência, podemos ter o número '55' em formato _string_ que será igual ao número '55' em formato de _number_.
```js
console.log('55' == 55);
// output: true (Pois este sinal analisa apenas valores. Sendo assim, '55' é igual a 55)
```

### _igualdade estrita:_ === 
Este sinal verifica se ambos os operandos são iguais, e além disto, ele também analisa o tipo de dado de cada um. Sendo assim nesta situação, o número '55' em formato _string_ não será igual ao '55' em formato _number_
```js
console.log('55' === 55);
// output: FALSE (Este sinal analisa VALORES e TIPOS. Sendo assim, '55' não é igual a 55 do tipo number)
```



</br>



## _diferente:_ =! 
Este sinal analisa se os operandos são diferentes. Ele não irá analisar o tipo de dado, apenas valores.
```js
console.log(10 =! '10');
// output: false (pois 10 não é diferente de '10')
```

### _diferente estrito:_ ==! 
Este sinal analisa se os operandos são diferentes, Ele irá analisa o tipo de dado.
```js
console.log(10 =! '10');
// output: true (pois 10 é diferente de '10' -> são tipos de dados diferentes)
```

