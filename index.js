function init() {
  const title = document.createElement('p');
  title.textContent = 'RSS Виртуальная клавиатура';
  title.className = 'title';
  document.body.appendChild(title);

  const textArea = document.createElement('textarea');
  textArea.className = 'text-window';
  textArea.setAttribute('autofocus', 'true');
  document.body.appendChild(textArea);

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard-container';
  document.body.appendChild(keyboard);

  const systemDescription = document.createElement('p');
  systemDescription.textContent = 'Клавиатура создана в операционной системе Windows';
  systemDescription.className = 'description';
  document.body.appendChild(systemDescription);

  const languageDescription = document.createElement('p');
  languageDescription.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
  languageDescription.className = 'description';
  document.body.appendChild(languageDescription);
} // creating form for virtual keyboard

init();

const keyboardContainer = document.querySelector('.keyboard-container');
const keyboardKeysEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Lshift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Rshift',
  'Lctrl', 'Win', 'Lalt', ' ', 'Ralt', '◄', '▼', '►', 'Rctrl'];
const keyboardKeysRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Lshift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Rshift',
  'Lctrl', 'Win', 'Lalt', ' ', 'Ralt', '◄', '▼', '►', 'Rctrl'];

const keyboardKeysEnShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Lshift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Rshift',
  'Lctrl', 'Win', 'Lalt', ' ', 'Ralt', '◄', '▼', '►', 'Rctrl'];
const keyboardKeysRuShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Lshift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Rshift',
  'Lctrl', 'Win', 'Lalt', ' ', 'Ralt', '◄', '▼', '►', 'Rctrl'];

const keyboardKeysEnCaps = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
  'Lshift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Rshift',
  'Lctrl', 'Win', 'Lalt', ' ', 'Ralt', '◄', '▼', '►', 'Rctrl'];
const keyboardKeysRuCaps = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Lshift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Rshift',
  'Lctrl', 'Win', 'Lalt', ' ', 'Ralt', '◄', '▼', '►', 'Rctrl'];

let language;
function setLocalStorage() {
  localStorage.setItem('language', language);
}
window.addEventListener('beforeunload', setLocalStorage); // set language

function getLocalStorage() {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  }
}
window.addEventListener('load', getLocalStorage()); // get language

function createLayout(data, type) {
  data.forEach((element) => {
    const keyElement = document.createElement('div');
    keyElement.textContent = element;
    keyElement.className = 'key';
    keyElement.classList.add(type);
    if (element === 'Backspace' || element === 'CapsLock' || element === 'Enter'
           || element === 'Lshift' || element === 'Rshift') keyElement.classList.add('wide');
    if (element === 'Tab' || element === 'Del' || element === 'Lctrl' || element === 'Rctrl'
           || element === 'Lalt' || element === 'Ralt' || element === 'Win' || element === '▲'
           || element === '◄' || element === '▼' || element === '►') keyElement.classList.add('dark');
    if (element === ' ') keyElement.classList.add('super-wide');
    keyboardContainer.appendChild(keyElement);
  });
} // create 1 case of layout

function createKeys() {
  if (language === undefined) language = 'en';
  createLayout(keyboardKeysEn, 'en');
  createLayout(keyboardKeysRu, 'ru');
  createLayout(keyboardKeysEnShift, 'enShift');
  createLayout(keyboardKeysRuShift, 'ruShift');
  createLayout(keyboardKeysEnCaps, 'enCaps');
  createLayout(keyboardKeysRuCaps, 'ruCaps');

  if (language === 'en') {
    document.querySelectorAll('.ru').forEach((el) => {
      el.classList.add('hidden');
    });
  }
  if (language === 'ru') {
    document.querySelectorAll('.en').forEach((el) => {
      el.classList.add('hidden');
    });
  }

  document.querySelectorAll('.enShift').forEach((el) => {
    el.classList.add('hidden');
  });
  document.querySelectorAll('.ruShift').forEach((el) => {
    el.classList.add('hidden');
  });

  document.querySelectorAll('.enCaps').forEach((el) => {
    el.classList.add('hidden');
  });
  document.querySelectorAll('.ruCaps').forEach((el) => {
    el.classList.add('hidden');
  });
} // creating layouts in keyboard-container (2 languages)

createKeys();

