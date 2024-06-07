# MP2-Word-Game

![Screenshot of game on different devices](/assets/images/word-game-2.jpg)

Word Game is a fun game to practice your English language skills, similar in concept to the popular letters game from Countdown.

This website is designed to challenge yourself to show off your quick thinking and see how high you can score! 

Live version of site hosted on GitPages [here](https://ian-blanshard.github.io/MP2-Word-Game/)

***

## Contents

1 [User Experience (UX)](#UX)

  * [Project Goals](#project-goals)
  * [User Stories](#user-stories)
  * [Wireframes](#wireframes)
  * [Colour Scheme and Font](#styles)

2 [Features](#features)

  * [Introduction Modal](#introduction-modal)
  * [Game Screen](#game-screen)
  * [Game Tiles](#game-tiles-grid)
  * [Players Word Box](#players-word-box)
  * [Game Buttons](#game-buttons)
  * [Game Title](#game-title)
  * [Scoreboard](#scoreboard)
  * [Correct Word Modal](#correct-word-modals)
  * [Not A Word Modal](#not-a-word-modal)
  * [Word Too Short Modal](#word-too-short-modal)
 
3 [Technologies Used](#technologies-used)

4 [Credits](#credits)

5 [Testing](#testing)

  * [Bugs](#bugs)
  * [Code Validation](#code-validation)
    * [CSS code validation](#css-code-validation)
    * [HTML code validation](#html-code-validation)
    * [JavaScript code validation](#javascript-code-validation)
  * [Lighthouse Testing](#lighthouse-testing)
  * [Manual Testing](#manual-testing)
    * [Testing across different devices and browsers](#testing-across-different-devices-and-browsers)
    * [Testing game features](#testing-game-features)
    * [Testing Introduction Modal](#testing-introduction-modal)
    * [Testing Game Screen](#testing-game-screen)
    * [Testing Is A Word Modal](#testing-is-a-word-modal)
    * [Testing not a word modal](#testing-not-a-word-modal)
    * [Testing too short word modal](#testing-too-short-modal)
  * [Testing Stories](#testing-stories)
  

6 [Deployment](#deployment)

7 [Finished Site](#finished-site)

***

## User Experience (UX) <a name="UX"></a>
### Project Goals <a name="project-goals"></a>

 * Create a word based puzzle game which is fun to play
 * The game to have a timer to increase the challenge  
 * a method of scoring and tracking high score to add replay ability
 * Responsive design so can be played across different devices
 * Clear instructions to player of how to play the game

***

### User stories <a name="user-stories"></a>

A user of the site wants to:

* Understand how to play the game

* Receive feedback on their performance

* Have the spelling of their word checked

* Be able to see their previous best and try to beat it

* Play a game which is simple, accessible and intuiative to play

* Be able to play the game on different devices

***

### Wireframes <a name="wireframes"></a>

[Figma](www.figma.com) was used to create wireframes for the project to get some of the ideas for layouts prior to starting to code them.

![Screenshot of wireframes](/assets/images/wireframe-1.jpg)

The initial design for the game, the tiles and the various components which are essential for the functionality.

![Screenshot of wireframes](/assets/images/wireframe-2.jpg)

The wireframes for each different device layouts in the initial design stages. These layouts were used to begin with but during the initial stages of coding the functionality of the game, and with feedback from my mentor Marcel, I realised the screen was too cluttered, Especially on mobile. This led to the current design being used in which instructions and results are displayed using modals. This creates a much more user friendly experience with a cleaner game screen.

***

### Colour Scheme and Font <a name="styles"></a>

The font Radio Canada Big from [Google fonts](https://fonts.google.com/) is used for the site, for the game to work properly it is essential a clear font is used, for this reasons a sans serif font stlye was chosen. The font sans serif was also used as the fallback in case Radio Canada Big could not be loaded to ensure the game was still playable.

![Screenshot of font](/assets/images/font.jpg)

The weight of the font is varied for different features of the game, with 500 weight being used for the game tiles and 700 being used to the title.

![Screenshot of font weights-](/assets/images/font-weights.jpg)

The color scheme used is a black background (#000000), with a bright green (#B6FF00) colour used for text, margins and shadows. This provides a good contrast so that the text and interactable features are easily visible and score well for accessibility. A less bright green (#ABA973) was used for the background of the game tiles and buttons, because these features are larger block of colour this ensures they weren't too harsh on the eyes.

![Screenshot of color scheme](/assets/images/colour-scheme.jpg)

The large black background had some visual noise texture added to it to break up the large block of colour, this was created using [noise texture generator](https://www.noisetexturegenerator.com/)

***

## Features <a name="features"></a>

### Introduction modal <a name="introduction-modal"></a>

The introduction modal is visible upon the page loading, it provides the user with the name of the game, a short introduction of the game, rules and clear instructions on how to play it.

![Screenshot of instructions modal](/assets/images/instruction-modal.jpg)

### Game screen <a name="game-screen"></a>

The game screen is where the game is played, it contains all the required features to play the game, all visible at once and presented in easy to access parts of the screen for players playing one handed on mobile.

![Screenshot of game screen](/assets/images/game-screen.jpg)

### Game tiles grid <a name="game-tiles-grid"></a>

The game tiles grid is the section on the game screen which contains the tiles of letters which the user picks from to make their word, the tiles are blank prior to the game beginning and upon the player starting the game they fill with letters. The tiles have an animation added to them to communicate to the player that they are interactive features and can be clicked.

![Screenshot of game tiles](/assets/images/game-tiles.jpg)

### Players word box <a name="players-word-box"></a>

The players word box is the place which the game tiles, of which they have selected will be places. The players word box is empty at the start of each game and once a tile has been added it has the same animation as the game tiles, this shows the player that they are also interactive game parts and if the player clicks on a tile they have added to their answer it can be removed, in case they have made an error.

![Screenshot of players word box](/assets/images/player-word-box.jpg)

### Game buttons <a name="game-buttons"></a>

The game buttons are the two buttons which can be clicked by the player to control the flow of the game, the start game button to start a new game and the submit word button to use when they have finished their word. Both of the buttons have an animation on them to communicate to the player that they are interactive elements.

![Screenshot of game buttons](/assets/images/game-buttons.jpg)

### Game title <a name="game-title"></a>

The game title is at the head of the pages and shows the logo for the game, it is there as a visual reminder to the player of the game what game they are playing. It also can be clicked to open the introduction/instructions modal again.

![Screenshot of game title](/assets/images/game-title.jpg)

### Scoreboard <a name="scoreboard"></a>

The scoreboard holds two pieces of information which are updated as the player is playing, the timer which countdowns the time in which they have to complete the game, this adds challenge for the player. The high score is also visible in the scoreboard which displays the players highest score from the current session, this adds engagement as the player attempts to beat any previous scores they have.

![Screenshot of scoreboard](/assets/images/scoreboard.jpg)

### Correct word modals <a name="correct-word-modals"></a>

The correct word modals are displayed after the player successfully submits a word during the game, a variety of modals exist, each displaying the word they entered and the score it received, this is calculated by the length of the word and the time in which it took them to create it. When the player scores a different rating of stars are achieved, the higher the score the more stars. This star rating enhances the replayability as players strive to achieve a higher rating. Whether the word is valid is handled by using [this dictionary API](https://dictionaryapi.dev/) to check it exists in the English language
The modal contains a let's play again button to the allow the player to close the modal and play another game. This button has the same animation as the other player interactive objects, ensuring they know it is clickable.

One star modal

![Screenshot of one star modal](/assets/images/one-star-modal.jpg)

two star modal

![Screenshot of two star model](/assets/images/correct-word-modal.jpg)

three star modal

![Screenshot of three star modal](/assets/images/three-star-modal.jpg)

### Not a word modal <a name="not-a-word-modal"></a>

The not a word modal appears when the player enters a word which is not in the english dictionary. It communicates this with the player and provides them with a button which allows them to try again. This button has the same animation as the other player interactive objects, ensuring they know it is clickable.

![Screenshot of not a word modal](/assets/images/not-a-word-modal.jpg)

### Word too short modal <a name="word-too-short-modal"></a>

The word too short modal appears when a player enters a word which is less than three letters wrong, this is against the rules of the game, this information is communicated to them. The modal contains a keep playing button which allows them to return to the game. This button has the same animation as the other player interactive objects, ensuring they know it is clickable.

![Screenshot of word too short modal](/assets/images/word-too-short-modal.jpg)


***

## Technologies used <a name="technologies-used"></a>

This Project uses the following languages:

* HTML
* CSS
* JavaScript

[Google Fonts](https://fonts.google.com/) was used to browse, select and as a source of the font I used on this site.

[FontAwesome](https://fontawesome.com/) was used for the stars on the correct word modals.

[Git](https://git-scm.com/) and [GitHub](https://github.com/) for version control and as a repository.

***

## Credits <a name="credits"></a>
The [CSS documentation at mdn web docs](https://developer.mozilla.org/en-US/docs/Web/CSS) was used as a reference point during the creation of the website and when creating shadow effects.

When creating my README I used the website [makeareadme.com](https://www.makeareadme.com/) and the following [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) from GitHub to assist.

When creating the timer for the game in JavaScript is used [this blog on elated.com](https://www.elated.com/javascript-timers-with-settimeout-and-setinterval/) for learning about setInterval() and setTimeout().

When creating the modals for the game I used [this site](https://webdesign.tutsplus.com/how-to-build-flexible-modal-dialogs-with-html-css-and-javascript--cms-33500t) for learning to create modals .


When learning how to truly randomise my array of letters I used [this site](https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj) to learn about the Fisher-Yates shuffle.

For learning how to animate shadows i used [this site](https://css-tricks.com/getting-deep-into-shadows/).

The large black background had some visual noise texture added to it to break up the large block of colour, this was created using [noise texture generator](https://www.noisetexturegenerator.com/)

When I discovered the DOMSubtreeModified event listener need to be replaced I used [this site](https://developer.chrome.com/blog/mutation-events-deprecation/) and [this site](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to learn about mutation events.

To validate whether a word in the English language I used a free [dictionary API available here](https://dictionaryapi.dev/)

***

## Testing  <a name="testing"></a>

### Bugs <a name="bugs"></a>

#### Bug fix

Experienced a bug where the timer for any games after the first would countdown quicker than every second, this was due to the previous countdowns still being ongoing, restructured the function and moved the timer variable to the global scope to allow it to be cancelled.

***

Experienced a bug which allowed you to return to the game screen after submitting a word and then resubmit the word again before a new game was started. Cleared player word array when closing modals to fix.

***

### Code Validation <a name="code-validation"></a>

#### CSS code validation <a name="css-code-validation"></a>

I used the [W3C Markup validation service](https://jigsaw.w3.org/css-validator/#validate_by_input) to check the validity of my CSS. 

This passed with no errors found.

![Screenshot of CSS validation](/assets/images/css-validation.jpg)

***

#### HTML code validation <a name="HTML-code-validation"></a>

I used the [W3C Markup validation service](https://validator.w3.org/) to check the validity of my HTML.
This highlighted a number of errors and warnings.

The structure of my unordered list wasn't correct, so the elements were renamed.

![Screenshot of HTML validation](/assets/images/html-validation.jpg)

A stray i element was removed and the JavaScript script needed moving just inside the body not below it.

![Screenshot of HTML validation](/assets/images/html-validation1.jpg)

Following these amendments to my code it passed validation.

![Screen shot of HTML validation after](/assets/images/html-validation-after.jpg)

***

#### JavaScript code validation <a name="javascript-code-validation"></a>

I used the [JS hint JavaScript validation service](https://jshint.com/) to check the validity of my JavaScript. 

This passed with no errors found.

![Screenshot of JavaScript code validation](/assets/images/javascript-validation.jpg)

***

### Lighthouse testing <a name="lighthouse-testing"></a>

Initial lighthouse testing showed good accessibility and performance scores.

![Screenshot of lighthouse testing before](/assets/images/lighthouse-initial-score.jpg)

SEO scored poorly due to no meta description.

![Screenshot of lighthouse testing before](/assets/images/lighthouse-initial-score2.jpg)

a meta description was added to my HTML this improved this issue.

![Screenshot of lighthouse testing after](/assets/images/lighthouse-seo-fixed.jpg)

Best practices scored poorly due to using DOMsubtreemodified in an event listener.

![Screenshot of lighthouse testing before](/assets/images/lighthouse-initial-score1.jpg)

This lead me to having to remove the old eventlistener containing DOMSubtreeModified and replacing this with a
 mutationObserver, this resolved this issue and the final lighthouse score was satisfactory.

![Screenshot of final lighthouse score](/assets/images/lighthouse-final.jpg)

***

### Manual testing <a name="manual-testing"></a>

I chose to perform manual testing for this project as its size was small. This allowed me to quickly add features and restructure existing features as I went without having to also construct tests. The complexity of the game meant I could still quickly test all the features myself. It also allowed me to spend time experiencing the layout and design and how this worked together. I have learnt to use Jest to perform automated testing and can see the value in using this in larger projects, which would have greater functionality, where it would be more time efficient to use automated testing to ensure it all worked. It would also be advantageous in projects which are likely to undergo many changes throughout their lifespan and it would be essential to check than new additions did not break previous functionality. Below is the manual testing I performed.

#### Testing across different devices and browsers  <a name="testing-devices-browsers"></a>

Browser | Outcome | Pass/Fail  
--- | --- | ---
Google Chrome | Game ran correctly, design appearance correct and responsive across different screen sizes | Pass
Microsoft Edge | Game ran correctly, design appearance correct and responsive across different screen sizes | Pass
Mozilla Firefox | Game ran correctly, design appearance correct and responsive across different screen sizes | Pass
Apple Safari | Game ran correctly, design appearance correct - tested only on mobile screen size (iphone 12) | Pass

***

#### Testing game features  <a name="testing-game-features"></a>

#### Testing Introduction Modal  <a name='testing-introduction-modal'></a>

Feature | Outcome | Pass/Fail
 --- | --- | ---
Modal displays | Modal should display upon new page loading | Pass
Modal closes | Modal should close and display the game screen when the player clicks the I'm ready to play button | Pass
Modal opens | Modal should reopen when the game title is clicked | Pass
Title | Title should be visible and legible | Pass
Introduction | Introduction should be visible and legible | Pass
Instruction Title | Instruction title should be visible and legible | Pass
Instructions | Instructions should be visible and legible | Pass

***

#### Testing Game Screen <a name='testing-game-screen'></a>

Feature | Outcome | Pass/Fail
--- | --- | ---
Title | Title should be visible and legible | Pass
Highscore | Highscore should be visible and legible, should read 0 upon page load, and update upon player scoring a higher score than its current value | Pass
Timer | Timer should be visible and legible, should read 30 unless a current game is on going, when the start game button is pressed it should count down 1 second at a time to 0 | Pass
Player out of time | When the timer reaches 0 during a players game the contents of players answer are automatically submitted | Pass
Game tiles | Game tiles should be visible and legible and contain no letters upon screen loading | Pass
Generate game letters | When the start game button is pressed 12 random letters should fill the game tiles, they should contain 4 vowels which are evenly distributed across the tiles, the letters should be legible | Pass
Add letters to player word | On clicking one of the game letters during an active game a tile is generated in the players word containing the clicked letter | Pass
Remove letter from player word | On clicking one of the letters in the players word the tile is removed | Pass
Start game button | If the start game button is pressed a new game is started | Pass 
Submit word button | During an active game if the submit word button is pressed the word is submitted as the player answer | Pass
Player correct answer | If a player submits a word which is at least 3 letters long and in the English Dictionary the is a word modal is displayed | Pass
Player incorrect answer | If a player submits a word which is at least 3 letters long but is not in the English dictionary the not a word modal is displayed | Pass
Player answer too short | If a player submits a word which is 2 letters or less the too short modal is displayed | Pass

***

#### Testing Is A Word Modal <a name='testing-is-a-word-modal'></a>

Feature | Outcome | Pass/Fail
--- | --- | ---
Modal displays | Modal should display when player clicks submit word button and player word array contains a word at east three letters wrong in the English language | Pass
Three star result | If player score is > 100 points when modal is displayed three stars are shown on modal | Pass
Two star result | If player score is between 50 and 100 points when modal is displayed to stars are shown on modal | Pass
One star result | If player score is 0-50 points when modal is displayed one star is shown on modal | Pass
Player word displayed | The word the player entered is displayed on the modal | Pass
Player score displayed | The score the word the player entered is displayed on the modal | Pass
modal text | All text is displayed and is legible | Pass
Let's play again button | Button is displayed on modal, text is visible and clicking it returns player to game screen | Pass

***

#### Testing Not A Word Modal <a name='testing-not-a-word-modal'></a>

Feature | Outcome | Pass/Fail
--- | --- | ---
Modal displays | Modal should display when player clicks submit word button and the player word array contains greater than 2 letters but is not a word in the English language | Pass
modal text | All text is displayed and is legible | Pass
Try again button | Button is displayed on modal, text is visible and clicking it returns player to game screen | Pass

***

#### Testing Too Short Modal <a name='testing-too-short-modal'></a>

Feature | Outcome | Pass/Fail
--- | --- | ---
Modal displays | Modal should display when player clicks submit word button and the player word array contains 2 or less letters | Pass
modal text | All text is displayed and is legible | Pass
Keep playing button | Button is displayed on modal, text is visible and clicking it returns player to game screen | Pass


### Testing user stories  <a name="testing-stories"></a>

User Requirement  | Satisfying Features
--- | --- 
To understand how to play the game | Introduction modal gives clear instructions upon loading page, Player interactive features contain consistent animation style
To receive feedback on performance | Game score, High score, different number of stars on correct word modal, not a word modal.
Have spelling checked | If spelling is incorrect not a word modal tells player the word does not feature in the English dictionary
Be able to see their previous score and try to beat it | High score is tracked and displayed on game screen
Play a game which is simple accessible and intuitive to play | High accessibility score on lighthouse testing, legible font, contrasting colours, consistent design accross features.
Be able to play the game on different devices | Responsive design

***

## Deployment <a name="deployment"></a>

This project was developed using Microsoft Visual Studio Code, committed to Git and 
pushed to GitHub using the terminal with in VScode.

The final Live version of site is hosted on GitPages [here]() 

This is achieved by:

 1. Logging into GitHub
 2. Navigating to the repository you would like to create a site for
 3. At the top of the repository clicking the settings icon
 4. On the left hand side of the settings page click the pages section
 5. Under source click the dropdown and select master branch
 6. Once the page refreshes there will be a link to your site, click this

Detailed instructions on how to create a site on GitHub pages can be found [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## Finished site  <a name="finished-site"></a>

![Screenshot of finshed game](/assets/images/finished-game.jpg)
![Screenshot of finshed game](/assets/images/finished-game1.jpg)
![Screenshot of finshed game](/assets/images/finished-game2.jpg)





