//target all necessary element
//listen on the input element --> onkeyup
//listen on the btn element --> onclick
//show the list of tasks
//show the number of pending tasks

const inputField = document.querySelector('.new-task-creator input');
const addbutton = document.querySelector('.new-task-creator button');
const todoList = document.querySelector('.todo-list1');
const pendingTask = document.querySelector('.pendingTasks');
const clear = document.querySelector('.clear');

let todoArray = []

inputField.onkeyup = () => {
    let todoValue = inputField.value;

    if (todoValue.trim() != 0) {
        addbutton.classList.add('active')
    } else {
        addbutton.classList.remove('active')
    }
}

displayTasks(); // showing the existing task function

addbutton.addEventListener("click", () => { // what to do when the button is clicked

    console.log("Button clicked!!!")
    // let todoArray = [];

    let todoValue = inputField.value; // get the value from the input
    console.log(todoValue)

    if(todoValue === ""){
        alert("Input cannot be empty!!")
    }
    else{

        todoArray.push(todoValue)
    inputField.value = ""
    // let getLocalStorageTododata = localStorage.getItem("Task list");
    // console.log('local storage', getLocalStorageTododata)

    // if (getLocalStorageTododata == null) { // checkn if local storage is null
    //     todoArray = []
    // } else {
    // todoArray = JSON.parse(getLocalStorageTododata)
    // };



    console.log(todoArray)
    // localStorage.setItem('Task list', JSON.stringify(todoArray))

    displayTasks() // display the list of tasks

    addbutton.classList.remove('active') // remove the active class from the button
    }

    if(todoArray.length !== 0) {

        pendingTask.innerHTML = todoArray.length;      
    } 
})

function displayTasks() { // function to display task
    // let getLocalStorageTododata = localStorage.getItem("Task list");

    // let todoArray;
    // if (getLocalStorageTododata == null) { // checkn if local storage is null
    //     todoArray = []
    // } else {
    //     todoArray = JSON.parse(getLocalStorageTododata)
    // };

    // for (let task of todoArray) {
    //     todoList.innerHTML +=
    //         ` <div class="task">
    //     <input type="checkbox"/>
    //     <label >
    //         <span class="custom-checkbox"></span>
    //         ${task}
    //     </label>
    // </div> `
    // }

    todoList.innerHTML = ""
    todoArray.forEach(task => {
        todoList.innerHTML +=
            ` <div class="task">
    <input type="checkbox"/>
    <label >
        <span class="custom-checkbox"></span>
        ${task}
    </label>
</div> `
    });

}

// ----------------------clear----------
clear.addEventListener('click', ()=> {
    todoArray = [];
    displayTasks()
    pendingTask.innerHTML = 'no'
})

