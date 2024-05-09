const selectBox = document.querySelector(".select-box"),
selectBtnX = selectBox.querySelector(".options .playerX"),
selectBtnO = selectBox.querySelector(".options .playerO"),
playBoard = document.querySelector(".play-board"),
players = document.querySelector(".players");


window.onload = ()=>{ 
    for (let i = 0; i < allBox.length; i++) { 
       allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
}

selectBtnX.onclick = ()=>{
    selectBox.classList.add("hide"); 
    playBoard.classList.add("show"); 
}

selectBtnO.onclick = ()=>{ 
    selectBox.classList.add("hide"); 
    playBoard.classList.add("show");
    players.setAttribute("class", "players active player"); 
}

let playerOIcon = "far fa-circle"; 
let playerSign = "X"; 
let runBot = true; 

// user click function
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
        // playBoard.style.pointerEvents = 'auto'
        // playerSign = 'X'
        bot(runBot)// calling bot function
    }, randomTimeDelay)
    //once the player has clicked the box, the player will be switched
}
function bot(){
    let array = []
    // if (players.classList.contains('player')){
    //     playerSign = 'O'
    // }else{
    //     playerSign = 'X'
    // }
    if (runBot){
        playerSign = 'O'
    }
    for (let i = 0; i < allBox.length; i++){
        if (allBox[i].childElementCount == 0){
            array.push(i)
        }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)]
    if (array.length > 0){
        if (players.classList.contains('player')){
            playerSign = 'X' //bot will be X
            allBox[randomBox].innerHTML = `<i class='${playerXIcon}'></i>`
            players.classList.add('active')
            allBox[randomBox].setAttribute('id', playerSign) //write the icon chosen in the box
        }
        else{
            allBox[randomBox].innerHTML = `<i class='${playerOIcon}'></i>`
            players.classList.remove('active')
            allBox[randomBox].setAttribute('id', playerSign)
        }
        selectWinner()
        }
        allBox[randomBox].style.pointerEvents = 'none' //once bot selects a box then user can't click on the box
        playBoard.style.pointerEvents = 'auto'
        playerSign = 'X'
        //once the player has clicked the box, the player will be switched

}

function getIdVal(classname){
    return document.querySelector('.box' + classname).id
}

function checkIdSign(val1, val2, val3, sign){
    if (getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign){
        return true  //checking if there is a tripple match for any player
    }
}
}
