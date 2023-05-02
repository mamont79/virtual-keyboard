import { initKeyboard, systemOfUser } from "../js/init.js";
import { winKeys } from "../js/winKeyboard.js";
import { rusKeys } from "../js/rusKeyboard.js";
import { backspaceText, removeCursor, addCursor } from "../js/text-input.js";
import { capsKeyboard, shiftKeyboard, noShiftKeyboard } from "../js/caps-shift.js";

alert("пожалуйста, дайте ещё день доделать смену языка при нажатии клавиш")

let langKeyboard = winKeys;


function buildKeyboard() {
  let out = "";
  for (let i = 0; i < langKeyboard.length; i++) {
    let letter = langKeyboard[i].key;
    out += `<div class="${langKeyboard[i].class}" data="${langKeyboard[i].code}">${letter}</div>`;
  }
  document.querySelector(".keyboard").innerHTML = out;
}


initKeyboard();
buildKeyboard();

// change language

function changeLanguage() {
  let checkLang = document.querySelector('.keyboard .key[data="KeyQ"]').textContent;
  if(checkLang == "q" || checkLang == "Q") {
    langKeyboard = rusKeys;    
  } else {
    langKeyboard = winKeys;
    
  }
  buildKeyboard();
}

// on press functionality
const ctrlButtonR = document.querySelector(".ControlRight");
const ctrlButtonL = document.querySelector(".ControlLeft");

window.onkeypress = function (event) {
  if (event.code == "ShiftRight" || event.code == "ShiftLeft") {
    capsKeyboard();
  }
};

window.onkeydown = function (event) {
  removeCursor();
  if (event.code == "CapsLock") {
    document.querySelector(".CapsLock").classList.toggle("active");
    capsKeyboard();
  } else if (event.code != "CapsLock") {
    document
      .querySelector('.keyboard .key[data="' + event.code + '"]')
      .classList.add("active");
    
  }
  if (event.code == "ShiftRight" || event.code == "ShiftLeft") {
    if (ctrlButtonL.classList.contains("active") || ctrlButtonR.classList.contains("active")){
      changeLanguage();
    } else {
      shiftKeyboard();
    }
  }
  if (event.key.length == 1) {
    if (checkCaps.classList.contains("caps") || checkShiftL.classList.contains("upper") || checkShiftR.classList.contains("upper")) {
      textField.textContent += event.key.toUpperCase();
    } else {
      textField.textContent += event.key;
    }
  }
  if (event.code == "Enter") {
    textField.textContent += '\n';
  }
  if (event.code ==  "Backspace") {
    backspaceText();
  }
  addCursor();
  //console.log(event.code);
};

window.onkeyup = function (event) {
  if (event.code != "CapsLock") {
    document
      .querySelector('.keyboard .key[data="' + event.code + '"]')
      .classList.remove("active");
    if (event.code == "ShiftRight" || event.code == "ShiftLeft") {
      noShiftKeyboard();
    }
  }
};

// onmousedown functionality

document.querySelectorAll(".keyboard .key").forEach(function (element) {
  element.onmousedown = function (event) {
    let codeButton = this.getAttribute("data");
    if (codeButton != "CapsLock") {
      this.classList.add("active");
    } else if (codeButton == "CapsLock") {
      this.classList.toggle("active");
      capsKeyboard();
    }
    if (codeButton == "ShiftRight" || codeButton == "ShiftLeft") {
      shiftKeyboard();
    }
    //console.log(codeButton);
  };
});

document.querySelectorAll(".keyboard .key").forEach(function (element) {
  element.onmouseup = function (event) {
    let codeButton = this.getAttribute("data");
    if (codeButton != "CapsLock") {
      this.classList.remove("active");
    }
    if (codeButton == "ShiftRight" || codeButton == "ShiftLeft") {
      noShiftKeyboard();
    }
  };
});


// text input
const textField = document.querySelector(".textarea");
const checkCaps = document.querySelector(".CapsLock");
const checkShiftL = document.querySelector(".ShiftLeft");
const checkShiftR = document.querySelector(".ShiftRight");


document.querySelectorAll(".keyboard .key").forEach(function (element) {
  element.onclick = function (event) {
    removeCursor();
    let buttonContent = this.textContent;
    if (buttonContent.length == 1) {
      if (checkCaps.classList.contains("caps") || checkShiftL.classList.contains("upper") || checkShiftR.classList.contains("upper")) {
        textField.textContent += buttonContent.toUpperCase();
      } else {
        textField.textContent += buttonContent;
      }
    } 
    if (buttonContent == "Enter") {
      textField.textContent += '\n';
    }
    if (buttonContent == "Backspace") {
      backspaceText();
    }
    addCursor();
    
  };
});



