const form = document.querySelector('body main form');

// Armazena as informações das pessoas
const people = [];

form.addEventListener('submit', function(e){
    e.preventDefault();


    const inputsInf = document.querySelectorAll('body main form input')
    inputsInf.forEach(e => takeInformations(e.value))

    clearInputs();
});


function takeInformations(name, age, country, email){

}

// Limpa os valores colocados pelo usuário
function clearInputs(){
    const allInputs = document.querySelectorAll('body main form input');
    allInputs.forEach(e => e.value = '')
}