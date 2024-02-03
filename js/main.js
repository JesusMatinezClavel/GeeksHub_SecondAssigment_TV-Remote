const screen = document.getElementById("tvScreen")
const chButtons = document.getElementsByClassName("chButton")

let buttonsList = Array.from(chButtons)

let IO = document.getElementById("ioButton")

let originalState = screen.classList.value

let on = false

function update() {
    !screen.classList.contains("off")
        ? on = true
        : on = false
}

function buttonClick(e) {
    screen.classList.remove(screen.classList[screen.classList.length - 1])
    screen.classList.add("ch" + e.target.id.slice(-1))

}

IO.addEventListener("click", (e) => {
    screen.classList.toggle("off");
    update()
    if (on == true) {
        buttonsList.map(
            (item, index) => {
                item.addEventListener("click", buttonClick)
            }
        )
    } else {
        screen.className = originalState
        buttonsList.map(
            (item, index) => {
                item.removeEventListener("click", buttonClick)
            }
        )
    }
});