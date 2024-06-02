# MP2-Word-Game

![Screenshot of game on different devices](/assets/images/word-game-2.jpg)

Word Game is a fun game to practice your English language skills, similair in concept to the popular letters game from Countdown.

This website is designed to challenge yourself to show off your quick thinking and see how high you can score! 

Live version of site hosted on GitPages [here](https://ian-blanshard.github.io/MP2-Word-Game/)

## Contents

1 [User Experience (UX)](#UX)

  * [Project Goals](#project-goals)
  * [User Stories](#user-stories)
  * [Wireframes](#wireframes)
  * [Colour Scheme and Font](#styles)

2 [Features](#features)

  * [x](#x)
 
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

*  Understand how to play the game

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
![](/assets/images/instruction-modal.jpg)
### Game screen <a name="game-screen"></a>
![](/assets/images/game-screen.jpg)
### Game tiles grid <a name="game-tiles-grid"></a>
![](/assets/images/game-tiles.jpg)
### Players word box <a name="players-word-box"></a>
![](/assets/images/player-word-box.jpg)
### Game buttons <a name="game-buttons"></a>
![](/assets/images/game-buttons.jpg)
### Game title <a name="game-title"></a>
![](/assets/images/game-title.jpg)
### Scoreboard <a name="scoreboard"></a>
![](/assets/images/scoreboard.jpg)
### Correct word modals <a name="correct-word-modals"></a>
![](/assets/images/one-star-modal.jpg)
![](/assets/images/correct-word-modal.jpg)
![](/assets/images/three-star-modal.jpg)
### Not a word modal <a name="not-a-word-modal"></a>
![](/assets/images/not-a-word-modal.jpg)
### Word too short modal <a name="word-too-short-modal"></a>
![](/assets/images/word-too-short-modal.jpg)
### title of feature <a name=""></a>
![]()


## Technologies used <a name="technologies-used"></a>

This Project uses the following languages:

* HTML
* CSS
* JavaScript

## Credits <a name="credits"></a>

for learning about setInterval() and setTimeout() in creating the timer element
https://www.elated.com/javascript-timers-with-settimeout-and-setinterval/

for learning to create modal 
https://webdesign.tutsplus.com/how-to-build-flexible-modal-dialogs-with-html-css-and-javascript--cms-33500t

for learning to shuffle an array
https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj

using shadows for boxes and letters
https://css-tricks.com/getting-deep-into-shadows/

https://www.noisetexturegenerator.com/

https://developer.chrome.com/blog/mutation-events-deprecation/
https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver


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
![javascript]()

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




