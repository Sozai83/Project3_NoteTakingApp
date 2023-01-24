const clearNoteBtn = document.getElementById('clear-note-input');
const addNoteBtn = document.getElementById('add-note-input');
const inputTitle = document.getElementsByClassName('input-note-title');
const inputBody = document.getElementsByClassName('input-note-body');
const noteCard = document.getElementById('note-cards-title');

const noteList = [];

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
        createNotes(noteList);
    }
}

// Clear the value of title and the text
const clearNote = function(){
    inputTitle[0].value = '';
    inputBody[0].value = '';
}

// Create note card from the array
const createNotes = function(arr){
    let noteHtml = '';
    noteHtml += '<div class="note-card '+ arr[arr.length - 1].id + '"><div class="title">' + arr[arr.length - 1].title + '</div><div class="body">' + arr[arr.length - 1].body +'</div><button class="show-full">Show Full Note</button><button class="delete">Delete</button></div>'
    console.log(noteHtml);
    noteCard.insertAdjacentHTML('afterend', noteHtml);
}


// Ditect when clear and add button is clicked
clearNoteBtn.addEventListener('click', clearNote);
addNoteBtn.addEventListener('click', addNote);