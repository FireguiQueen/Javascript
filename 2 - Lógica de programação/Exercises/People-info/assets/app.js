const form = document.querySelector('body main form');

// Armazena as informações das pessoas
const people = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    sendInf();
    clearInputs();
});


// Captura informações dos inputs e envia para um objeto
function sendInf(){
    const input1 = document.getElementsByClassName('inf')[0].value;
    const input2 = document.getElementsByClassName('inf')[1].value;
    const input3 = document.getElementsByClassName('inf')[2].value;
    const input4 = document.getElementsByClassName('inf')[3].value;
    people.push(takeInformations(input1, input2, input3, input4));
}

// Armezana informações capturadas anteriormente
function takeInformations(name, age, country, email){
    return{
        name,
        age,
        country,
        email
    }
}




// Limpa os valores colocados pelo usuário
function clearInputs(){
    const allInputs = document.querySelectorAll('body main form input');
    allInputs.forEach(e => e.value = '')
}