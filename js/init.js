let systemOfUser;

  if (navigator.appVersion.indexOf('Windows')>=0) {
    systemOfUser = 'Windows';
  } 
  if (navigator.appVersion.indexOf('Linux')>=0) {
    systemOfUser = 'Linux';
  } 

function initKeyboard() {
  
  let centralizer = '';
  centralizer = '<div class="centralizer"></div>';

  let title = '';
  title = '<p class="title">Virtual keyboard</p>'

  let textarea = '';
  textarea = '<textarea class="body--textarea textarea" id="textarea" rows="5" cols="50"></textarea>';

  let keyboardAll = '';
  keyboardAll = '<div class="body--keyboard keyboard" id="keyboard"></div>';

  let description = '';
  description = `<p class="description">Клавиатура создана в операционной системе ${systemOfUser} </p>`;

  let language = '';
  language = '<p class="language">Для переключения языка комбинация: левыe ctrl + shift</p>';


  document.querySelector("body").innerHTML = centralizer;
  document.querySelector(".centralizer").innerHTML = title + textarea + keyboardAll + description + language;
}

export { initKeyboard, systemOfUser }
