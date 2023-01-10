const add = document.getElementById('submit');
const descriptionValue = document.getElementById('item');
const amountValue = document.getElementById('item_amount');
const list = document.getElementsByClassName('list');
const input = document.getElementsByClassName('expence-input');
const totalAmount = document.getElementById('total_amount');
const deleteButtons = document.querySelectorAll('.delete');
let amountList = [];
let sum = 0;
//Get what's in the textbox when Add is clicked
const getValue = (el)=>{
    return el.value;
}

// Get date value
const getToday = ()=>{
    let d = new Date();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    let year = d.getFullYear();
    return date+'-'+month+'-'+year;
}

//Add todo list item in the DOM when Add is clicked
const addHTML = (desc, amount)=>{
    date = getToday();
    let html = '<tr><td class="date">'+ date +'</td><td class="description">'+ desc +'</td><td class="amount">'+amount+'</td><td class="delete_button"><i class="fas fa-trash-alt delete"></i></td></tr>';
    list[0].insertAdjacentHTML("afterbegin", html);
}

//Remove the value from the text 
const emptyInput = (input)=>{
    input.value="";
}

// Caluculate the sum of the amouts
const calcAmount = arr =>{
    sum = 0;
    arr.forEach(i => sum += i);
    return sum;
}

//Create a function
const addToDoItem = ()=>{
    let description = getValue(descriptionValue);
    let amount = getValue(amountValue);
    if(description.length > 0 && amount.match(/^[1-9]\d*(\.\d{1,2})?$/)){
        addHTML(description,amount);
        amountList.push(parseFloat(amount));
        emptyInput(descriptionValue);
        emptyInput(amountValue);
        totalAmount.textContent = calcAmount(amountList);
    }
}

// Remove element
const removeToDoItem = el =>{
    let item = el.parentNode.parentNode;
    let removeAmount = parseFloat(item.getElementsByClassName('amount')[0].textContent);
    let removeEl = amountList.findIndex(el => el == removeAmount);
    amountList.splice(removeEl,1);
    item.remove();
    totalAmount.textContent = calcAmount(amountList);
}

//When Add button is clicked, add a todo Item
add.addEventListener('click',addToDoItem);

//When Enter button is pressed in input, trigger clicking Add button
input[0].addEventListener('keypress',e =>{
    if(e.key === "Enter"){
        e.preventDefault();
        add.click();
    }
});

// When delete button is clicked, remove the todo item from the list
list[0].addEventListener('click', (e) =>{
    let target = e.target;
    if(target.classList.contains('delete')){
        removeToDoItem(e.target);
    }
});
