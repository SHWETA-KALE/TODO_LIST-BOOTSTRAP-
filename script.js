// //array for adding the todo task
// let TODOS = []


// let input = document.getElementById("text")
// let addButton = document.getElementById("Addbtn")
// let list = document.getElementById("ListOfTodos")

// let html = ``

// addButton.addEventListener("click", ()=>{
//     html += `<li>${input.value}</li>`
//     list.innerHTML = html
//     TODOS.push(input.value)
// })


// list.addEventListener("click", (e)=>{
// e.target.remove();
// TODOS.pop(e.target)
// })


// ACTUAL PROJ
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")
const addBtn = document.getElementById("addbtn")

addBtn.addEventListener("click", ()=>{
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        const li = document.createElement("li")
        li.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-2", "border", "border-light");

        const taskText = document.createElement("span")
        taskText.innerHTML = inputBox.value
        taskText.classList.add("task-text");
        
        const crossBtn = document.createElement("button")
        crossBtn.innerHTML = 'X'
        crossBtn.classList.add("btn", "btn-danger", "btn-sm" );
        crossBtn.addEventListener("click", ()=>{
            li.remove();
        })
        li.appendChild(taskText);
        li.appendChild(crossBtn)
        listContainer.appendChild(li)
    }
    inputBox.value = ''
})

listContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("task-text")) {
        e.target.classList.toggle("text-decoration-line-through");
    }
});

