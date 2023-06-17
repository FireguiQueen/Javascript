// captura o dia de hoje 
const date = new Date();

function todaySDate(dayWeek = 'Segunda-feira', dayMonth = '1', month = 'janeiro', year = '1990', hour = '00:00'){
    return `
    ${dayWeek}, ${dayMonth} de ${month} de ${year}, às ${hour}
    `
}

function dayOfTheWeek(){
    const dayWeek = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado'
    ]
    return(dayWeek[date.getDay()])
}


console.log(dayOfTheWeek())


