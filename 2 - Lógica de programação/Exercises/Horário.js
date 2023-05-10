const date = new Date;
const hour = date.getHours();

if(hour >= 00 && hour < 04){
    console.log('Boa madrugada');
} 
else if(hour >= 04 && hour < 12){
    console.log('Bom dia!');
} 
else if(hour >= 12 && hour < 18){
    console.log('Boa tarde!');
} 
else {
    console.log('Boa noite!')
}

