// captura o dia de hoje 
const date = new Date();

function todaySDate(dayWeek = 'Segunda-feira', dayMonth = '1', month = 'janeiro', year = '1990', hour = '00:00'){
    return `
    ${}, ${dayMonth} de ${month} de ${year}, às ${hour}
    `
}

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


