const list = document.querySelector("ul")
const input = document.querySelector("#item")
const addButton = document.querySelector("button")

function addListItem() {
    const item = input.value
    input.value = ""

    const li = document.createElement("li")
    const button = document.createElement("button")
    const span = document.createElement("span")

    li.appendChild(span)
    li.appendChild(button)

    span.textContent = item
    button.textContent = "Delete"

    list.appendChild(li)

    button.addEventListener("click", () => {
        li.remove()
    })

    input.focus()
} 

addButton.addEventListener("click", addListItem)