//global variables
//array to hold letters;
let playersWord = [];
//variable to hold interval timer
let countSecond;
//variable to hold timerseconds
let timerSeconds;
//variable to hold the playerScore
let playerScore;


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

//event listener for submit button
const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click',PlayerSubmitAnswer);

//event listener for each tile which runs the playerGameTileClick function when clicked
const tiles = document.querySelectorAll('.tile');
//use forEach to loop through all tiles and apply eventlisteners to all of them
tiles.forEach(tile => {
    tile.addEventListener('click',playerGameTileClick)
});
//event listener for timer
const timerDisplaySpan = document.getElementById('countDownTimer');
timerDisplaySpan.addEventListener('DOMSubtreeModified', () => {
    if (timerDisplaySpan.textContent == "0") {
        PlayerSubmitAnswer();
    }
});

//event listener for showing modal when page first loads
document.addEventListener('DOMContentLoaded', function() {
    //assign the gameInstructions div to modalClass variable 
    const modalClass = document.getElementById('gameInstructions');
    //add the is-visible CSS rules to make the modal visible
    modalClass.classList.add('is-visible');
    //event listener for the close button on modal 
    //assign close button to variable closeModalButton
    const closeModalButton = modalClass.querySelector('[data-close]');
    closeModalButton.addEventListener('click', function() {
        modalClass.classList.remove('is-visible');
    });
});

//function which interacts with the dictionary API, allowing the program to check
//whether the player answer is a word in the english dictionary  
function getDataFromApi(callback, wordToCheck){
    //create new instance of XMLHttp request and assign it to a variable 
    var xhr = new XMLHttpRequest(); 
    //initialise the request, using wordToCheck variable which is entered by a user
    xhr.open('GET', `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToCheck}`);
    //send the request to the server
    xhr.send();
    //an event handler to take action when the server returns the request
    xhr.onreadystatechange = function() {
        //if the request has been completed (4) and has been successful (200)
        if (this.readyState == 4 && this.status == 200) {
            //the call back function is called 
            callback(JSON.parse(this.responseText));
            //if the status returned is 404 it wasn't located and the notAWord function runs
        } else if (this.readyState == 4 && this.status == 404){
            notAWord();
        }
    };
};
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
    //calculate the player score
    calculatePlayerScore();
    //run the function which interacts with API, passing the callback
    //and the wordToCheck
    getDataFromApi(correctWordEntered, wordToCheck);
}
//function to alert user that their answer was found in the dictionary
function correctWordEntered(data) {
    //show the 
    showCorrectWordModal(data);
    //update high score if correct word was entered
    updateHighscore();
    }; 

function showCorrectWordModal(data) {
        //assign the div for holding the result text to a variable
        const correctWordModalDiv =  document.getElementById('isAWordResult');
        //enter the resutl text into the div
        correctWordModalDiv.innerHTML = `<h1>Well Done!</h1>
                                         <div>The word you entered was <span id="word">${data[0].word}</span>.</div>
                                         <div> This scored <span id="score">${playerScore}</span> points</div>`;
        //assign the isAWord div to modalClass variable 
        const modalClass = document.getElementById('isAWord');
        //add the is-visible CSS rules to make the modal visible
        modalClass.classList.add('is-visible');
        //event listener for the close button on modal 
        //assign close button to variable closeModalButton
        const closeModalButton = modalClass.querySelector('[data-close]');
        closeModalButton.addEventListener('click', function() {
            modalClass.classList.remove('is-visible');
        });       
};

//functon to alert user that their answer was not found in the dictionary
function notAWord() {
    //assign the div for holding the result text to a variable
    const correctWordModalDiv =  document.getElementById('notAWordResult');
    //enter the result text into the div
    correctWordModalDiv.innerHTML = `<h1>Unlucky!</h1>
                                     <div>The word you entered did not score, as it does not exist in the english dictionary</div>`;
    //assign the notAWord div to modalClass variable 
    const modalClass = document.getElementById('notAWord');
    //add the is-visible CSS rules to make the modal visible
    modalClass.classList.add('is-visible');
    //event listener for the close button on modal 
    //assign close button to variable closeModalButton
    const closeModalButton = modalClass.querySelector('[data-close]');
    closeModalButton.addEventListener('click', function() {
        modalClass.classList.remove('is-visible');
    });   
};
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
    timerSeconds = 30;
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
    //shuffle array 
    letters = shuffleLetters(letters);
    //return the shuffled array to use in game
    return letters;
};
//function to randomise the array of letters so all vowels aren't together
//Uses Fisher-Yates shuffle learnt from site https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
function shuffleLetters(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
}
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
//function to calculate player score for the word they entered
function calculatePlayerScore() {
    //multiply the length of the word by the remaining seconds
    playerScore = playersWord.length * timerSeconds;
    //log to console !!!!! remove in final build !!!!!
    console.log(playerScore);
};
//function to update highscore if new player score is highest yet
function updateHighscore() {
    //assign the span to place the score in to highScoreDiv
    const highScoreDiv = document.getElementById('highScore');
    //assign the current highscore to highScore
    let highScore = parseInt(highScoreDiv.innerText);
    //
    if (playerScore > highScore) {
        highScore = playerScore;
        highScoreDiv.innerText = playerScore;
    };
};