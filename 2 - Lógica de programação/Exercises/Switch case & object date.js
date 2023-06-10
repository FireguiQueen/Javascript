function sayWeekDay(day){
    const weekDays = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 
        'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ]
    switch(day){
        case 0: 
            return weekDays[0];
            break;
        
        case 1: 
            return weekDays[1];
            break;
        
        case 2: 
            return weekDays[2];
            break;
        
        case 3: 
            return weekDays[3];
            break;
        
        case 4: 
            return weekDays[4];
            break;
        
        case 5: 
            return weekDays[5];
            break;

        case 6: 
            return weekDays[6];
            break;
    }
}

function capDay(){
    const date = new Date()
}
console.log(sayWeekDay(2))