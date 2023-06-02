# Condicionais
`if` e `else` (ou somente if) é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else (caso haja um).
</br>

Podemos imaginar que as estruturas condicionais no mundo da programação são bem parecidas com a da vida real. 

## Exemplo 01
Vamos imaginar uma condicional na vida real e transformá-la em código.
> _SE_ o tempo estiver bom, você irá dizer "Eu vou para a praia", _SE NÃO_ você irá dizer "ficarei em casa". 

```js
let timeIsGood = true;

if (timeIsGood === true){
    console.log('Eu vou para a praia!')
} else{
    console.log('Eu vou ficar em casa, o tempo está péssimo.');
}
```

</br>

## Exemplo 02
No exemplo 01, tivemos apenas uma condições, se o tempo estiver bom, você irá ir para a praia, se não estiver, você não irá ir.
Mas e se você precissase colocar mais condicionais? </br> 
Por exemplo: Se o tempo estiver com sol, você irá ir para a praia. Se o tempo estiver nublado, você irá ir para a praia, porém, se estiver chovendo, você não irá ir. 
</br>

Neste caso, devemos utilizar o `else if`. Não somos obrigados a utilizá-lo, mas fazer uma estrutura condicional usando apenas o if é uma péssima ideia.. Isto porque, mesmo que a primeira condição seja verdadeira, o JavaScript continuará analisando as outras condições que são `if`, o que não é eficiente e pode causar problemas de desempenho.

Em suma, quando usamos somente `if` o Javascript irá analisar todos os 'ifs', independente se o 'if' anterior for verdadeiro. Por isso usamos do `else if`, caso ele seja verdadeira, os próximos 'else ifs' não serão analisados.

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
const pessoas = 1;
if(pessoas > 10)