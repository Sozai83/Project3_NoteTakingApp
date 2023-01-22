const clearNoteBtn = document.getElementById('clear-note-input');
const addNoteBtn = document.getElementById('add-note-input');
const inputTitle = document.getElementsByClassName('input-note-title');
const inputBody = document.getElementsByClassName('input-note-body')


// Get the value of title and the text

// Clear the value of title and the text
const clearNote = function(){
    inputTitle[0].value = '';
    inputBody[0].value = '';
}


// Ditect when clear and add button is clicked
clearNoteBtn.addEventListener('click', clearNote);
addNoteBtn.addEventListener('click', function(){console.log('Add Note button is clicked')});