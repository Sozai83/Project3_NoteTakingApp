# Note Taking Application
  
## Description
### What does the app do?
This is a simple application where you can take notes.
There is a function to clear the input, delte a note or delete entire notes.
### Functions
* Add notes
* When you click the note card, it will open up the whole note
* Delete a note selected (card and the popup)
* Delete all notes taken
* Clear the input
### How to use the app
1. Access to the [link](https://sozai83.github.io/Project3_NoteTakingApp/).  
2. Add note by typing title and the note, and press "Add" button
3. Remove one note by clicking the trashs can button on the note, or delete all notes by cliking delete all button

### How to build the app
1. Build the frame using HTML and CSS
    * Title "Note Taking App"
    * Input for title
    * Textbox for note
    * Add and Clear button under the note input
    * Area to add notes
    * Note cards (Closed)
    * * Has title and the body gets cut off (CSS)
    * * Has "Delete" button
    * * When you click the card, it will open up and overlays 
    * Note cards (Opened)
    * * Shows full title and full body
    * * Has close button
    * * Has "Delete" button - If this is pressed, it will remove this note and clear this overlay
    * Delete all note button on the bottom

2. Add functions using Javascript
    * When you click "Add" button
    * * Save note title and body
    * * Add it as a note card
    * Clear input title and note body
    * Open up a overlayed window with the note content when you click one of the note
    * Close the overlayed window when close button is clicked
    * Delete the note when delete button is clicked
    * Delete all notes when delete all button is clicked
