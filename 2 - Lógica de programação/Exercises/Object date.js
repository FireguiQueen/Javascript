function greetings(){
    const date = new Date();
    const hour = date.getHours();
    // 'Else if' não são necessários pois estamos utiliando 'return'. 
    // Utilizá-lo apenas iria poluir o código.
    const sayTime = `São ${hour} horas.`
    if (hour >= 12 && hour < 18) return `Boa tarde! ${sayTime}`;
    if (hour >= 18 && hour < 00) return `Boa noite! ${sayTime}`;
    if (hour >= 00 && hour < 06) return `Que madrugada, hein! ${sayTime}`
    if (hour >= 06 && hour < 12) return `Bom dia! ${sayTime}`
}

greetings()
