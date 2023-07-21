// BREAK & CONTINUE
/*
    Ambas são palavras-chave utilizadas para controlar o fluxo de execução dentro de loops 
    (como for, while, do-while) e também podem ser usadas dentro de estruturas condicionais 
    (if, switch).


    A palavra "break" significa quebrar.
    É utilizada para sair completamente do loop.

    A palavra "continue" significa continuar. 
    Ele pula a execução da iteração atual e passa para a próxima (se houver). 

    Em resumo, caso o "break" seja utilizado, o loop não será mais executado.
    Caso o "continue" seja utilizado, o loop irá ignorar a iteração atual e irá passar para 
    a próxima.

*/

// EXEMPLO 01 - continue
const names = ['Ana', 'Julia', 'Paulo', 'Claudia', 'Amanda'];
for(let nome of names){
    // Quando nome for igual a "Julia", esta execução é pulada e passada para próxima iteração.
    if(nome === 'Julia'){ 
        continue;
    }
    console.log(nome)
}