
//assign span to hold timer to timer variable
let timer = document.getElementById('countdownTimer')

//countdown function for players time to complete game 
function countdown() {
    //assign variable seconds to the inner text content of countdowntimer span
    let seconds = parseInt(timer.innerText);
    //start countdown if not already at 0
    if (seconds > 0) {
        //decrease seconds by 1
        seconds--;
        //assign new value of seconds to span
        timer.innerText = seconds;
    };
};



setInterval(countdown, 1000);