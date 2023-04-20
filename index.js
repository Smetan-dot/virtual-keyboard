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