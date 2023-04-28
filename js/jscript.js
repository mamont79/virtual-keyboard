import { initKeyboard, systemOfUser } from "/js/init.js";
import { winKeys } from "/js/winKeyboard.js";
import { rusKeys } from "/js/rusKeyboard.js";

const keyButton = document.querySelectorAll(".key");

let langKeyboard = winKeys;
let lang = "en";

function changeLanguage() {
  if (lang == "en") {
    lang = "rus";
    langKeyboard = rusKeys;
  } else if (lang == "rus") {
    lang = "en";
    langKeyboard = winKeys;
  }
  buildKeyboard();
}

function buildKeyboard(size = 'lowercase') {
  let out = "";
  for (let i = 0; i < langKeyboard.length; i++) {
    let letter = langKeyboard[i].key;
    out += `<div class="${langKeyboard[i].class}" data="${langKeyboard[i].code}">${letter}</div>`;
    
  }
  
  document.querySelector(".keyboard").innerHTML = out;
}

// document.addEventListener("mousedown", function (event) {
//   let button = document.querySelector(
//     '.keyboard .key[data="' + event.keyCode + '"]'
//   );
// });

document.onkeydown = function (event) {
  document
    .querySelector('.keyboard .key[data="' + event.code + '"]')
    .classList.add("active");
    if (event.code == ("ShiftRight" || "ShiftLeft")) {
      keyButton.forEach(element => {
        element.classList.add("upper");
      });
    }
    console.log(event.code)
};
document.onkeyup = function (event) {
  document
    .querySelector('.keyboard .key[data="' + event.code + '"]')
    .classList.remove("active");
};

initKeyboard();
buildKeyboard();
