//print what's in the textbox to the console
// 1. detect when add button is pressed
const add = document.getElementById('submit');
const list = document.getElementById('list');

//2. Get what's in the textbox when Add is clicked
const getToDoItem = ()=>{
    let todoText = document.getElementById('todo');
    return todoText.value;
}

// 3. Add todo list item in the DOM when Add is clicked
const addToDoItem = ()=>{
    let text = getToDoItem();
    let node = '<li class="list-item"><span class="list-text">'+text+'</span><i class="fas fa-trash-alt"></i></li>';
    list.insertAdjacentHTML("afterbegin", node);
}

add.addEventListener('click',addToDoItem);
