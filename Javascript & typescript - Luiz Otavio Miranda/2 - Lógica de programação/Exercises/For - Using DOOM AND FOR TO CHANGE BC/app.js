function changeParagrafhBC(){
    const allStyles = getComputedStyle(document.body)
    const pageBackground = allStyles.backgroundColor;
    console.log(pageBackground)
    const myParagrafhs = document.querySelectorAll('p')
    for(let paragrafos of myParagrafhs){
        paragrafos.style.color = 'white'
        paragrafos.style.backgroundColor = pageBackground
    }

}
changeParagrafhBC()