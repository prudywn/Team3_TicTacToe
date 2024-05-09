function clickedBox (element){
    if (players.classList.contains('player')){
        element.innerHTML = `<i class='${playerOIcon}'></i>`
        players.classList.remove('active');
        element.setAttribute('id', playerSign);
    }
}