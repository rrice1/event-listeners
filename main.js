const toDoInputElem = document.getElementById("toDoInput");
const notesInputElem = document.getElementById("notesInput");

const submitToDoButtonElem = document.getElementById("submitToDo");

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const activateDeletes = () => {
    const deleteButtons = document.getElementsByClassName('deleteButton'); //why do we not have to put in btn btn-primary deleteButton
    for (let i=0;i<deleteButtons.length;i++){                               //why are we making functions inside these event listeners
        const element = deleteButtons[i];
        element.addEventListener("click", (e) => {
            //card that the button was on
            const buttonIClicked = e.target;
            const cardToDelete = buttonIClicked.parentNode.parentNode;
            cardToDelete.remove();
        })
    }
}


const buildNewToDoCard = (toDo, notes) => {
let domString = `<div class="card w-25 m-2" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">${toDo}</h5>
  <p class="card-text">${notes}</p>
  <button href="#" class="btn btn-danger deleteButton">Delete this</button>
</div>
</div>`;

    printToDom(domString, 'toDoCards');
    activateDeletes();
}

submitToDoButtonElem.addEventListener("click", (e) => {
    e.preventDefault();//prevents chrome from erasing our console logs

buildNewToDoCard(toDoInputElem.value, notesInputElem.value);
});