# Date
- Nada mais é do que uma função construtora;
- Por ser uma função construtora, usaremos o 'new' e criaremos uma variável;
- Facilita trabalharmos com datas; 

## Entendendo os parâmetros
Os parâmetros deste objeto seguem esta ordem.:
<ol>
    <li>Year </li>
    <li>Month </li>
    <li>Day </li>
    <li>Hour </li>
    <li>Minutes </li>
    <li>Seconds </li>
    <li>Milliseconds </li>
</ol>

Logo, o primeiro argumento irá alterar o ano, o segundo irá alterar o mês e assim sucessivamente.

## Observações
Caso você deseja definir uma data utilizando os argumentos, saiba que apenas o _ano_ e o _mês_ são obrigatórios, o restante você não precisa colocar. </br>
Como já sabemos, todo primeiro elemento de um array é representado pelo indíce 0, e não é diferente quando fazemos uso do `Date()`.
O segundo parâmetro deste objeto é o mês, e ele segue esta mesma ordem. Isto significa que, o mês de janeiro é representado pelo número 0, e não pelo 1.

</br>

## Alterando a data usando `Number`
```js
const data_com_ano_alterado = new Date(2020, 3)
console.log(data_com_ano_alterado);
// output: 2020, april, 1
```

## Alterando a data usando `String`
```js
const data_com_ano_alterado = new Date('2023-06-06 22:32:21');
console.log()
