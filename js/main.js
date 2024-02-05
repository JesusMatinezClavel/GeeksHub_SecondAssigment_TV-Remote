/////////////////////////////////////////////////////////////////////// DECLARACIONES


const screen = document.getElementById("tvScreen")
const chButtons = document.getElementsByClassName("chButton")

const channel1 = document.getElementById("channel1")
const channel2 = document.getElementById("channel2")
const channel3 = document.getElementById("channel3")
const channel4 = document.getElementById("channel4")
const channel5 = document.getElementById("channel5")
const channel6 = document.getElementById("channel6")
const channel7 = document.getElementById("channel7")
const channel8 = document.getElementById("channel8")
const channel9 = document.getElementById("channel9")
const channel0 = document.getElementById("channel0")

let channelList = [channel1, channel2, channel3, channel4, channel5, channel6, channel7, channel8, channel9, channel0]

let buttonsList = Array.from(chButtons)

let IO = document.getElementById("ioButton")

let originalState = screen.classList.value
let originalChannelState = channelList.map(channel => channel.classList.value)

let on


/////////////////////////////////////////////////////////////////////// FUNCIONES

// FUNCION PARA ENCENDER Y APAGAR LA TV
function screenOnOff() {
    screen.classList.toggle("off");
}

// FUNCION PARA CAMBIAR EL ESTADO DE ON
function update() {
    !screen.classList.contains("off")
        ? on = true
        : on = false
}


let buttonIndexLast = -1


// FUNCION PARA AÑADIR Y QUITAR A LOS CANALES DE LA CLASE INDEX2
function buttonClick(e) {
    const buttonIndex = buttonsList.indexOf(e.target)
    if (buttonIndexLast !== -1) {
        channelList[buttonIndexLast].classList.remove("index2")
    }
    channelList[buttonIndex].classList.add("index2");
    buttonIndexLast = buttonIndex
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
        channelList[buttonIndexLast].className = originalChannelState
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