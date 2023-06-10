function sayWeekDay(day){
    const weekDays = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 
        'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ]
    switch(day){
        case 0: 
            return weekDays[0];        
        case 1: 
            return weekDays[1];
        case 2: 
            return weekDays[2];
        case 3: 
            return weekDays[3];
        case 4: 
            return weekDays[4];
        case 5: 
            return weekDays[5];
        case 6: 
            return weekDays[6];
    }
}
function capDay(){
    const date = new Date();
    const dayOfTheWeek = date.getDay();
    return dayOfTheWeek;
}

console.log(sayWeekDay(capDay()))