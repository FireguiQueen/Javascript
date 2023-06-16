# Sobre
Podemos dizer que o switch case é uma das 3 mais populares formas de se construir estruturas condicionais. 
Geralmente, veremos mais o uso de `if / else`, mas há alguns casos onde o uso da estrutura condicional 'switch case' acabe valendo mais a pena. 

</br>

## Estruturação 
Primeiro colocamos a keyword `switch` e abrimos paretensis.
Dentro deste parentesis iremos colocar o valor que será analisado. 
Dentro do switch, iremos colocar a keyword `case: + um valor`, isto signifca que, caso o valor passado dentro do parentesis seja o mesmo do 'case', aquele bloco será rodado. A palavra 'break' possui uma extrema importância, pois ela quem determinada até onde o javascript irá ler caso a condição for verdadeira</br>
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
```

> Também podemos fazer o uso do 'default', que desempenha a exato mesmo papel que o 'else', porém, na estruturação switch case.
```js
const numero = 1;
switch (numero){
    case numero > 1: 
        return 'Seu número é maior ou igual a um.'
        break;

    default:
        return 'Seu número é menor do que um.'
}
```

## Exemplo 01
Estamos desenvolvendo um pequeno programa, onde o mesmo recebe um nome e retorna o significado desta nome. Veja a maneira que construimos esta condicional usando 'switch case' e 'if / else'. 

#### If
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

#### Switch case
```js
function(name){
    switch(name){
        // o break neste caso também não seria necessário, já que o return 'desempenha' este papel.
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