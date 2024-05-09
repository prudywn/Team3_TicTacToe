//Selecting all required elements

const selectBox = document.querySelector(".select-box");
selectXBtn = selectBox.querySelector(".PlayerX"),
selectOBtn = selectBox.querySelector(".PlayerO"),
playBoard = document.querySelector("play-board"),
allBox = document.querySelectorAll("section span")
players = document.querySelectorAll(".players");

  window.onload =() =>{//once window loaded

    for (let i = 0;index < allBox.length; index++){
      allBox[i].setAttribute("onclick", "clickedBox(this) ");
    }
    selectXBtn.onclick = ()=>{
      selectBox.classList.add(".hide");
      playBoard.classList.add("show")
    }
    selectOBtn.onclick = ()=>{
      selectBox.classList.add(".hide");
      playBoard.classList.add("show");
      players.setAttribute("class", "players active player")
    }
  }
  let playerXIcon = "X";
  let playerOIcon = "O";

  function clickedBox(element){
        if (players.classList.contains("player")){
          element.innerHtml = playerOIcon;
        }else{
          element.innerHtml = playerXIcon;
        }
  }
