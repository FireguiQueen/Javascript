# Sobre
Podemos dizer que o switch case é uma das 3 mais populares formas de se construir estruturas condicionais. 
Geralmente, veremos mais o uso de `if / else`, mas há alguns casos onde o uso da estrutura condicional 'switch case' acabe valendo mais a pena. 

</br>

## Estruturação 
Primeiro colocamos a keyword `switch` e abrimos paretensis.
Dentro deste parentesis iremos colocar 

## Exemplo 01
Estamos desenvolvendo um pequeno programa, onde o mesmo recebe um nome e retorna o significado desta nome. Veja a maneira que construimos esta condicional usando 'switch case' e 'if / else'. 

#### If
```js
// não usaremos o 'else' pois estamos em uma função, o e return já 'desempenha' este papel
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
        case 'guilherme':
            return 'Guilherme significa "aquele que deseja proteger, guerreiro"'
            break;

        case 'flora':
            return 'Flora significa "digna de amor"';
            break;
    }
}