function changeParagrafhBC(){
    const allStyles = getComputedStyle(document.body)
    const pageBackground = allStyles.backgroundColor;
    console.log(pageBackground)

    const myParagrafhs = document.querySelectorAll('p')
    // const my pararf.. = ['primeiro p', 'segundo p', 'terceiro p', 'quarto p']; 
    console.log(myParagrafhs)

    for(let paragrafos of myParagrafhs){
        paragrafos.style.backgroundColor = pageBackground
    }

}
changeParagrafhBC()