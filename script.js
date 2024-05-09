function clickedBox (element){
    if (players.classList.contains('player')){
        element.innerHTML = `<i class='${playerOIcon}'></i>`
        players.classList.remove('active')
        element.setAttribute('id', playerSign)
    }else{
        element.innerHTML = `<i class='${playerXIcon}'></i>`
        players.classList.add('active') //add the sign of the player if the player is active
        element.setAttribute('id', playerSign)
    }
    selectWinner() //calling the select winner function
    element.style.pointerEvents = 'none' //once box is clicked u cannot click again
    playBoard.style.pointerEvents = 'none'//so player cannot automatically click another box until the other player plays
    let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed() //specified number of decimal places //delay for next player
    setTimeout(()=>{
        playBoard.style.pointerEvents = 'auto'
        playerSign = 'X'
    }, randomTimeDelay)
    //once the player has clicked the box, the player will be switched
}
function getIdVal(classname){
    return document.querySelector('.box' + classname).id
}