const textWindow = document.querySelector('.text-window');
const keys = document.querySelectorAll('.key');
const keysRu = document.querySelectorAll('.ru');
const keysEn = document.querySelectorAll('.en');
const keysRuShift = document.querySelectorAll('.ruShift');
const keysEnShift = document.querySelectorAll('.enShift');
const keysRuCaps = document.querySelectorAll('.ruCaps');
const keysEnCaps = document.querySelectorAll('.enCaps');

function getCaretPosition(object) {
  object.focus();
  if (object.selectionStart) return object.selectionStart;
  if (document.selection) {
    const sel = document.selection.createRange();
    const clone = sel.duplicate();
    sel.collapse(true);
    clone.moveToElementText(object);
    clone.setEndPoint('EndToEnd', sel);
    return clone.text.length;
  }
  return 0;
} // return position caret in textarea

function actionsForKeys(low, shift, caps, event) {
  for (let i = 0; i < low.length; i += 1) {
    if (low[i].textContent === event.key && low[i].textContent !== 'Enter'
           && low[i].textContent !== 'CapsLock' && low[i].textContent !== 'Backspace'
           && low[i].textContent !== 'Tab' && low[i].textContent !== ' '
           && (shift[42].classList.contains('press') || shift[54].classList.contains('press'))) {
      shift[i].classList.add('press');
      textWindow.setRangeText(shift[i].textContent, getCaretPosition(textWindow), getCaretPosition(textWindow), 'end');
    }
    if (shift[i].textContent === event.key && low[i].textContent !== 'Enter'
           && low[i].textContent !== 'CapsLock' && low[i].textContent !== 'Backspace'
           && low[i].textContent !== 'Tab'
           && (shift[42].classList.contains('press') || shift[54].classList.contains('press'))) {
      shift[i].classList.add('press');
      textWindow.setRangeText(shift[i].textContent, getCaretPosition(textWindow), getCaretPosition(textWindow), 'end');
    }
    if (low[i].textContent === event.key && low[i].textContent !== 'Enter'
           && low[i].textContent !== 'CapsLock' && low[i].textContent !== 'Backspace'
           && low[i].textContent !== 'Tab' && low[i].textContent !== ' ' && low[i].textContent !== '`'
           && low[i].textContent !== '1' && low[i].textContent !== '2' && low[i].textContent !== '3'
           && low[i].textContent !== '4' && low[i].textContent !== '5' && low[i].textContent !== '6'
           && low[i].textContent !== '7' && low[i].textContent !== '8' && low[i].textContent !== '9'
           && low[i].textContent !== '0' && low[i].textContent !== '-' && low[i].textContent !== '='
           && low[i].textContent !== '[' && low[i].textContent !== ']' && low[i].textContent !== '\\'
           && low[i].textContent !== ';' && low[i].textContent !== "'" && low[i].textContent !== ','
           && low[i].textContent !== '.' && low[i].textContent !== '/' && caps[29].classList.contains('press')) {
      caps[i].classList.add('press');
      textWindow.setRangeText(caps[i].textContent, getCaretPosition(textWindow), getCaretPosition(textWindow), 'end');
    }
    if (caps[i].textContent === event.key && low[i].textContent !== 'Enter'
           && low[i].textContent !== 'CapsLock' && low[i].textContent !== 'Backspace'
           && low[i].textContent !== 'Tab' && caps[29].classList.contains('press')) {
      caps[i].classList.add('press');
      textWindow.setRangeText(caps[i].textContent, getCaretPosition(textWindow), getCaretPosition(textWindow), 'end');
    }
    if (low[i].textContent === event.key && low[i].textContent !== 'Enter'
           && low[i].textContent !== 'CapsLock' && low[i].textContent !== 'Backspace'
           && low[i].textContent !== 'Tab' && !(shift[42].classList.contains('press') || shift[54].classList.contains('press'))
           && !caps[29].classList.contains('press')) {
      low[i].classList.add('press');
      textWindow.setRangeText(low[i].textContent, getCaretPosition(textWindow), getCaretPosition(textWindow), 'end');
    }

    if (low[i].textContent === event.key && low[i].textContent === 'CapsLock') {
      low[i].classList.toggle('press');
      low.forEach((el) => {
        el.classList.toggle('hidden');
      });
      caps.forEach((el) => {
        el.classList.toggle('hidden');
      });
      caps[i].classList.toggle('press');
    }
    if (low[i].textContent === event.key && low[i].textContent === 'Enter') {
      low[i].classList.add('press');
      textWindow.setRangeText('\n', getCaretPosition(textWindow), getCaretPosition(textWindow), 'end');
    }
    if (low[i].textContent === event.key && low[i].textContent === 'Tab') {
      low[i].classList.add('press');
      textWindow.setRangeText('    ', getCaretPosition(textWindow), getCaretPosition(textWindow), 'end');
    }
    if (low[i].textContent === event.key && low[i].textContent === 'Backspace') {
      low[i].classList.add('press');
      textWindow.setRangeText('', (getCaretPosition(textWindow) - 1), getCaretPosition(textWindow), 'end');
    }
    if (low[i].textContent === 'Del' && event.code === 'Delete') {
      low[i].classList.add('press');
      textWindow.setRangeText('', getCaretPosition(textWindow), (getCaretPosition(textWindow) + 1), 'end');
    }
    if ((low[i].textContent === 'Lshift' && event.code === 'ShiftLeft') || (low[i].textContent === 'Rshift' && event.code === 'ShiftRight')) {
      low[i].classList.add('press');
      low.forEach((el) => {
        el.classList.add('hidden');
      });
      shift.forEach((el) => {
        el.classList.remove('hidden');
      });
      shift[i].classList.add('press');
    }
    if ((low[i].textContent === 'Lalt' && event.code === 'AltLeft')
           || (low[i].textContent === 'Ralt' && event.code === 'AltRight')
           || (low[i].textContent === 'Lctrl' && event.code === 'ControlLeft')
           || (low[i].textContent === 'Rctrl' && event.code === 'ControlRight')
           || (low[i].textContent === 'Win' && event.code === 'MetaLeft')) low[i].classList.add('press');
    if ((low[i].textContent === '▲' && event.code === 'ArrowUp')
           || (low[i].textContent === '◄' && event.code === 'ArrowLeft')
           || (low[i].textContent === '▼' && event.code === 'ArrowDown')
           || (low[i].textContent === '►' && event.code === 'ArrowRight')) {
      low[i].classList.add('press');
      textWindow.setRangeText(low[i].textContent, getCaretPosition(textWindow), getCaretPosition(textWindow), 'end');
    }
  }
} // physical keybord-keys functionality

