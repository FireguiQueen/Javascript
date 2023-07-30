# Date
- Nada mais é do que uma função construtora;
- Por ser uma função construtora, usaremos o 'new' e criaremos uma variável;
- Facilita trabalharmos com datas; 

</br>

## Entendendo os parâmetros
Os parâmetros deste seguem a seguinte ordem.:
<ol>
    <li>Year </li>
    <li>Month </li>
    <li>Day </li>
    <li>Hour </li>
    <li>Minutes </li>
    <li>Seconds </li>
    <li>Milliseconds </li>
</ol>

</br>


## Observações
Saiba que apenas o _ano_ e o _mês_ são obrigatórios, o restante você não precisa colocar (por padrão o dia será definido para 1, o horário será 3 e o restante será 0). 
</br>

Como já sabemos, todo primeiro elemento de um array é representado pelo indíce 0, e não é diferente quando fazemos uso do `Date()`.
O mês segue esta mesma ordem. Isto significa que, o mês de janeiro é representado pelo número 0, o mês de fevereiro é representado pelo mês 1, e assim por diante..
</br>

Para pegar o dia da semana, utilizamos o `date.getDay();`. O domingo é representado pelo 0, a segunda-feira é representada pelo dia 1, e assim por diante


</br>
</br>

## Alterando a data usando o tipo de dado `Number`
```js
const ano_alterado = new Date(2020, 3)
console.log(ano_alterado);
// Os outros parâmetros não foram definidos. Por padrão o dia será 01, o horário serão 3 da manhã e o restante (minutos, segundos e milesegundos) serão todos 00.
// output: 2020-04-01T03:00:00:00.000Z
```

## Alterando a data usando o tipo de dado `String`
```js
// Para alterar a data usando string, basta apenas passar um argumento no tipo string.
let data_com_ano_alterado = new Date('2023-06-06 22:32:21');

// Ou assim (sem o espaço entre o ano e a data, usando o caractere 'T'; que significa 'time').
data_com_ano_alterado = new Date('2023-06-06T22:32:21');

console.log(data_com_ano_alterado);
// output: 2023-06-07T01:32:21.000Z
```

</br>

# Métodos 

### `getFullYear()`
Pega o ano como um número de 4 digítos (yyyy).

### `getMonth()`
Pega o mês como um número (0-11).
O mês '0' sendo janeiro, mês '1' sendo fevereiro e assim pro diante.

### `getDate()`
Pega o dia como um número (1-31).

### `getDay()`
Pega o dia da semana como um número (0-6).
Sendo '0' domingo, '1' segunda-feira, '2' terça feira e assim por diante.

### `getHours()`
Pega o horário (0-23).

### `getMinutes()`
Pega os minutos (0-59).

### `getSeconds()`
Pega os segundos (0-59).

### `GetMilliseconds()`
Pega os milisegundos (0-999);


### `GetTime`
Pega quantos milsegundos se passaram desde 1 de janeiro de 1970 até o tempo do objeto.


### `toLocaleDateString()`
Representa o 'time' através do idioma colocado como argumento.
Parâmetros em ordem: idioma, objeto com configurações de representação.
Exemplo:
```js
const data = new Date('2020-12-03T12:03:10');
// weekday-long: quinta-feira  ;   weekday-short: quin. 
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
console.log(data.toLocaleDateString('pt-br', options))

```
