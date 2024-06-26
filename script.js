const selectBox = document.querySelector(".select-box"),
selectBtnX = selectBox.querySelector(".options .playerX"),
selectBtnO = selectBox.querySelector(".options .playerO"),
playBoard = document.querySelector(".play-board"),
players = document.querySelector(".players"),
allBox = document.querySelectorAll("section span"),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
replayBtn = resultBox.querySelector("button");

window.onload = ()=>{ 
    for (let i = 0; i < allBox.length; i++) { 
       allBox[i].setAttribute("onclick", "clickedBox(this)");
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
}

// user click function

let playerOIcon = "fas fa-circle"; 
let playerXIcon = 'fas fa-times';
let playerSign = 'X'; 
let runBot = true; 

// user click function

function clickedBox (element){
    if (players.classList.contains('player')){
        playerSign = "O"
        element.innerHTML = `<i class='${playerOIcon}'></i>` //ading the O icon
        players.classList.add('active')
        //if player select O then we'll change the playerSign value to O
        
        element.setAttribute('id', playerSign)
    }else{
        element.innerHTML = `<i class='${playerXIcon}'></i>` //adding cross icon
        players.classList.add('active') //add the sign of the player if the player is active
        // playerSign = "X"
        element.setAttribute('id', playerSign)
    }
    selectWinner()
    playBoard.style.pointerEvents = 'none'
    element.style.pointerEvents = 'none' //once box is clicked u cannot click again
    //so player cannot automatically click another box until the other player plays
    let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed() //specified number of decimal places //delay for next player
    setTimeout(()=>{
        bot(runBot)// calling bot function
    },  randomTimeDelay)
    //once the player has clicked the box, the player will be switched
}
function bot(runBot){
    let array = []
    
    if (runBot){
        playerSign = 'O'
    
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
            players.classList.remove('active')
            allBox[randomBox].setAttribute('id', playerSign) //write the icon chosen in the box
        }
        else{
            playerSign = 'O'
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
}

function getIdVal(classname){
    return document.querySelector('.box' + classname).id
}

function checkIdSign(val1, val2, val3, sign){
    if (getIdVal(val1) === sign && getIdVal(val2) === sign && getIdVal(val3) === sign){
        return true  //checking if there is a tripple match for any player
    }
    
}
//Last part
function selectWinner(){ //if the one of following winning combination match then select the winner
    if(checkIdSign(1,2,3,playerSign) || checkIdSign(4,5,6, playerSign) || checkIdSign(7,8,9, playerSign) || checkIdSign(1,4,7, playerSign) || checkIdSign(2,5,8, playerSign) || checkIdSign(3,6,9, playerSign) || checkIdSign(1,5,9, playerSign) || checkIdSign(3,5,7, playerSign)){
        
        runBot = false; //passing the false boolen value to runBot so bot won't run again
        bot(runBot); //calling bot function
        setTimeout(()=>{ //after match won by someone then hide the playboard and show the result box after 700ms
            resultBox.classList.add("show");
            playBoard.classList.remove("show");
        }, 700); //1s = 1000ms
        wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
    }
    else{ //if all boxes/element have id value and still no one win then draw the match
    if(getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != ""){
        runBot = false; //passing the false boolen value to runBot so bot won't run again
        bot(runBot); //calling bot function
        setTimeout(()=>{ //after match drawn then hide the playboard and show the result box after 700ms
            playBoard.classList.remove("show");
            resultBox.classList.add("show");
            
        }, 700); //1s = 1000ms
        wonText.textContent = "Match has been drawn!"; //displaying draw match text
    }
    }
    showModal()
}

function showModal(){
    document.querySelector('.overlay').style.display='flex'
}

replayBtn.onclick = ()=>{
window.location.reload(); //reload the current page on replay button click
}