document.body.style.textAlign = "center"
document.body.style.display = "flex"
document.body.style.justifyContent = "center"
document.body.style.flexDirection = "column"

const arr = [
    // {
    //     text: "buy some drugs",
    //     done: false
    // },

    // {
    //     text: "don't forget use some drugs",
    //     done: false
    // },

    // {
    //     text: "don't die from drugs",
    //     done: false
    // }
]

// функция для обхода массива со списком задач через цикл
render = (arr) => {
    let list = document.getElementById("list")
    list.textContent = ""

    for (i = 0; i < arr.length; i++) {
        let li = document.createElement("li")
        li.textContent = arr[i].text
        li.style.fontSize = "30px"
        li.style.fontFamily = "Andale Mono, monospace"
        li.style.color = "darkblue"
        li.style.paddingTop = "20px"
        li.style.display = "flex"
        li.style.justifyContent = "space-between"
        li.style.alignItems = "center"

        // кнопка удаления задачи
        let dlt = document.createElement("button")
        dlt.style.backgroundColor = "darkred"
        dlt.style.height = "30px"
        dlt.style.color = "white"
        dlt.textContent = "Удалить"
        dlt.addEventListener("click", (e) => {
            e.target.parentElement.remove()
        })

        // непонятный момент... не зачеркивается текст
        let input = document.createElement("input")
        input.type = "checkbox"
        input.checked = arr[i].done
        if (input.checked) {
            li.style.textDecoration = "line-through"
        } else li.style.textDecoration = "none"
        input.addEventListener('click', () => {
            checkTodo(i)
            if (!input.checked) {
                e.target.parentElement.style.textDecoration = "none"
            } e.target.parentElement.style.textDecoration = "line-through"
        })

        li.prepend(input)
        li.append(dlt)
        list.append(li)
    }
}

// функция удаления задач по индексу
remove = (index) => {
    if (index >= 0) {
        arr.splice(index, 1)
        render(arr)
    }
}

// функция добавления новых задач к списку задач
addTodo = (newTodoText) => {
    arr.push({
        text: newTodoText,
        done: false
    })
    render(arr)
}

// addTodo('новый текст из addTodo')

// функция отметки задач завершенным по индексу
checkTodo = (i) => {
    arr[i].done = !arr[i].done
    render(arr)
}

// кнопка добавления задачи
let btn = document.getElementById("btn")
btn.style.borderRadius = "5px"
btn.style.height = "36px"
btn.style.border = "2px solid black"
btn.style.backgroundColor = "lightblue"
btn.addEventListener('click', () => {
    if (input.value !== "") {
        addTodo(input.value)
        input.value = ""
        input.focus()
    }
})

// let input = document.getElementById("input")
input.style.borderRadius = "5px"
input.style.height = "30px"
input.style.width = "350px"
input.style.border = "2px solid black"
input.style.backgroundColor = "lightblue"