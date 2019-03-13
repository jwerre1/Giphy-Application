# Giphy-Application
Web application utilizing the GIPHY API

### What is it?
This project displays gifs related to your favorite TV shows. At the top of the screen, a number of blue buttons appear that correspond with a couple of tv shows. After initially loading the screen, clicking one of these bottoms will generate 10 gifs in still mode. Click on any gif will activate it, and subsequently clicking on an active gif will make it return to its still state.

In addition to the blue buttons, a red "clear" button is present, which when pressed will clear the gifs shown. 

On the right-hand side, two form areas are shown. The first is to add your favorite TV show to the list of buttons. Simply write in your desired show and press the submit button directly below. This will create a button for the deisred TV show that acts like the other blue buttons.

Below that is an area where you can write in how many gifs you would like to appear. Any number between 0 and 25 will cause that number of gifs to appear. If you enter a number greater than 25, the website will default to showing 25. If you choose less than 0, it will default to 0.

Please note that changing the number of gifs will update the page accordingly if gifs are already on display, and dictate how many gifs will show up when future blue buttons are pushed until the number is modified.

This website utilizes Twitter Bootstrap, jQuery, and the [Giphy API](https://developers.giphy.com/).

### Project Creation & Maintainence
The project is created and maintained by Jordan Werre.