const screen = document.getElementById("tvScreen")
const chButtons = document.getElementsByClassName("chButton")

let buttonsList = Array.from(chButtons)

let IO = document.getElementById("ioButton")

let on = false

function update() {
    !screen.classList.contains("off")
        ? on = true
        : on = false
}

IO.addEventListener("click", (e) => {
    screen.classList.toggle("off");
    update()
    if (on == true) {
        buttonsList.forEach(
            (item, index) => {
                item.addEventListener("click", (e) => {
                    screen.classList.remove(screen.classList[screen.classList.length - 1])
                    screen.classList.add("ch" + e.target.id.slice(-1))
                })
            }
        )
    } else {
            screen.classList.toggle("off");
            update()
    }
});

