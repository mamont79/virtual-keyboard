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

// on press functionality

function capsKeyboard() {
  document.querySelectorAll(".keyboard .key").forEach(function (element){
    if(element.getAttribute("data").length == 4) {
      if (element.textContent.toLowerCase() == element.textContent) {
        element.textContent = element.textContent.toUpperCase();
      } else {
        element.textContent = element.textContent.toLowerCase();
      }
    }
  })
  
}



const capsButton = document.querySelector(".CapsLock");

window.onkeypress = function (event) {
  if (event.code == "ShiftRight" || event.code == "ShiftLeft") {
    capsKeyboard();
  }
}

window.onkeydown = function (event) {
  if (event.code == "CapsLock") {
    document.querySelector(".CapsLock").classList.toggle("active");
    capsKeyboard()
  } else if (event.code != "CapsLock") {
    document
    .querySelector('.keyboard .key[data="' + event.code + '"]')
    .classList.add("active");
    
  }
  console.log(event.code)
};

window.onkeyup = function (event) {
  if (event.code != "CapsLock") {
    document
    .querySelector('.keyboard .key[data="' + event.code + '"]')
    .classList.remove("active");
    // if (event.code == "ShiftRight" || event.code == "ShiftLeft") {
    //   for (let i = 0; i < langKeyboard.length; i++) {
    //     if (langKeyboard[i].keyCode <= 90 && langKeyboard[i].keyCode >= 65) {
    //       langKeyboard[i].key = langKeyboard[i].key.toLowerCase();
    //     } else if (langKeyboard[i].key2) {
    //       let ch = langKeyboard[i].key;
    //       langKeyboard[i].key = langKeyboard[i].key2;
    //       langKeyboard[i].key2 = ch;
    //     }
    //   }
    //   buildKeyboard();
    // }
  }
};


// onmousedown functionality


document.querySelectorAll('.keyboard .key').forEach(function (element) {
  element.onmousedown = function(event) {
    let codeButton = this.getAttribute("data");
    if (codeButton != "CapsLock") {
      this.classList.add("active");
    } else if (codeButton == "CapsLock") {
      this.classList.toggle("active");
      capsKeyboard();
    }
    console.log(codeButton);
  }
});


document.querySelectorAll('.keyboard .key').forEach(function (element) {
  element.onmouseup = function(event) {
    let codeButton = this.getAttribute("data");
    if (codeButton != "CapsLock"){
      this.classList.remove("active");
    }
  }
});







