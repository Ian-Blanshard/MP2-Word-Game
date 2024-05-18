//array to hold letters;
let playersWord = [];
//variable to hold interval timer, outside function to allow it to be reset
//at start of function
let countSecond;


//function to start new game/ main game loop
function startNewGame() {
    //reset the playersWord array
    playersWord = [];
    //reset answer tiles
    resetPlayerAnswer();
    //start game timer
    startNewGameTimer();
    //add letters to the tiles
    addLettersToTiles();
};


//event listener for start game button
const startButton = document.getElementById('startGame');
    startButton.addEventListener('click', startNewGame);

//event listner for submit button
const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click',PlayerSubmitAnswer);

//event listener for each tile which runs the playerGameTileClick function when clicked
const tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => {
    tile.addEventListener('click',playerGameTileClick)
});


//function to remove player answer tiles 
function resetPlayerAnswer() {
    let playersWordDiv = document.getElementById('playersWord');
    let answerTiles = playersWordDiv.getElementsByClassName('tile');
    while (answerTiles.length > 0) {
        playersWordDiv.removeChild(answerTiles[0]);
    }
};
//function to respond when the player clicks on of the game tiles
function playerGameTileClick() {
    //add the letter from the clicked tile to the playersWord array
    playersWord.push(this.innerHTML);
    //log to console !!!!! remove in final build !!!!!
    console.log(playersWord);
    //create tiles for all current letters in playersWord array
    updateAnswerTiles();
}
//function to return string containing players answer, when the submit button is clicked
function PlayerSubmitAnswer() {
    //join the playersWord answer array into a single string
    let wordToCheck = playersWord.join('');
    //log to console !!!!! remove in final build !!!!!
    console.log(wordToCheck);
    //cancel the timer
    clearInterval(countSecond);
    //return the string
    return wordToCheck;
}

//function to add player selected letters to tiles in the result area of the page
function updateAnswerTiles() {
    let playersWordDiv = document.getElementById('playersWord');
    playersWordDiv.innerHTML = '';
    for (let word of playersWord) {
    playersWordDiv.innerHTML += `<div class='tile'>${word}</div>`;
    };
};
//function to start new game timer
function startNewGameTimer() {
    //assign the span to hold the timer to the variable timerDisplaySpan
    let timerDisplaySpan = document.getElementById('countDownTimer');
    //clear any existing timers
    clearInterval(countSecond);
    //reset timer variable 
    let timerSeconds = 30;
    //set timer display to timerSeconds
    timerDisplaySpan.textContent = timerSeconds;
    //use setInterval timer running a function to -1 from timerSeconds every sec
    countSecond = setInterval(() => {
        //minus 1 from timerSeconds
        timerSeconds--;
        //update timer span
        timerDisplaySpan.textContent = timerSeconds;
        //respond once timer reaches 0
        if (timerSeconds <= 0) {
            //action when timer reaches 0
            clearInterval(countSecond);
        }
    }, 1000);
}
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
//function to add the generated letters to the tiles on the page
function addLettersToTiles() {
    //assign tile elements to a variable
    let tiles = document.getElementsByClassName('tile');
    //use generate letters function to create a variable containing 12 letters
    let letters = generateLetters();
    //use a loop to change the inner html of each tile to the letter
    // a variable to use as a counter
    let i = 0;
    //for loop looping through all the tiles
    for (let tile of tiles) {
        //change the inner html to one of the letters in the letters array
        tile.innerHTML = letters[i];
        //increase the counter so that the loop adds a different letter 
        i++;
    };
};