function greetings(){
    const date = new Date(2023, 5, 7, 1);
    const hour = date.getHours();
    // 'Else if' não são necessários pois estamos utiliando 'return'. 
    // Utilizá-lo apenas iria poluir o código.

    function formatarHora(hora){
        const formatar = hora < 10? `0${hora}` : hora;
        return formatar;
    }

    const sayTime = `São ${formatarHora(hour)} hora(s).`
    if (hour >= 12 && hour < 18) return `Boa tarde! ${sayTime}`;
    if (hour >= 18 && hour < 24) return `Boa noite! ${sayTime}`;
    if (hour >= 00 && hour < 06) return `Que madrugada, hein! ${sayTime}`
    if (hour >= 06 && hour < 12) return `Bom dia! ${sayTime}`
}

console.log(greetings())
