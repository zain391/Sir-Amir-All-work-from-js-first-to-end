let todoArray = [];
let input = document.getElementById('inputValue');
let button = document.getElementById('submitButton')
let deleteBtn = document.getElementById('deleteAll')
let todoList = document.getElementById('todoList')

button.addEventListener("click", function addFunction() {
    let value = input.value.trim()
    if(!value) return
    let obj = {
        item: value,
        // id: Math.random() * 20000
    }
    todoArray.unshift(obj)
    
    showTodo()
    delAll()
    input.value = ""
});

deleteBtn.addEventListener("click", function () {
    // alert("delbutn")
    todoList.innerHTML = ''
    delAll()
})

const delAll = () => {
    // alert("working")
    todoArray.length = 0
}

const delItem = (e) => {
    e.parentNode.remove()
}

const UpdateItem = (e) => {
    let elementVal = e.parentNode.firstChild.nodeValue
    // alert(e.parentNode.firstChild.nodeValue)
    let value = prompt("Update", elementVal)
    e.parentNode.firstChild.nodeValue = value
}

const showTodo = () => {
    todoArray.map((doc, index) => {
        let newLi = document.createElement('li');
        let delBtn = document.createElement("button");
        let UpdateBtn = document.createElement("button");
        delBtn.setAttribute("onclick", `delItem(this)`)
        UpdateBtn.setAttribute("onclick", `UpdateItem(this)`)
        UpdateBtn.innerHTML = "Update";
        delBtn.innerHTML = "Delete";
        newLi.innerText = doc.item
        // delBtn.addEventListener("click", function (this) {
        //     delItem(e, doc.id)
        // })
        todoList.appendChild(newLi)
        newLi.appendChild(delBtn)
        newLi.appendChild(UpdateBtn)
    })
}