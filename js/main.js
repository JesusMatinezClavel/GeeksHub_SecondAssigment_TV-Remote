/////////////////////////////////////////////////////////////////////// DECLARACIONES


const screen = document.getElementById("tvScreen")
const chButtons = document.getElementsByClassName("chButton")

let buttonsList = Array.from(chButtons)

let IO = document.getElementById("ioButton")

let originalState = screen.classList.value

let on


/////////////////////////////////////////////////////////////////////// FUNCIONES

// FUNCION PARA ENCENDER Y APAGAR LA TV
function screenOnOff () {
    screen.classList.toggle("off");
} 

// FUNCION PARA CAMBIAR EL ESTADO DE ON
function update() {
    !screen.classList.contains("off")
        ? on = true
        : on = false
}

// FUNCION PARA DARLE UNA FUNCIONALIDAD A LOS BOTONES DE CANALES
function buttonClick(e) {
    screen.classList.remove(screen.classList[screen.classList.length - 1])
    screen.classList.add("ch" + e.target.id.slice(-1))

}

// FUNCION PARA AÑADIR EL BOTON A LOS CANALES
function addButtonClick() {
    buttonsList.map(
        (item, index) => {
            item.addEventListener("click", buttonClick)
        }
    )
}

// FUNCION PARA QUITAR EL BOTON DE LOS CANALES
function removeButtonClick() {
    buttonsList.map(
        (item, index) => {
            item.removeEventListener("click", buttonClick)
        }
    )
}

// FUNCION PARA CONVERTIR LAS ANTERIORES FUNCIONES EN UNA SOLA
function toggleChannelClick() {
    if (on == true) {
        addButtonClick()
    } else {
        screen.className = originalState
        removeButtonClick()
    }
}


/////////////////////////////////////////////////////////////////////// EVENTOS



///////////// EVENTO PARA ENCENDER LA TV Y POSIBILITAR EL RESTO DE FUNCIONES
IO.addEventListener("click", (e) => {
    screenOnOff()
    update()
    toggleChannelClick()
});