// console.log("working");
let todoArray = [
    // {
    //     item: 'zaman',
    //     id: Math.random() * 20000
    // }, {
    //     item: 'zain',
    //     id: Math.random() * 20000
    // },
];
let input = document.getElementById('inputValue');
let button = document.getElementById('submitButton')
let todoList = document.getElementById('todoList')
// console.log(todoArray);
button.addEventListener("click", function addFunction() {
    // alert(input.value);
    // let item = input.value
    // let id = Math.random() * 20000
    // todoArray.unshift({
    //     item,
    //     id
    // })
    // todoArray.push({
    //     item,
    //     id
    // })
    let obj = {
        item: input.value,
        id: Math.random() * 20000
    }
    // todoArray.push(obj)
    todoArray.unshift(obj)
    showTodo()
});

// button.onclick = showTodo()

const showTodo = () => {
    todoArray.map((doc, index) => {
        let newLi = document.createElement('li');
        let delBtn = document.createElement("button");
        delBtn.innerHTML = "Delete";
        // newLi.innerText = todoArray[index].item
        newLi.innerText = doc.item
        todoList.appendChild(newLi)
        newLi.appendChild(delBtn)
        // console.log(doc);
    })
}