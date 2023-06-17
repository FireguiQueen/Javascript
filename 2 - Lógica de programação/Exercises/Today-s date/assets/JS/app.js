// captura o dia de hoje 
const date = new Date();

function todaySDate(dayWeek = 'Segunda-feira', dayMonth = '1', month = 'janeiro', year = '1990', hour = '00:00'){
    // dia semana, dia mês, mês, ano, horas
    return `
    ${Weekday()}, ${} de ${monthDay()} de ${year}, às ${hour}
    `
}

// Retorna o dia da semana. Exemplo: segunda-feira
function Weekday(){
    const mondayToSunday = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ]
    return mondayToSunday[date.getDay()]
}

// Retorna o mês. Exemplo.: janeiro
function monthDay(){
    const dayMonth = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]
    return dayMonth[date.getMonth()]
}


console.log(dayOfTheWeek(), monthDay())


