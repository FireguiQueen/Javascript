const form = document.querySelector('body main form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    clearInputs();
});


function takeInformations(name, age, ){

}

// Limpa os valores colocados pelo usuário
function clearInputs(){
    const allInputs = document.querySelectorAll('body main form input');
    allInputs.forEach(e => e.value = '')
}