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
    switch(date.getDay()){
        // Break it's necessary bcs we're using a function that uses 'return'.
        case 0: 
            return dayOfTheWeek[0];
    
        case 1:
            return dayOfTheWeek[1];
    
        case 2: 
            return dayOfTheWeek[2];
    
        case 3: 
            return dayOfTheWeek[3];
    
        case 4: 
            return dayOfTheWeek[4];
        
        case 5: 
            return dayOfTheWeek[5]
    
        case 6:
            return dayOfTheWeek[6];
    }
}

function correctMonth(){

}

console.log(todaySDate())


