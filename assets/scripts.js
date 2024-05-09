
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

//function to generate 12 random letters
function generateLetters() {
    //an array holding consonants
    let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p',
     'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    //an array holding vowels
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    //randomly choose 4 vowels and 8 consonants and add to letters array
    let letters = [];
    //for loop to add 4 random vowels to array 
    for (let i = 0; i < 4; i ++) { 
        //
        letters.push(vowels[Math.floor(Math.random() * vowels.length)]);
    }
    //for loop to add 8 random consonants to the array
    for (let i = 0; i < 8 ; i++) {
        letters.push(consonants[Math.floor(Math.random() * consonants.length)]);
    }
    return letters;
};


console.log(generateLetters());
 