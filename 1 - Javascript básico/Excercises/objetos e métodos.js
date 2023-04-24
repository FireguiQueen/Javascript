// FAÇA UMA FACTORY FUNCTION QUE POSSUA UM MÉTODO E DIZER SEU NOME E O ANO EM QUE NASCEU.

function creatPerson(name, surname, age){
    return{
        name,
        surname,
        age,

        whoIAm(){
            const data = new Date("March 25, 2049 21:15:30");
            const dataY = data.getFullYear()
            return `
            Hi, i'm ${this.name}, i was born in ${dataY - this.age} `
        }
    }
}

const KD6_3_7 = creatPerson('Joe', null, 13)
console.log(KD6_3_7.surname === null? 'não possui' : KD6_3_7.surname, KD6_3_7.whoIAm());