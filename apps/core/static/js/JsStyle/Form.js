let lastNumber = document.getElementById(".lastNumber");
var ListNumbers = [
  document.getElementById("nb1"),
  document.getElementById("nb2"),
  document.getElementById("nb3"),
  document.getElementById("nb4"),
  document.getElementById("nb5"),
  document.getElementById("nb6"),
];

var number1 = ListNumbers[0];
var number2 = ListNumbers[1];
var number3 = ListNumbers[2];
var number4 = ListNumbers[3];
var number5 = ListNumbers[4];
var number6 = ListNumbers[5];

function nextPage() {
  onlyNumber(6);
  //testa se o numeros estao corretos vai para proxima page
  if ((lastNumber = null)) {
  } else {
    window.location.href = "luck-number.html";
  }
  //chama a funcao invalid
  //  Invalid();
}

function lengthNumber() {
  if (!isNaN(String.fromCharCode(window.event.keyCode))) return true;
  else return false;
}
function onlyNumber(number) {
  if (number == 1) {
    number1.style.border = "1px solid var(--azul-marinho)";
  }

  if (number == 2) {
    number2.style.border = "1px solid var(--azul-marinho)";
  }

  if (number == 3) {
    number3.style.border = "1px solid var(--azul-marinho)";
  }

  if (number == 4) {
    number4.style.border = "1px solid var(--azul-marinho)";
  }

  if (number == 5) {
    number5.style.border = "1px solid var(--azul-marinho)";
  }

  if (number == 6) {
    number6.style.border = "1px solid var(--azul-marinho)";
  }
}

function Invalid() {
  number1.style.border = "1px solid var(--vermelho)";
  number2.style.border = "1px solid var(--vermelho)";
  number3.style.border = "1px solid var(--vermelho)";
  number4.style.border = "1px solid var(--vermelho)";
  number5.style.border = "1px solid var(--vermelho)";
  number6.style.border = "1px solid var(--vermelho)";

  document.getElementById("invalidInform").style.display = "block";
}
