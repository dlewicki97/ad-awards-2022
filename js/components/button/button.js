export default (function () {
  let buttons = document.querySelectorAll('.button');
  for (let i = 0; i < buttons.length; i++) {
    let buttonText = buttons[i].querySelector('.button-text');

    let buttonTextInnerText = buttonText.innerText;
    buttonText.innerHTML = '';
    for (let j = 0; j < buttonTextInnerText.length; j++) {
      let letter = document.createElement('span');
      letter.innerHTML = buttonTextInnerText[j];
      if (letter.innerHTML.toLowerCase() == 'i') letter.style.width = '0px';
      buttonText.appendChild(letter);
    }
  }
})();
