function criarContador() {
    let contador = 0;
  
    function incrementar() {
      contador++;
      console.log(contador);
      return contador;
    }
  
    return incrementar();  // Aqui, a função incrementar é imediatamente invocada e seu resultado é retornado.
  }
  
  const resultado = criarContador();  // resultado conteria o valor 1, pois a função incrementar foi invocada imediatamente.
      