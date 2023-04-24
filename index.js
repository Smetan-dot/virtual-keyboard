function init() {
    const title = document.createElement("p");
    title.textContent = "RSS Виртуальная клавиатура";
    title.className = "title";
    document.body.appendChild(title);

    const textArea = document.createElement("textarea");
    textArea.className = "text-window";
    document.body.appendChild(textArea);

    const keyboard = document.createElement("div");
    keyboard.className = "keyboard-container";
    document.body.appendChild(keyboard);

    const systemDescription = document.createElement("p");
    systemDescription.textContent = "Клавиатура создана в операционной системе Windows";
    systemDescription.className = "description";
    document.body.appendChild(systemDescription);

    const languageDescription = document.createElement("p");
    languageDescription.textContent = "Для переключения языка комбинация: левыe ctrl + alt";
    languageDescription.className = "description";
    document.body.appendChild(languageDescription);
}  // creating form for virtual keyboard

init();

const keyboardContainer = document.querySelector(".keyboard-container");
const keyboardKeysEn = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", 
                        "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", 
                        "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", 
                        "Lshift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Rshift", 
                        "Lctrl", "Win", "Lalt", " ", "Ralt", "◄", "▼", "►", "Rctrl"];
const keyboardKeysRu = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", 
                        "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", 
                        "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", 
                        "Lshift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Rshift", 
                        "Lctrl", "Win", "Lalt", " ", "Ralt", "◄", "▼", "►", "Rctrl"];

const keyboardKeysEnShift = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", 
                        "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del", 
                        "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter", 
                        "Lshift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Rshift", 
                        "Lctrl", "Win", "Lalt", " ", "Ralt", "◄", "▼", "►", "Rctrl"];
const keyboardKeysRuShift = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace", 
                        "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del", 
                        "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", 
                        "Lshift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Rshift", 
                        "Lctrl", "Win", "Lalt", " ", "Ralt", "◄", "▼", "►", "Rctrl"];

let language;
function setLocalStorage() {
    localStorage.setItem("language", language);
}
window.addEventListener('beforeunload', setLocalStorage);  // set language

function getLocalStorage() {
    if(localStorage.getItem("language")) {
      language = localStorage.getItem("language");
    }
  }
window.addEventListener('load', getLocalStorage()); // get language 

function createKeys() {
    if(language === undefined) language = "en";
    createLayout(keyboardKeysEn, "en");
    createLayout(keyboardKeysRu, "ru");
    createLayout(keyboardKeysEnShift, "enShift");
    createLayout(keyboardKeysRuShift, "ruShift");

    if(language === "en") document.querySelectorAll(".ru").forEach((el) => {
        el.classList.add("hidden");
    })
    if(language === "ru") document.querySelectorAll(".en").forEach((el) => {
        el.classList.add("hidden");
    })

    document.querySelectorAll(".enShift").forEach((el) => {
        el.classList.add("hidden");
    })
    document.querySelectorAll(".ruShift").forEach((el) => {
        el.classList.add("hidden");
    })
}  // creating buttons in keyboard-container (2 languages)

