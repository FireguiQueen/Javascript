const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const writeOn = document.querySelector('.container');
for(let i = 0; i < elementos.length; i++){
    const createElement = document.createElement(elementos[i].tag)
    const creatText = document.i
    writeOn.appendChild(createElement);

    
}