function pressKey() {
  document.body.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (language === 'en') {
      actionsForKeys(keysEn, keysEnShift, keysEnCaps, event);
    }
    if (language === 'ru') {
      actionsForKeys(keysRu, keysRuShift, keysRuCaps, event);
    }
  });

  document.body.addEventListener('keyup', (event) => {
    for (let j = 0; j < keys.length; j += 1) {
      if (keys[j].textContent !== 'CapsLock' && keys[j].textContent !== 'Lshift' && keys[j].textContent !== 'Rshift') keys[j].classList.remove('press');
      if ((keys[j].textContent === 'Lshift' && event.code === 'ShiftLeft') || (keys[j].textContent === 'Rshift' && event.code === 'ShiftRight')) {
        keys[j].classList.remove('press');
        if (language === 'en') {
          keysEnShift.forEach((el) => {
            el.classList.add('hidden');
          });
          keysEn.forEach((el) => {
            el.classList.remove('hidden');
          });
        }
        if (language === 'ru') {
          keysRuShift.forEach((el) => {
            el.classList.add('hidden');
          });
          keysRu.forEach((el) => {
            el.classList.remove('hidden');
          });
        }
      }
    }
  });
} // physical press keys on keyboard

pressKey();

function clickOnKey(lang) {
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].addEventListener('mousedown', () => {
      if (keys[i].textContent === 'CapsLock') {
        keys[i].classList.toggle('press');
        if (lang === 'en') {
          keysEn.forEach((el) => {
            el.classList.toggle('hidden');
          });
          keysEnCaps.forEach((el) => {
            el.classList.toggle('hidden');
          });
        }
        if (lang === 'ru') {
          keysRu.forEach((el) => {
            el.classList.toggle('hidden');
          });
          keysRuCaps.forEach((el) => {
            el.classList.toggle('hidden');
          });
        }
      } else keys[i].classList.add('press');
      if (keys[i].textContent === 'Enter') textWindow.setRangeText('\n', getCaretPosition(textWindow), getCaretPosition(textWindow), 'end');
      else if (keys[i].textContent === 'Backspace') textWindow.setRangeText('', (getCaretPosition(textWindow) - 1), getCaretPosition(textWindow), 'end');
      else if (keys[i].textContent === 'Del') textWindow.setRangeText('', getCaretPosition(textWindow), (getCaretPosition(textWindow) + 1), 'end');
      else if (keys[i].textContent === 'Tab') textWindow.setRangeText('    ', getCaretPosition(textWindow), getCaretPosition(textWindow), 'end');
      else if (keys[i].textContent === 'CapsLock' || keys[i].textContent === 'Win'
                    || keys[i].textContent === 'Lalt' || keys[i].textContent === 'Ralt'
                    || keys[i].textContent === 'Lctrl' || keys[i].textContent === 'Rctrl');
      else if ((keys[i].textContent === 'Lshift' || keys[i].textContent === 'Rshift') && lang === 'en') {
        keysEnShift.forEach((el) => {
          el.classList.remove('hidden');
        });
        keysEn.forEach((el) => {
          el.classList.add('hidden');
        });
        keysEnShift[i].classList.add('press');
      } else if (keys[i].textContent === 'Lshift' && lang === 'ru') {
        keysRuShift.forEach((el) => {
          el.classList.remove('hidden');
          if (el.textContent === 'Lshift') el.classList.add('press');
        });
        keysRu.forEach((el) => {
          el.classList.add('hidden');
        });
      } else if (keys[i].textContent === 'Rshift' && lang === 'ru') {
        keysRuShift.forEach((el) => {
          el.classList.remove('hidden');
          if (el.textContent === 'Rshift') el.classList.add('press');
        });
        keysRu.forEach((el) => {
          el.classList.add('hidden');
        });
      } else textWindow.setRangeText(keys[i].textContent, getCaretPosition(textWindow), getCaretPosition(textWindow), 'end');
    });
  }

  for (let j = 0; j < keys.length; j += 1) {
    keys[j].addEventListener('mouseup', () => {
      if (keys[j].textContent !== 'CapsLock' || keys[j].textContent !== 'Lshift'
               || keys[j].textContent !== 'Rshift') keys[j].classList.remove('press');
      if (keys[j].textContent === 'Lshift' || keys[j].textContent === 'Rshift') {
        if (lang === 'en') {
          keysEnShift.forEach((el) => {
            el.classList.add('hidden');
          });
          keysEn.forEach((el) => {
            el.classList.remove('hidden');
            el.classList.remove('press');
          });
        }
        if (lang === 'ru') {
          keysRuShift.forEach((el) => {
            el.classList.add('hidden');
          });
          keysRu.forEach((el) => {
            el.classList.remove('hidden');
            el.classList.remove('press');
          });
        }
      }
      if (keys[j].textContent === 'CapsLock' && lang === 'en') {
        if (!keysEnCaps[29].classList.contains('hidden')) keysEnCaps[29].classList.toggle('press');
      }
      if (keys[j].textContent === 'CapsLock' && lang === 'ru') {
        if (!keysRuCaps[29].classList.contains('hidden')) keysRuCaps[29].classList.toggle('press');
      }
    });
  }
} // mouse-click at virtual keyboard

clickOnKey(language);

function changeLanguage() {
  if (language === 'en') {
    language = 'ru';
    document.querySelectorAll('.en').forEach((el) => {
      el.classList.add('hidden');
    });
    document.querySelectorAll('.ru').forEach((el) => {
      el.classList.remove('hidden');
    });
  } else {
    language = 'en';
    document.querySelectorAll('.ru').forEach((el) => {
      el.classList.add('hidden');
    });
    document.querySelectorAll('.en').forEach((el) => {
      el.classList.remove('hidden');
    });
  }
} // change language function

function checkPressedKeys(func, ...codes) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    for (let i = 0; i < codes.length; i += 1) {
      if (!pressed.has(codes[i])) return;
    }

    pressed.clear();
    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
} // change language keys

checkPressedKeys(changeLanguage, 'AltLeft', 'ControlLeft');
