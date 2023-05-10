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
Javascript possui apenas um único operador condicional, ele é um operador ternário. </br>
Operadores ternários recebem três operando, sendo.:
> _condição_ ? _resultado caso condição = true_ &nbsp;&nbsp;:&nbsp;&nbsp; _resultado caso condição = false_

O operador de condição é representado pelo caractere '_?_'. </br>
E ele funciona basicamente como uma interrogação na vida real. </br>
Nós iremos perguntar se a condição é falsa ou verdadeira, caso seja verdadeira, excute o primeiro operando a direita. Caso seja falsa, excute o segundo operando a direita.

```js
const idade = 18;

// No exemplo abaixo perguntamos.:
// A idade é maior ou igual a 18? Caso seja verdade, excute a primeira string, caso seja falso, execute a segunda string.
console.log(idade >= 18? 'Você é de maior, possui 18 anos ou mais!' : 'Você é de menor!');
```

### Importância 
Com este operador, podemos substituir condicionais simples que utilizam de `if` e `else`.
Além de retornar somente strings, também podemos fazer com que este operador excute funções, como no exemplo abaixo.:
```js
function digaOi(){
    return 'Olá'
}
// Caso a expressão seja 'true', ele irá executar uma função. 
console.log(5 > 0? digaOi() : '');
```

</br>

____________________________________________________

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

// Como ambas as condições são verdadeiras (pois a nacionalidade é do brasil e a idade é igual a 18), teremos 'Você pode comprar' como resultado.
console.log(nacionalidade === 'brasil' && idade >= 18? 'Você pode comprar' : 'Você não pode comprar');
```

</br>

> Agora vamos supor que você possua uma loja que vende testosterona em comprimidos. </br> 
> Neste caso, você só vende para pessoas que treinam a pelo menos dois anos  OU  para pessoas que pesam acima de 87kg. </br> Então nesta situação temos duas expressões.: _anos de treino > 2 anos_  OU _peso > 87kg_.
```js
const anosTreinando = 1;
const peso = 90;

// Abaixo, apenas uma das expressões é verdade, pois os anos de treinam não ultrapassem de dois anos, mas o peso é acima de 87. Como estamos usando o operador ||, apenas uma das expressões abaixo precisa ser "true". 

// Sendo assim, teremos 'Você pode comprar os comprimidos' como resultado. 
console.log(anosTreinando >= 2 || peso > 87? 'Você pode comprar os comprimidos' : 'Você não pode comprar!');
```

</br>
</br>

____________________________________________________________

# Short-circuit
Como vimos anteriormente, em situações simples, é possível substituir o `if` e `else` usando o perador ternário `?`. Com este operador podemos fazer funções serem executadas caso a condição seja verdadeira, e caso seja falsa, não executar nenhuma função.

Mas saiba que é possível fazer condicionais usando somente operadores lógicos e sem usar este operador ternário _(?)_.


* Quanto utilizamos o `&&`, temos o seguinte padrão.:
> Como o operador `&&` precisa analisar __todas__ as expressões, o Javascript vai analisar a expressão, se ela for verdadeira, ele irá ir para a próxima e assim por diante. Mas caso ele encontre uma expressão que resulta em 'false', ele irá printar/executar ela. 
```js
function digaOi(){
    return 'Oi'
}
const idade = 21;
const nome = 'Guilherme'

// Cada vez que uma expressão é considerada "true", o javascript passa para a próxima expressão.
// Como a idade e o nome são expressões do tipo "true", ele passou para a próxima expressão (que é uma função), e como ela foi a última expressão, ele irá executar ela.
console.log(idade && nome && digaOi());
```

Abaixo estão alguns exemplos de console.log() com comentários mostrando o resultado que seria impresso no console.
```js
console.log(null && true && true);
// null (pois null resulta em false, e quando é encontrado false, a expressão é printada)

console.log(true && 'Olá');
// 'Olá' (pois é uma string que possui caracteres, e como foi a última expressão, ela será printada)


console.log(undefined && 0);
// undefined (pois undefined é considerado false neste contexto, e assim que o Javascript detecta uma expressão false, ela é printada)
```