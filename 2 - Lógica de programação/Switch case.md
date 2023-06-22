# Sobre
I switch case é uma das 3 formas de se construir estruturas condicionais. </br> 
Geralmente, veremos mais o uso de `if / else`, mas há alguns casos onde o uso da estrutura condicional 'switch case' acabe valendo mais a pena. 

</br>

## Estruturação 
Primeiro colocamos a keyword `switch` e abrimos parêntesis.
Dentro deste parêntesis iremos colocar o valor que será analisado. 
Dentro do switch, iremos colocar a keyword `case: + um valor`, isto signifca que, caso o valor passado dentro do parêntesis seja o mesmo do 'case', aquele bloco será rodado. A palavra 'break' possui uma extrema importância, pois ela quem determinada até onde o javascript irá ler e executar o bloco caso a condição for verdadeira.</br>
```js
const pessoa = 'joao';
switch(pessoa){
    case 'Maria':
        console.log('Seu nome é Maria!');
        break;

    case 'joao':
        console.log('Seu nome é João!');
        break;

}
// output: 'Seu nome é João!'
```

> Também podemos fazer o uso do 'default', que desempenha a exato mesmo papel que o 'else', porém, na estruturação switch case.
```js
const pessoa = 'joao';
switch(pessoa){
    case 'Maria':
        console.log('Seu nome é Maria, e rima com coringa!');
        break;

    case 'joao':
        console.log('Seu nome é João, e rima com anão!');
        break;

    default:
        console.log('Nenhum nome foi digitado ou o nome passado não possui informaões');

}
```

</br>

## Exemplo 01
Estamos desenvolvendo um pequeno programa, onde o mesmo recebe um nome e retorna o significado desta nome. Veja a maneira que construimos esta condicional usando 'switch case' e 'if / else'. 

### If
```js
// não usaremos o 'else' pois estamos em uma função, o e return já 'desempenha' este papel.
function(name){
    if(name === 'guilherme')
        return 'Guilherme significa "aquele que deseja proteger, guerreiro"';
    if (name === 'flora')
        return 'Flora significa "digna de amor"';
    if (name === 'paulo')
        return 'Paulo indica uma pessoa com muita disposição e um otimismo contagiante';
    if (name === 'bruno')
        return 'Bruno indica uma pessoa calma e diplomática';
}
```

### Switch case
```js
// não usaremos o 'break' neste caso também não seria necessário, já que o return 'desempenha' este papel.
function(name){
    switch(name){
        case 'guilherme':
            return 'Guilherme significa "aquele que deseja proteger, guerreiro"'
            break;

        case 'flora':
            return 'Flora significa "digna de amor"';
            break;
    }
}
```

</br>
</br>

## Exemplo 02
Temos uma loja online onde permite o usuário escolher um celular, e ao escolher, será mostrado a descrição do mesmo. Veja a maneira que construimos esta condicional usando 'switch case' e 'if / else'. 

#### If
```js
// não usaremos o 'else' pois estamos em uma função, o e return já 'desempenha' este papel.
function(celular){
    if (celular === 'A50')
        return '..';
    if (celular === 'Iphone X')
        return '....';
}
```

#### Switch case
```js
function(celular){
    switch(celular){
        case 'A50': 
            return '...'
            break;

        case 'Iphone X':
            return '..'
            break;
    }
}