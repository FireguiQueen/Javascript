const formulario = document.getElementById('meu-formulario');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    const inputs = document.querySelectorAll('input');
    inputs.forEach(e => e.value = '')

    const nome = document.querySelector('fieldset input#name')
})