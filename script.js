const clearNoteBtn = document.getElementById('clear-note-input');
const addNoteBtn = document.getElementById('add-note-input');
const inputTitle = document.getElementsByClassName('input-note-title');
const inputBody = document.getElementsByClassName('input-note-body');
const noteCard = document.getElementById('note-cards-title');
const noteCardContainer = document.getElementById('note-card-container');
const deleteAllNoteBtn = document.getElementById('delete-all');
const overLay = document.getElementById('overlay');
const overLayNote = document.getElementById('overlay-note');

let noteList = [];

class Note {
    constructor() {
      this.title = 'title';
      this.body = 'body'
    }
}

const addNote = function(){
    //  Get the value of title and the text
    let title = inputTitle[0].value;
    let body = inputBody[0].value;
    if (title.length != 0 && body.length != 0){
        // If the noteList is empty, return note-1
        // If not, it will take the id of the last element and add 1 (i.e. last id = note-2 => note-3)
        let id = noteList.length == 0 ? 
        'note-1' :
        'note-' + (parseInt(noteList[noteList.length-1].id.slice(noteList[noteList.length-1].id.indexOf('-') + 1)) + 1);

        // Creates tempObj of Note
        let tempObj = new Note();
        tempObj.title = title;
        tempObj.body = body;
        tempObj.id = id;

        // Push the tempObj at the end of the array
        noteList.push(tempObj);

        clearNote();
        renderNoteCards(noteList[noteList.length - 1]);
    }
}

// Clear the value of title and the text
const clearNote = function(){
    inputTitle[0].value = '';
    inputBody[0].value = '';
}

// Create note card
const renderNoteCards = function(item){
    let noteHtml = `<div class="note-card" id="${item.id}"><div class="title">${item.title}</div><div class="body">${item.body}</div><button class="show-full">Show Full Note</button><button class="delete">Delete</button></div>`
    noteCardContainer.insertAdjacentHTML('afterbegin', noteHtml);
}

// delete note
const deleteNote = function(e){
    const hasClass = e.target.classList.contains('delete');
    if (hasClass){
        const tempNoteCard =  e.target.parentNode;
        const tempNoteId = tempNoteCard.id;
        tempNoteCard.remove();
        noteList = noteList.filter(note=> note.id !== tempNoteId);
    }
}

// delete all note
const deleteAllNote = function(){
    noteList = [];
    noteCardContainer.innerHTML='';
}

const expandNotes = function(e){
    const hasClass = e.target.classList.contains('show-full');
    if (hasClass){
        const tempNoteCard =  e.target.parentNode;
        const tempNoteId = tempNoteCard.id;
        const tempExpandNote = noteList.filter(note=> note.id == tempNoteId)[0];
        overLay.classList.remove('hidden');

        const noteHtml = `<div class="note-overLay" id="${tempExpandNote.id}"><div class="title">${tempExpandNote.title}</div><div class="body">${tempExpandNote.body}</div><button class="show-full">Show Full Note</button><button class="delete">Delete</button></div>`
        overLayNote.insertAdjacentHTML('afterbegin', noteHtml);
    }
}

// Ditect when clear and add button is clicked
clearNoteBtn.addEventListener('click', clearNote);
addNoteBtn.addEventListener('click', addNote);
deleteAllNoteBtn.addEventListener('click', deleteAllNote);
noteCardContainer.addEventListener('click', deleteNote);
noteCardContainer.addEventListener('click', expandNotes);