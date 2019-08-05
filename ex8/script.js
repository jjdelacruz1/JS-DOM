/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

// Adding the tasks that are entered by clicking the button

var button = document.getElementById("add-button");

button.addEventListener('click', function(){
    var newTodo = document.createElement("li");
    var inputValue = document.getElementById("description").value;
    newTodo.appendChild(document.createTextNode(inputValue));
    newTodo.classList.add("new");
    document.getElementById("todo-list").appendChild(newTodo);
    var form = document.getElementById("description");
    form.value = '';
})

var itemDone = document.querySelector('ul');
itemDone.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle("done");
    }
})







