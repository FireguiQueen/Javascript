# Condicionais
`if` e `else` (ou somente if; pois o 'else não é obrigatório) é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa o código dentro de else (caso haja um).
Podemos imaginar que as estruturas condicionais no mundo da programação são bem parecidas com a da vida real. 

## Exemplo 01
Vamos imaginar uma condicional na vida real e transformá-la em código.
> _SE_ o tempo estiver bom, você irá dizer "Eu vou para a praia" </br> 
> _SE NÃO_ você irá dizer "ficarei em casa". 

```js
let isWeatherGood = true;

if (isWeatherGood === true){
    console.log('Eu vou para a praia!')
} else{
    console.log('Eu vou ficar em casa, o tempo não está bom.');
}

// output:
// "Eu vou para a praia!" 
```

</br>

## Exemplo 02
No exemplo 01, tivemos apenas uma condicional, se o tempo estiver bom, você irá ir para a praia, se não estiver, você não irá ir. Mas e se você precissase colocar mais condicionais? </br> 
_Por exemplo: Se o tempo estiver com sol, você irá ir para a praia. Se o tempo estiver nublado, você irá ir para a praia, porém, se estiver chovendo, você não irá ir_ 
</br>

Neste caso, devemos utilizar o `else if`. Não somos obrigados a utilizá-lo, mas fazer uma estrutura condicional usando apenas o if é uma péssima ideia.. Isto porque, mesmo que a primeira condição seja verdadeira, o JavaScript continuará analisando as outras condições que são `if`, o que não é eficiente e pode causar problemas de desempenho.

Em suma, quando usamos somente `if` o Javascript irá analisar todos os 'ifs', independente se o 'if' anterior for verdadeiro. Por isso usamos do `else if`, caso ele seja verdadeiro, os próximos 'else ifs' não serão analisados.

* Como nosso código será interpretado utilizando apenas if 
```js
let timeIsGood = true;
if(timeIsGood === true){     // esta condição será analisada. E ela é true.
    console.log('O tempo está bom');
}
if(timeIsGood == 'nublado'){ // pelo fato de utilizarmos o IF, está condição também será analisada
    console.log('O tempo está nublado');
}
else{
    console.log('O tempo está ruim');
}
```

* Como nosso código será interpetado utilizando if & else if
```js
let timeIsGood = 'nublado';
if(timeIsGood == 'nublado'){    // Condicional analisada, é e considerada true pois o tempo está nublado
    console.log('O tempo está nublado');
}
else if(timeIsGood == 'ruim' ){ // não seá analisada, pois a primeira condicional já foi considerada verdadeira 
    console.log('O tempo está nublado');
}
else{
    console.log('O tempo está ruim');
}
```

</br>
</br>

_______________________________________________________

### Notas
- Quando há somente uma linha de código, as chaves não são _obrigatórias_.
```js
// Jeito padrão 
const pessoasNoBarco = 52;
if(pessoasNoBarco > 10) {
    console.log('Há mais de 10 pessoas no barco')
} else{
    console.log('Não há mais de 10 pessoas no barco');
}

// Chaves {} retiradas
if(pessoasNoBarco > 10) 
    console.log('Há mais de 10 pessoas no barco')
else 
    console.log('Há 10 pessoas ou menos no barco');
```

</br>

- Em uma função que possui uma estrutura condicional com __RETURN__, o `if else` não é obrigatório 
```js
/* 
Em estruturas que possuem bastante condicionais, sempre devemos fazer o uso de 'else if', 
pois assim, caso um deles seja verdadeiro, as próximos condicionais não serão analisadas, e então
teremos mais efiência no código. Mas a partir do momento que a estrutura condicional 
possuir um return, e ele for verdadeiro, nenhum outro 'IF' será analisado pelo javascript, 
pois o anterior já foi analisado e dado como true, logo não é tão necessário utilizar do 'else if'.  
*/
function howManyPeople(num){
    if(num >= 100)
        return 'Há 100 ou mais pessoas'
    if(num >= 10)
        return 'Há 10 ou mais pessoas'
    else 
        return 'Há menos de 10 pessoas'
}
console.log(howManyPeople(1))

/*
EM SUMA.:
Quando uma condição é avaliada como verdadeira e há um return dentro do bloco de 
código correspondente, o valor é retornado e a função é encerrada. Isso significa que o código não irá avaliar as condições subsequentes.
*/
```

