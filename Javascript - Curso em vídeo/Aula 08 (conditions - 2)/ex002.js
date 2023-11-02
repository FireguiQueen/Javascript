/* 
Para pegar o dia, a hora, o ano e outras informações de calendário, use o 'new Date()'
Depois de armazenar o new Date() em uma variável, há muitos comandos.:
variavel.getHours
variavel.getDay 
variavel.getMilliseconds
variavel.getMonth 
E assim por diante.. 

OBS: Estes comandos irão pegar essas informações pela máquina no qual está rodando, então certifique-se
que sua data esteja atualizada.
*/ 


var hora = new Date()
var horário = hora.getHours()

if (horário >= 00 && horário <= 5) {
    console.log('Boa magrugada')
} else if (horário >= 6 && horário <=12) {
    console.log('Bom dia!')
} else if (horário >= 12 && horário <=18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}


