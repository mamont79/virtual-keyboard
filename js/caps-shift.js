function capsKeyboard() {
  document.querySelectorAll(".keyboard .key").forEach(function (element){
    element.classList.toggle("caps");
  })
}

function shiftKeyboard() {
  document.querySelectorAll(".keyboard .key").forEach(function (element){
    element.classList.add("upper");

    switch (element.textContent) {
      case "`" : 
        element.textContent = "~";
        break;
      case "1" : 
        element.textContent = "!";
        break;
      case "2" : 
        element.textContent = "@";
        break;
      case "3" : 
        element.textContent = "#";
        break;
      case "4" : 
        element.textContent = "$";
        break;
      case "5" : 
        element.textContent = "%";
        break;
      case "6" : 
        element.textContent = "^";
        break;
      case "7" : 
        element.textContent = "&";
        break;
      case "8" : 
        element.textContent = "*";
        break;
      case "9" : 
        element.textContent = "(";
        break;
      case "0" : 
        element.textContent = ")";
        break;
      case "-" : 
        element.textContent = "_";
        break;
      case "=" : 
        element.textContent = "+";
        break;
      case "[" : 
        element.textContent = "{";
        break;
      case "]" : 
        element.textContent = "}";
        break;
      case "\\" :
        element.textContent = "|";
        break;
      case ";" : 
        element.textContent = ":";
        break;
      case "'" : 
        element.textContent = '"';
        break;
      case "," : 
        element.textContent = "<";
        break;
      case "." : 
        element.textContent = ">";
        break;
      case "/" : 
        element.textContent = "?";
        break;
    }

  })
}

function noShiftKeyboard() {
  document.querySelectorAll(".keyboard .key").forEach(function (element){
    element.classList.remove("upper");

    switch (element.textContent) {
      case "~" : 
        element.textContent = "`";
        break;
      case "!" : 
        element.textContent = "1";
        break;
      case "@" : 
        element.textContent = "2";
        break;
      case "#" : 
        element.textContent = "3";
        break;
      case "$" : 
        element.textContent = "4";
        break;
      case "%" : 
        element.textContent = "5";
        break;
      case "^" : 
        element.textContent = "6";
        break;
      case "&" : 
        element.textContent = "7";
        break;
      case "*" : 
        element.textContent = "8";
        break;
      case "(" : 
        element.textContent = "9";
        break;
      case ")" : 
        element.textContent = "0";
        break;
      case "_" : 
        element.textContent = "-";
        break;
      case "+" : 
        element.textContent = "=";
        break;
      case "{" : 
        element.textContent = "[";
        break;
      case "}" : 
        element.textContent = "]";
        break;
      case "|" : 
        element.textContent = "\\";
        break;
      case ":" : 
        element.textContent = ";";
        break;
      case '"' : 
        element.textContent = "'";
        break;
      case "<" : 
        element.textContent = ",";
        break;
      case ">" : 
        element.textContent = ".";
        break;
      case "?" : 
        element.textContent = "/"
        break;
    }

  })
}

export { capsKeyboard, shiftKeyboard, noShiftKeyboard };