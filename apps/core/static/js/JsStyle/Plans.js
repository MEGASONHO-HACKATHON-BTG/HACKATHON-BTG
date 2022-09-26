function nextPage() {
  window.location.href = "payment.html";
}

let secounds = 60,
  minutes = 10,
  intervalo;
const secoundsNumber = document.getElementById("secoundsNumber");
const minutesNumber = document.getElementById("minutesNumber");

function loadSecounds() {
  secounds--;
  if (minutes == 10) {
    loadMinutes();
  }
  if (secounds < 10) {
    secoundsNumber.innerHTML = "0" + secounds;
  } else {
    secoundsNumber.innerHTML = secounds;
  }

  if (secounds == 0) {
    secounds = 60;
    if (secounds == 60) {
      loadMinutes();
    }
  }
}
function loadMinutes() {
  minutes--;
  if (minutes < 10) {
    minutesNumber.innerHTML = "0" + minutes;
  } else {
    minutesNumber.innerHTML = minutes;
  }
}

function stopwatch() {
  clearInterval(intervalo);
  intervalo = setInterval(() => {
    loadSecounds();
  }, 1200);
}
