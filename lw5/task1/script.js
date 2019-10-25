var text = "Веб-страница - самостоятельная часть веб-сайта; документ, снабженный уникальным адресом (URL). Веб-страница может иметь статическое или динамическое построение. Обычно веб-страницы организуется в виде гипертекста с включениями текста, графики, звука, видео или анимацию. В сети Интернет просмотр веб-страниц осуществляется посредством браузера.";
var myText = document.getElementsByClassName("text");
var searchStr = document.getElementsByClassName('search')
var newStr = document.getElementsByClassName('new')

function replaceText() {
  var myRegExp = new RegExp(searchStr[0].value, 'gi');
  var index = text.search(myRegExp);
  if (index >= 0 && searchStr[0].value != "") {
    text = text.replace(myRegExp, newStr[0].value);
    myText[0].innerHTML = text;

  } else {
    alert('Ничего не найдено!!!');
  }
}