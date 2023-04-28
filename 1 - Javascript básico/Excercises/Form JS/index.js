document.getElementById("meu-formulario").addEventListener("submit", function(event) {
    let teste = document.querySelectorAll('input');
    teste.forEach(e =>{
        e.value = ''
    })
    event.preventDefault();
    console.log('cu')
    // seu código de envio de formulário aqui
  });
  