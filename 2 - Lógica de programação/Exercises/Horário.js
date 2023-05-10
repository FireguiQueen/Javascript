const date = new Date
const currentTime = date.getHours();

if(currentTime >= 00 && currentTime < 04){
    console.log('Boa madrugada!');
} 
else if(currentTime >= 04 && currentTime < 12){
    console.log('Bom dia!');
} 
else if(currentTime >= 12 && currentTime < 18){
    console.log('Boa tarde!');
} 
else {
    console.log('Boa noite!')
}

