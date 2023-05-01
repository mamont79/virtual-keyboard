function backspaceText() {
  let textField = document.querySelector(".textarea");
  let newText = textField.textContent.slice(0, -1);
  textField.textContent = newText;
}

function removeCursor() {
  let textField = document.querySelector(".textarea");
  let newText = textField.textContent.slice(0, -1);
  textField.textContent = newText;

}

function addCursor() {
  let textField = document.querySelector(".textarea");
  textField.textContent += "|";
}

export { backspaceText, removeCursor, addCursor };