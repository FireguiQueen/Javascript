// Captura o dia 
const date = new Date();


function todaySDate(dayWeek = 'Segunda-feira', dayMonth = '1', month = 'janeiro', year = '1990', hour = '00:00'){
    // dia semana, dia mês, mês, ano, horas
    return `
    ${weekDay()}, ${date.getDate()} de ${monthDay()} de ${date.getFullYear()}, às ${correctsTime()}
    `
}

// Retorna o dia da semana. Exemplo: segunda-feira
function weekDay(){
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

// Formata horários que possuem zero
function correctsTime(){
    const formatHour = date.getHours() < 10? `0${date.getHours()}` : date.getHours();
    const formatMinutes = date.getMinutes() < 10? `0${date.getMinutes()}` : date.getMinutes();
    return `${formatHour}:${formatMinutes}`
}


