const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

// Functions

function addItem (e) {
    e.preventDefault();

    const newText = itemInput.value;

    if (newText === '') {
        itemInput.style.borderColor = 'red';
        itemInput.placeholder = 'Enter an Item please';
        itemInput.style.backgroundColor = 'red'
        return
    } 

    itemInput.style.borderColor = '#ccc';
    itemInput.placeholder = 'Enter Item';
    itemInput.style.backgroundColor = 'white';

    const newLi = document.createElement('li');
    const button = createButton('remove-item btn-link text-red');

    newLi.appendChild(document.createTextNode(newText));
    newLi.appendChild(button);
        
    function createButton(classes) {
        const button = document.createElement('button');
        const i = createI('fa-solid fa-xmark');
        button.className = classes;
        button.appendChild(i);
        return button
    }

    function createI(classes) {
        const i = document.createElement('i');
        i.className = classes;
        return i
    }
    
    
    itemList.appendChild(newLi);
    itemInput.value = null;
    
}


// Event Listeners

itemForm.addEventListener('submit', addItem)

