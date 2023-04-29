import { initKeyboard, systemOfUser } from "/js/init.js";
import { winKeys } from "/js/winKeyboard.js";
import { rusKeys } from "/js/rusKeyboard.js";




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

// bwtbrbrt

const capsButton = document.querySelector(".CapsLock");

window.onkeydown = function (event) {
  if (event.code == "CapsLock") {
    capsButton.classList.toggle("active");
    for (let i = 0; i < langKeyboard.length; i++) {
      if (langKeyboard[i].keyCode <= 90 && langKeyboard[i].keyCode >= 65) {
        if (langKeyboard[i].key.toLowerCase() == langKeyboard[i].key) {
          langKeyboard[i].key = langKeyboard[i].key.toUpperCase();
        } else {
          langKeyboard[i].key = langKeyboard[i].key.toLowerCase();
        }
      } 
    }
    buildKeyboard();
  } else
   if (event.code != "CapsLock") {
    document
    .querySelector('.keyboard .key[data="' + event.code + '"]')
    .classList.add("active");
    if (event.code == "ShiftRight" || event.code == "ShiftLeft") {
      for (let i = 0; i < langKeyboard.length; i++) {
        if (langKeyboard[i].keyCode <= 90 && langKeyboard[i].keyCode >= 65) {
          langKeyboard[i].key = langKeyboard[i].key.toUpperCase();
        } else if (langKeyboard[i].key2) {
          let ch = langKeyboard[i].key;
          langKeyboard[i].key = langKeyboard[i].key2;
          langKeyboard[i].key2 = ch;
        }
      }
      buildKeyboard();
    }
  }
  console.log(event.code)
};

window.onkeyup = function (event) {
  if (event.code != "CapsLock") {
    document
    .querySelector('.keyboard .key[data="' + event.code + '"]')
    .classList.remove("active");
    if (event.code == "ShiftRight" || event.code == "ShiftLeft") {
      for (let i = 0; i < langKeyboard.length; i++) {
        if (langKeyboard[i].keyCode <= 90 && langKeyboard[i].keyCode >= 65) {
          langKeyboard[i].key = langKeyboard[i].key.toLowerCase();
        } else if (langKeyboard[i].key2) {
          let ch = langKeyboard[i].key;
          langKeyboard[i].key = langKeyboard[i].key2;
          langKeyboard[i].key2 = ch;
        }
      }
      buildKeyboard();
    }
  }
};


