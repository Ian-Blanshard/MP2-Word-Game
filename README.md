# MP2-Word-Game

![Screenshot of game on different devices](/assets/images/word-game-2.jpg)

Word Game is a fun game to practice your English language skills, similair in concept to the popular letters game from Countdown.

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
  * [Lighthouse Testing](#lighthouse-testing)
  * [Manual Testing](#manual-testing)
  * [Testing Stories](#testing-stories)
  * [Device and Browser Testing](#testing-devices-browsers)

6 [Deployment](#deployment)

7 [Finished Site](#finished-site)

***

## User Experience (UX) <a name="UX"></a>
### Project Goals <a name="project-goals"></a>

 * Create a word based puzzle game which is fun to play
 * The game to have a timer to increase the challenge  
 * a method of scoring and tracking high score to add replayability
 * Responsive design so can be played accross different devices
 * Clear instructions to player of how to play the game
 
### User stories <a name="user-stories"></a>

A user of the site wants to:

* Understand how to play the game

* Receive feedback on their performance

* Have the spelling of their word checked

* Be able to see their previous best and try to beat it

* Play a game which is simple, accessible and intuiative to play

* Be able to play the game on different devices

### Wireframes <a name="wireframes"></a>

[Figma](www.figma.com) was used to create wireframes for the project to get some of the ideas for layouts prior to starting to code them.

![Screenshot of wireframes](/assets/images/wireframe-1.jpg)

The initial design for the game, the tiles and the various components which are essential for the functionality.

![Screenshot of wireframes](/assets/images/wireframe-2.jpg)

The wireframes for each different device layouts in the initial design stages. These layouts were used to begin with but during the initial stages of coding the functionality of the game, and with feedback from my mentor Marcel, I realised the screen was too cluttered, Especially on mobile. This led to the current design being used in which instructions and results are displayed using modals. This creates a much more user friendly experience with a cleaner game screen.

### Colour Scheme and Font <a name="styles"></a>

The font Radio Canada Big from [Google fonts](https://fonts.google.com/) is used for the site, for the game to work properly it is essential a clear font is used, for this reasons a sans serif font stlye was chosen. The font sans serif was also used as the fallback incase Radio Canada Big could not be loaded to ensure the game was still playable.

![Screenshot of font](/assets/images/font.jpg)

The weight of the font is varied for different features of the game, with 500 weight being used for the game tiles and 700 being used to the title.

![Screenshot of font weights-](/assets/images/font-weights.jpg)

The color scheme used is a black background (#000000), with a bright green (#B6FF00) colour used for text, margins and shadows. This provides a good contrast so that the text and interactable features are easily visible and score well for accesibility. A less bright green (#ABA973) was used for the background of the game tiles and buttons, because these features are larger block of colour this ensures they weren't too harsh on the eyes.

![Screenshot of color scheme](/assets/images/colour-scheme.jpg)

The large black background had some visual noise texture added to it to break up the large block of colour, this was created using [noise texture generator](https://www.noisetexturegenerator.com/)

## Features <a name="features"></a>

### Introduction modal <a name="introduction-modal"></a>

The introducton modal is visible upon the page loading, it provides the user with the name of the game, a short introduction of the game, rules and clear instructions on how to play it.

![Screenshot of instructions modal](/assets/images/instruction-modal.jpg)

### Game screen <a name="game-screen"></a>

The game screen is where the game is played, it contains all the required features to play the game, all visible at once and presented in easy to access parts of the screen for players playing one handed on mobile.

![Screenshot of game screen](/assets/images/game-screen.jpg)

### Game tiles grid <a name="game-tiles-grid"></a>

The game tiles grid is the section on the game screen which contains the tiles of letters which the user picks from to make thier word, the tiles are blank prior to the game beginning and upon the player starting the game they fill with letters. The tiles have an animation added to them to communicate to the player that they are interactive features and can be clicked.

![Screenshot of game tiles](/assets/images/game-tiles.jpg)

### Players word box <a name="players-word-box"></a>

The players word box is the place which the game tiles, of which they have selected will be places. The players word box is empty at the start of each game and once a tile has been added it has the same animation as the game tiles, this shows the player that they are also intereactive game parts and if the player clicks on a tile they have added to thier answer it can be removed, in case they have made an error.

![Screenshot of players word box](/assets/images/player-word-box.jpg)

### Game buttons <a name="game-buttons"></a>

The game buttons are the two buttons which can be clicked by the player to control the flow of the game, the start game button to start a new game and the submit word button to use when they have finished their word. Both of the buttons have an animation on them to communicate to the player that they are interactive elements.

![Screenshot of game buttons](/assets/images/game-buttons.jpg)

### Game title <a name="game-title"></a>

The game title is the header of the pages and shows the logo for the game, it is there as a visual reminder to the player of the game what game they are playing.

![Screenshot of game title](/assets/images/game-title.jpg)

### Scoreboard <a name="scoreboard"></a>

The scoreboard holds two pieces of information which are updated as the player is playing, the timer which countdowns the time in which they have to complete the game, this adds challenge for the player. The high score is also visible in the scoreboard which displays the players highest score from the current session, this adds engagement as the player attempts to beat any previous scores they have.

![Screenshot of scoreboard](/assets/images/scoreboard.jpg)

### Correct word modals <a name="correct-word-modals"></a>

The correct word modals are displayed after the player succesfully submits a word during the game, a variety of modals exist, each displaying the word they entered and the score it received, this is calculated by the length of the word and the time in which it took them to create it. When the player scores a different rating of stars are achieved, the higher the score the more stars. This star rating enhances the replayability as players strive to achieve a higher rating.
The modal contains a let's play again button the allow the player to close the modal and play another game. This button has the same animation as the other player interactive objects, ensuring they know it is clickable.

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
### title of feature <a name=""></a>
![]()


## Technologies used <a name="technologies-used"></a>

This Project uses the following languages:

* HTML
* CSS
* JavaScript

[Google Fonts](https://fonts.google.com/) was used to browse, select and as a source of the font I used on this site.

[FontAwesome](https://fontawesome.com/) was used for the stars on the correct word modals.

[Git](https://git-scm.com/) and [GitHub](https://github.com/) for version control and as a repository.

## Credits <a name="credits"></a>
The [CSS documentation at mdn web docs](https://developer.mozilla.org/en-US/docs/Web/CSS) was used as a reference point during the creation of the website and when creating shadow effects.

When creating my README I used the website [makeareadme.com](https://www.makeareadme.com/) and the following [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) from GitHub to assist.

When creating the timer for the game in JavaScript is used [this blog on elated.com](https://www.elated.com/javascript-timers-with-settimeout-and-setinterval/) for learning about setInterval() and setTimeout().

When creating the modals for the game I used [this site](https://webdesign.tutsplus.com/how-to-build-flexible-modal-dialogs-with-html-css-and-javascript--cms-33500t) for learning to create modals .


When learning how to truly randomise my array of letters I used [this site](https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj) to learn about the Fisher-Yates shuffle.

For learning how to animate shadows i used [this site](https://css-tricks.com/getting-deep-into-shadows/).

The large black background had some visual noise texture added to it to break up the large block of colour, this was created using [noise texture generator](https://www.noisetexturegenerator.com/)

When I discovered the DOMSubtreeModified event listener need to be replaced I used [this site](https://developer.chrome.com/blog/mutation-events-deprecation/) and [this site](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to learn about mutation events.

## Testing  <a name="testing"></a>
s
### Bugs <a name="bugs"></a>

#### Bug fix
game timer ran twice as fast second time as previous interval timer was still running

could submit word multiple times
### Code Validation <a name="code-validation"></a>
#### CSS code validation <a name="css-code-validation"></a>
![css]()
#### HTML code validation <a name="HTML-code-validation"></a>
![html]()
#### JavaScript code validation <a name="javascript-code-validation"></a>
![javascript code validation before]()

### Lighthouse testing <a name="lighthouse-testing"></a>

### Manual testing <a name="manual-testing"></a>
   
#### Testing across different devices and browsers  <a name="testing-devices-browsers"></a>

Browser | Outcome | Pass/Fail  


* Common Elements Testing

- General

    Feature | Outcome | Pass/Fail
    --- | --- | ---


#### Tested X

 * 
 * 
 * 

 <br>

### Testing user stories  <a name="testing-stories"></a>


## Deployment <a name="deployment"></a>

This project was developed using Microsoft Visual Studio Code, committed to Git and 
pushed to GitHub using the terminal with in VScode.

The final Live version of site is hosted on GitPages [here]() 

This is achieved by:

 1. logging into GitHub
 2. navigating to the repository you would like to create a site for
 3. at the top of the repository clicking the settings icon
 4. on the left hand side of the settings page click the pages section
 5. under source click the dropdown and select master branch
 6. once the page refreshes there will be a link to your site, click this

Detailed instructions on how to create a site on GitHub pages can be found [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## Finished site  <a name="finished-site"></a>

###  <a name=""></a>

![screenshot]()




