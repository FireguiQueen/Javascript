// 'Else if' não são necessários pois estamos utiliando 'return'. 
// Utilizá-lo apenas iria poluir o código.
function greetings(name){
    const date = new Date();
    const hour = date.getHours();

    function formatarHora(hora){
        const horaFormatada = hora < 10? `0${hora}` : hora;
        const formatarMais = horaFormatada == 1? `São ${horaFormatada} hora.` : `São ${horaFormatada} horas`
        return formatarMais;
    }
    const sayTime = formatarHora(hour);
    if (hour >= 12 && hour < 18) return  `Boa tarde, ${name}! ${sayTime}.`;
    if (hour >= 18 && hour < 24) return  `Boa noite, ${name}! ${sayTime}.`;
    if (hour >= 00 && hour < 06) return  `Que madrugada boa, ${name}! ${sayTime}.`
    if (hour >= 06 && hour < 12) return  `Bom dia, ${name}! ${sayTime}.`
}
console.log(greetings('Guilherme'))
