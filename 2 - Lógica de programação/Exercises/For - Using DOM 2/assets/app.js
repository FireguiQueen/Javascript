let frutas = [
    "abacaxi",
    "banana",
    "caju",
    "damasco",
    "figo",
    "goiaba",
    "laranja",
    "manga",
    "uva",
    "melancia",
    "melão",
    "morango",
    "pêssego",
    "abacate",
    "ameixa",
    "cereja",
    "kiwi",
    "limão",
    "maçã",
    "pera",
    "tangerina",
    "maracujá",
    "acerola",
    "jabuticaba",
    "abacaba",
    "caqui",
    "framboesa",
    "amora",
    "melão",
    "carambola",
    "mamão",
    "jaca",
    "pitanga",
    "graviola",
    "romã",
    "guaraná",
    "cupuaçu",
    "cajá",
    "cambuci",
    "mexerica",
    "pequi",
    "lichia",
    "tamarindo",
    "abiu",
    "bacuri",
    "taperebá",
    "umbu",
    "murici",
    "araticum",
    "jambo",
    "cupuaíçu"
];
  

let atraso = 0;
const writeOn = document.querySelector('.lista');
function write(fruta){
    atraso += 0.08;
    
    return `
        <div class='cu' style="animation: appear .5s linear forwards ${atraso}s";>> 
            ${fruta} 
        </div>
    `

}
for(let i = 0; i < frutas.length; i++){
    writeOn.innerHTML += write(frutas[i]);
}


