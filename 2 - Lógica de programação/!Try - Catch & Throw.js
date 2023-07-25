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
    - Tentar novamente a operação que causou a exceção, em uma nova tentativa para evitar o erro.
    - Utilizar um valor padrão ou uma alternativa caso o erro ocorra em uma situação não crítica.
    - Notificar o administrador do sistema sobre o erro para que medidas corretivas possam ser tomadas.
*/

// Sintaxe
try{

} catch(erro_recebido){

}

// No bloco try, iremos colocar o nosso código potencialmente perigoso (ou seja, pode gerar erros) ao programa 
// No bloco catch, 