function createLayout(data, type) {
    data.forEach((element) => {
    const keyElement = document.createElement("div");
        keyElement.textContent = element;
        keyElement.className = "key";
        keyElement.classList.add(type);
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

let textWindow = document.querySelector(".text-window");
const keys = document.querySelectorAll(".key");
const keysRu = document.querySelectorAll(".ru");
const keysEn = document.querySelectorAll(".en");
const keysRuShift = document.querySelectorAll(".ruShift");
const keysEnShift = document.querySelectorAll(".enShift");

function pressKey() {
    document.body.addEventListener("keydown", function(event) {
        event.preventDefault();
        if(language === "en") {
            actionsForKeys(keysEn, keysEnShift, event);
        }
        if(language === "ru"){
            actionsForKeys(keysRu, keysRuShift, event);
        }
    })

    document.body.addEventListener("keyup", function(event) {
        for(let j = 0; j < keys.length; j++) {
            if(keys[j].textContent !== "CapsLock") keys[j].classList.remove("press");
            if(keys[j].textContent === "Lshift" && event.code === "ShiftLeft" || 
               keys[j].textContent === "Rshift" && event.code === "ShiftRight") {
                   if(language === "en") {
                       keysEnShift.forEach((el) => {
                           el.classList.add("hidden");
                       })
                       keysEn.forEach((el) => {
                           el.classList.remove("hidden");
                       })
                   }
                   if(language === "ru") {
                       keysRuShift.forEach((el) => {
                           el.classList.add("hidden");
                    })
                       keysRu.forEach((el) => {
                           el.classList.remove("hidden");
                    })
                }
            }
        }
    })
}    // physical press keys on keyboard

pressKey();

function actionsForKeys(keys, data, event) {
    for(let i = 0; i < keys.length; i++) {
        if(keys[i].textContent === event.key.toLowerCase() && keys[i].textContent !== "Enter" && 
           keys[i].textContent !== "CapsLock" && keys[i].textContent !== "Backspace" && 
           keys[i].textContent !== "Tab" && keys[i].textContent !== " " && event.shiftKey) {
               keys[i].classList.add("press");
               textWindow.textContent += event.key;
           }
        if(keys[i].textContent === event.key && keys[i].textContent !== "Enter" && 
           keys[i].textContent !== "CapsLock" && keys[i].textContent !== "Backspace" && 
           keys[i].textContent !== "Tab") {
               keys[i].classList.add("press");
               textWindow.textContent += event.key;
        }
        if(keys[i].textContent === event.key && keys[i].textContent === "CapsLock") {
            keys[i].classList.toggle("press");
        }
        if(keys[i].textContent === event.key && keys[i].textContent === "Enter") {
            keys[i].classList.add("press");
            textWindow.textContent += "\n";
        }
        if(keys[i].textContent === event.key && keys[i].textContent === "Tab") {
            keys[i].classList.add("press");
            textWindow.textContent += "    ";
        }
        if(keys[i].textContent === event.key && keys[i].textContent === "Backspace") {
            keys[i].classList.add("press");
            textWindow.textContent = textWindow.textContent.slice(0, -1);
        }
        if(keys[i].textContent === "Lshift" && event.code === "ShiftLeft" || 
           keys[i].textContent === "Rshift" && event.code === "ShiftRight"){
               keys[i].classList.add("press");
               keys.forEach((el) => {
                   el.classList.add("hidden");
               })
               data.forEach((el) => {
                   el.classList.remove("hidden");
               })
           } 
        if(keys[i].textContent === "Lalt" && event.code === "AltLeft" || 
           keys[i].textContent === "Ralt" && event.code === "AltRight" || 
           keys[i].textContent === "Lctrl" && event.code === "ControlLeft" || 
           keys[i].textContent === "Rctrl" && event.code === "ControlRight" || 
           keys[i].textContent === "Del" && event.code === "Delete" || 
           keys[i].textContent === "Win" && event.code === "MetaLeft") keys[i].classList.add("press");
        if(keys[i].textContent === "▲" && event.code === "ArrowUp" || 
           keys[i].textContent === "◄" && event.code === "ArrowLeft" || 
           keys[i].textContent === "▼" && event.code === "ArrowDown" || 
           keys[i].textContent === "►" && event.code === "ArrowRight") {
               keys[i].classList.add("press");
               textWindow.textContent += keys[i].textContent;
        }
    }
} // TODO: win and del functionality

function clickOnKey() {
    for(let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("mousedown", function() {
            if(keys[i].textContent === "CapsLock") keys[i].classList.toggle("press");
            else keys[i].classList.add("press");
            if(keys[i].textContent === "Enter") textWindow.textContent += "\n";
            else if(keys[i].textContent === "Backspace") textWindow.textContent = textWindow.textContent.slice(0, -1);
            else if(keys[i].textContent === "Tab") textWindow.textContent += "    ";
            else if(keys[i].textContent === "CapsLock" || keys[i].textContent === "Win" || 
                    keys[i].textContent === "Lalt" || keys[i].textContent === "Ralt" || 
                    keys[i].textContent === "Lctrl" || keys[i].textContent === "Rctrl" || 
                    keys[i].textContent === "Del");
            else if(keys[i].textContent === "Lshift" || keys[i].textContent === "Rshift") {
                if(language === "en") {
                    keysEnShift.forEach((el) => {
                        el.classList.remove("hidden");
                    })
                    keysEn.forEach((el) => {
                        el.classList.add("hidden");
                    })
                }
                if(language === "ru") {
                    keysRuShift.forEach((el) => {
                        el.classList.remove("hidden");
                    })
                    keysRu.forEach((el) => {
                        el.classList.add("hidden");
                    })
                }
            }
            else textWindow.textContent += keys[i].textContent;
        })
    }

    for(let j = 0; j < keys.length; j++) {
        keys[j].addEventListener("mouseup", function() {
            if(keys[j].textContent !== "CapsLock") keys[j].classList.remove("press");
            if(keys[j].textContent === "Lshift" || keys[j].textContent === "Rshift") {
                if(language === "en") {
                    keysEnShift.forEach((el) => {
                        el.classList.add("hidden");
                    })
                    keysEn.forEach((el) => {
                        el.classList.remove("hidden");
                    })
                }
                if(language === "ru") {
                    keysRuShift.forEach((el) => {
                        el.classList.add("hidden");
                    })
                    keysRu.forEach((el) => {
                        el.classList.remove("hidden");
                    })
                }
            }
        })
    }
}    // mouse-click at virtual keyboard

clickOnKey();

function changeLanguage() {
    if(language === "en") {
        language = "ru";
        document.querySelectorAll(".en").forEach((el) => {
            el.classList.add("hidden");
        })
        document.querySelectorAll(".ru").forEach((el) => {
            el.classList.remove("hidden");
        })
    }
    else {
        language = "en";
        document.querySelectorAll(".ru").forEach((el) => {
            el.classList.add("hidden");
        })
        document.querySelectorAll(".en").forEach((el) => {
            el.classList.remove("hidden");
        })
    }
}

function checkPressedKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener("keydown", function(event) {
        pressed.add(event.code);

        for(let code of codes) {
            if(!pressed.has(code)) return;
        }

        pressed.clear();
        func();
    })

    document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
      });
} // change language 

checkPressedKeys(changeLanguage, "AltLeft", "ControlLeft");