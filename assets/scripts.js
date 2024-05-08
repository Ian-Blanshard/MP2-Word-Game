
//function to start new game
function startNewGame() {
    //start the countdown
    setTimeout(countdown, 1000);
};


//event listener for start game button
let startButton = document.getElementById('startGame');
    startButton.addEventListener('click', startNewGame);


//countdown function for players time to complete game 
function countdown() {
    //assign span to hold timer to timer variable
    let timer = document.getElementById('countdownTimer')
    //assign variable seconds to the inner text content of countdowntimer span
    let seconds = parseInt(timer.innerText);
    //start countdown if not already at 0
    if (seconds > 0) {
        //decrease seconds by 1
        seconds--;
        //assign new value of seconds to span
        timer.innerText = seconds;
        //call the countdown function again after 1 second
        setTimeout(countdown, 1000);
    };
};



