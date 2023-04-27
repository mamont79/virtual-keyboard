import { initKeyboard } from "/js/init.js";
import { winKeys } from "/js/winKeyboard.js";

function buildKeyboard() {
  let out = "";
  for (let i = 0; i < winKeys.length; i++) {
    out += `<div class="${winKeys[i].class}">${winKeys[i].key}</div>`;
  }
  document.querySelector(".keyboard").innerHTML = out;
}

initKeyboard();
buildKeyboard();
