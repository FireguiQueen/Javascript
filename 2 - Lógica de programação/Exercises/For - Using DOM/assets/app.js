const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const writeOn = document.querySelector('main');
for(let i = 0; i < elementos.length; i++){
    writeOn.innerHTML += `<${elementos[i].tag}> ${elementos[i].texto} </${elementos[i].tag}`
}


