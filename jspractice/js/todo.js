const addTodo = document.querySelector("#add-todo");
console.log(addTodo)
addTodo.addEventListener("click", function () {
    const todoInput = document.querySelector("#todo-input");
    let value = todoInput.value;
    if (value != "") {
        console.dir(value)
        const itemList = document.querySelector("#item-list")
        const item = document.createElement("li");
        item.textContent = value
        console.log(item);
        itemList.append(item);
        todoInput.value = ""
    } else {
        alert("value could not be blank")
    }
})