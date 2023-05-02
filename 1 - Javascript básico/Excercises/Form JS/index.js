const formulario = document.getElementById('meu-formulario');
const pessoas = [];

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    
    const nome = document.querySelector('fieldset input#name').value
    const idade = document.querySelector('fieldset input#age').value
    const altura = document.querySelector('fieldset input#altura').value
    const peso = document.querySelector('fieldset input#peso').value
    
    function newPerson(name = null, age = null, height = null, weight = null){
        return{
            name,
            age,
            height,
            weight
        }
    }
    pessoas.push(newPerson(nome, idade, altura, peso))
    console.log(pessoas)
    const inputs = document.querySelectorAll('input[type=text]');
    inputs.forEach(e => e.value = '')

    // 
    const imc = peso / (altura ** 2);
    document.getElementById('resultado').innerHTML = `
    Seu nome é ${nome}, e seu IMC é.: ${imc.toFixed(0)}
    `
})