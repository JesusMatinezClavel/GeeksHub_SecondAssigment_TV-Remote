/////////////////////////////////////////////////////////////////////// DECLARACIONES


const screen = document.getElementById("tvScreen")
const chButtons = document.getElementsByClassName("chButton")
const screenBackG = document.getElementById("tvScreenBackG")
const channelMenu = document.getElementsByClassName("channelBackG")
const infoBackG = document.getElementById("infoBackG")
const channelName = document.getElementById("channelName")

const ioRemote = document.getElementById("ioRemoteButton")
const menuRemote = document.getElementById("menuButton")
const infoRemote = document.getElementById("infoButton")

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
let channelNameList = ["Netflix", "Amazon", "HBO", "Disney+", "AppleTV", "Deportes", "Noticias", "Cine", "Series", "Música"]

let topButtonsList = [ioRemote, menuRemote, infoRemote]

let buttonsList = Array.from(chButtons)

let channelMenuList = Array.from(channelMenu)

let IO = document.getElementById("ioButton")

let originalState = screen.classList.value
let originalChannelState = channelList.map(channel => channel.className.value)

let on

let buttonIndexLast = -1

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

function menuClick() {
    screenBackG.classList.toggle("index3")
}



function infoClick() {
    infoBackG.classList.add("index4")
    volumeBar.classList.add("index4")
    setTimeout(() => {
        volumeBar.classList.remove("index4")
        infoBackG.classList.remove("index4")
    }, 4000)
}

function nameClick() {
    infoBackG.classList.add("index4")
    setTimeout(() => {
        infoBackG.classList.remove("index4")
    }, 1000)
}


// FUNCION PARA DARLE EVENTOS A LOS BOTONES SUPERIORES (I/O, MENU E INFO)
function buttonClickTop(e) {
    const buttonIndexTop = topButtonsList.indexOf(e.target)
    switch (buttonIndexTop) {
        case 0:
            screenOnOff()
            break;
        case 1:
            menuClick()
            break;
        case 2:
            infoClick()
            break;
    }
}

// FUNCION PARA AÑADIR Y QUITAR A LOS CANALES DE LA CLASE INDEX2 (z-index: 2;)
function buttonClick(e) {
    const buttonIndex = buttonsList.indexOf(e.target)
    screenBackG.classList.remove("index1") && ("index3")
    if (buttonIndexLast !== -1) {
        channelList[buttonIndexLast].classList.remove("index2")
    }
    channelName.textContent = channelNameList[buttonIndex]
    nameClick()
    channelList[buttonIndex].classList.add("index2");
    buttonIndexLast = buttonIndex
    console.log(channelName.classList)
}


function addTopButtonClick() {
    topButtonsList.map(
        (item, index) => {
            item.addEventListener("click", buttonClickTop)
        }
    )
}

function removeTopButtonClick() {
    topButtonsList.map(
        (item, index) => {
            item.removeEventListener("click", buttonClickTop)
        }
    )
}
function toggleTopButtonClick() {
    if (on == true) {
        addTopButtonClick()
    } else {
        screen.className = originalState
        channelList[buttonIndexLast].classList = originalChannelState
        removeTopButtonClick()
    }
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
        if (buttonIndexLast !== -1 && buttonIndexLast < channelList.length) {
            channelList[buttonIndexLast].className = originalChannelState[buttonIndexLast]
        }
        removeButtonClick()
    }
}


/////////////////////////////////////////////////////////////////////// EVENTOS


///////////// EVENTO PARA ENCENDER LA TV Y POSIBILITAR EL RESTO DE FUNCIONES
IO.addEventListener("click", (e) => {
    screenOnOff()
    update()
    toggleChannelClick()
    toggleTopButtonClick()
});
