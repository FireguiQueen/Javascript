// captura o dia de hoje 
const date = new Date();

function todaySDate(dayWeek = 'Segunda-feira', dayMonth = '1', month = 'janeiro', year = '1990', hour = '00:00'){
    return `
    ${dayWeek}, ${dayMonth} de ${month} de ${year}, às ${hour}
    `
}

function dayOfTheWeek(){
    switch(date.getDay()){
        // Break it's necessary bcs we're using a function that uses 'return'.
        case 0: 
            return 'Domingo';
    
        case 1:
            return 'Segunda-feira';
    
        case 2: 
            return 'Terça-feira';
    
        case 3: 
            return 'Quarta-feira';
    
        case 4: 
            return 'Quinta-feira';
        
        case 5: 
            return 'Sexta-feira'
    
        case 6:
            return 'Sábado';
    }
}

function correctMonth(){
    
}

console.log(todaySDate())


