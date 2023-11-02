/*
Domingo = 0
Segunda feira = 1
Terça-feira = 2
Quarta-feira = 3
Quinta-feira = 4
Sexta-feira = 5
Sabádo = 6
*/

var semana = new Date()
var resposta = semana.getDay()

switch(resposta) {
    case 1:
        console.log('Estamos na Segunda feira');
        break
    case 2: 
        console.log('Estamos na Terça');
        break
    case 3:
        console.log('Estamos na quarta-feira');
        break
    case 4:
        console.log('Esatamos na quinta');
        break
    case 5:
        console.log('Estamos na sexta');
        break
    case 6:
        
        console.log('Estamos no sábado');
        break 
    default:
        console.log('[erro] Dia inválido!')     // Dafault é como se fosse o ELSE

}

