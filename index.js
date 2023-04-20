function init() {
    const title = document.createElement("p");
    title.innerHTML = "RSS Виртуальная клавиатура";
    title.className = "title";
    document.body.appendChild(title);

    const textArea = document.createElement("textarea");
    textArea.className = "text-window";
    document.body.appendChild(textArea);

    const keyboard = document.createElement("div");
    keyboard.className = "keyboard-container";
    document.body.appendChild(keyboard);

    const systemDescription = document.createElement("p");
    systemDescription.innerHTML = "Клавиатура создана в операционной системе Windows";
    systemDescription.className = "description";
    document.body.appendChild(systemDescription);

    const languageDescription = document.createElement("p");
    languageDescription.innerHTML = "Для переключения языка комбинация: левыe ctrl + alt";
    languageDescription.className = "description";
    document.body.appendChild(languageDescription);
}

init();

const keyboardContainer = document.querySelector(".keyboard-container");
const keyboardKeys = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", 
                      "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", 
                      "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", 
                      "Lshift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Rshift", 
                      "Lctrl", "Win", "Lalt", " ", "Ralt", "◄", "▼", "►", "Rctrl"];

function createKeys() {
    keyboardKeys.forEach((element) => {
        const keyElement = document.createElement("div");
        keyElement.innerHTML = element;
        keyElement.className = "key";
        if(element === "Backspace" || element === "CapsLock" || element === "Enter" ||
           element === "Lshift" || element === "Rshift") keyElement.classList.add("wide");
        if(element === "Tab" || element === "Del" || element === "Lctrl" || element === "Rctrl" || 
           element === "Lalt" || element === "Ralt" || element === "Win" || element === "▲" || 
           element === "◄" || element === "▼" || element === "►") keyElement.classList.add("dark");
        if(element === " ") keyElement.classList.add("super-wide");
        keyboardContainer.appendChild(keyElement);
    })
}

createKeys();

const keys = document.querySelectorAll(".key");

function clickOnKey(){
    document.body.addEventListener("keydown", function(event) {
        for(let i = 0; i < keys.length; i++) {
            if(keys[i].innerHTML === event.key) keys[i].classList.add("press");
            if(keys[i].innerHTML === "Lshift" && event.code === "ShiftLeft" || 
               keys[i].innerHTML === "Rshift" && event.code === "ShiftRight" || 
               keys[i].innerHTML === "Lalt" && event.code === "AltLeft" || 
               keys[i].innerHTML === "Ralt" && event.code === "AltRight" || 
               keys[i].innerHTML === "Lctrl" && event.code === "ControlLeft" || 
               keys[i].innerHTML === "Rctrl" && event.code === "ControlRight" || 
               keys[i].innerHTML === "Del" && event.code === "Delete" || 
               keys[i].innerHTML === "Win" && event.code === "MetaLeft" || 
               keys[i].innerHTML === "▲" && event.code === "ArrowUp" || 
               keys[i].innerHTML === "◄" && event.code === "ArrowLeft" || 
               keys[i].innerHTML === "▼" && event.code === "ArrowDown" || 
               keys[i].innerHTML === "►" && event.code === "ArrowRight") keys[i].classList.add("press");
        }
    })

    document.body.addEventListener("keyup", function(event) {
        for(let j = 0; j < keys.length; j++) {
            if(keys[j].innerHTML === event.key) keys[j].classList.remove("press");
            if(keys[j].innerHTML === "Lshift" && event.code === "ShiftLeft" || 
               keys[j].innerHTML === "Rshift" && event.code === "ShiftRight" || 
               keys[j].innerHTML === "Lalt" && event.code === "AltLeft" || 
               keys[j].innerHTML === "Ralt" && event.code === "AltRight" || 
               keys[j].innerHTML === "Lctrl" && event.code === "ControlLeft" || 
               keys[j].innerHTML === "Rctrl" && event.code === "ControlRight" || 
               keys[j].innerHTML === "Del" && event.code === "Delete" || 
               keys[j].innerHTML === "Win" && event.code === "MetaLeft" || 
               keys[j].innerHTML === "▲" && event.code === "ArrowUp" || 
               keys[j].innerHTML === "◄" && event.code === "ArrowLeft" || 
               keys[j].innerHTML === "▼" && event.code === "ArrowDown" || 
               keys[j].innerHTML === "►" && event.code === "ArrowRight") keys[j].classList.remove("press");
        }
    })
}

clickOnKey();