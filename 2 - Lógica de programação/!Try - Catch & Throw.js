// TRY & CATCH
/*
    "Try" significa 'tentar' em português. Ambos os blocos (try e catch) são utilizados
    para tratar erros de nosso código.

    O 'try' é usado para tentarmos rodar um código arriscado ao nosso programa, onde o mesmo
    pode causar erros e interromper a execução de todo o nosso programa. 
    E caso ocorra algum erro dentro do try (por consequência do código arriscado), o `catch`
    é acionado para tratar o erro e evitar que o programa seja encerrado.
    
    Em português, 'catch' significa 'pegar'. O 'catch' está pegando o erro ocasionado pelo código
    do bloco 'try' e tratando o mesmo. 
    O tratamento de erro pode variar desde uma simples ação para evitar a interrupção do 
    programa até a execução de ações específicas para lidar com a exceção de forma adequada. 

    - Exibir uma mensagem de erro amigável para o usuário, informando sobre o ocorrido e sugerindo uma ação para corrigir o problema.
    - Gravar informações sobre a exceção em um arquivo de log para posterior análise e depuração do erro.
    - Tentar novamente a operação que causou o erro, em uma nova tentativa para evitar o erro.
    - Utilizar um valor padrão ou uma alternativa caso o erro ocorra em uma situação não crítica.
    - Notificar o administrador do sistema sobre o erro para que medidas corretivas possam ser tomadas.
*/

// Sintaxe
try{

} catch(erro_recebido){

}

// No bloco try, iremos colocar o nosso código potencialmente perigoso (ou seja, pode gerar erros) ao programa 
// No bloco catch, iremos colocar o tratamento do erro ocasionado pelo bloco "try"
// Ao lado do 'catch' iremos colocar os parentesis, e o erro será armazenado dentro dele.




// THROW
/*
    O throw significa "lançar", ou seja, estamos lançando um erro. 
    Um erro não necessariamente é uma consequência de um código, pois ele também 
    pode significar que algo foi feito de maneira incorreta pelo usuário.

    Por exemplo, você possui um programa capaz de soma dois operandos. Mas em um deses,
    o usuário coloca uma string, e não um número.
    Sendo assim, em seu código, você pode informar a ele por exemplo: 
    "Erro de escrita: por favor coloque apenas números".

    Caso você faça uso do 'throw' numa condicional (if por exemplo) que está
    em uma função, e se a condição for verdadeira,
    o throw será acionado e irá interromper o resto da função (como se fosse um 'break').

    É importante ressaltar que o javascript não consegue entender os erros pela parte do usuário,
    e para explicarmos isto a ele, usaremos o 'throw'. Quando ele ver que o throw foi lançado 
    pela função, ele vai compreender que isto é um erro.

    No exemplo abaixo, ao passar uma string como segundo argumento, isto não nos retornaria 
    erro algum, mas através do throw, podemos fazer com o que javascript entenda isto como um
    erro.
    E ao colocar o código em 'try', ele irá detectar o erro e mandar para o 'catch'.
*/

function sum(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw('Por favor digite apenas números!');
    } 
    return x + y
}

try{
    console.log(sum(4,'4'))
} catch(error){
    console.log(error)
}


function oi(c){
    if(!typeof c !== 'number'){
        console.log('oi')
    }
} oi(4)
