let btgPactual = document.querySelectorAll(".btg"),
  caixa = document.querySelectorAll(".caixa"),
  itau = document.querySelectorAll(".itau"),
  bradesco = document.querySelectorAll(".bradesco"),
  xpinvest = document.querySelectorAll(".xp"),
  BancoBrasil = document.querySelectorAll(".BB"),
  Nubank = document.querySelectorAll(".nubank"),
  change = "N";

function selectBank(number) {
  if (number == 1) {
    if (change == "S") {
      btgPactual[0].src = "../../images/btgPactual.svg";
    } else {
      btgPactual[0].src = "Css/Svg/btg_color.svg";
      change = "N";
    }
  }
  if (number == 2) {
    caixa[0].src = "../../images/caixa_color.svg";
  }
  if (number == 3) {
    itau[0].src = "Css/Svg/itau_color.svg";
  }
  if (number == 4) {
    bradesco[0].src = "Css/Svg/bradesco_color.svg";
  }
  if (number == 5) {
    xpinvest[0].src = "Css/Svg/xp_color.svg";
  }
  if (number == 6) {
    BancoBrasil[0].src = "Css/Svg/brasil_color.svg";
  }
  if (number == 7) {
    Nubank[0].src = "Css/Svg/nubank_color.svg";
  }
  document.getElementById("btnContinue").style.backgroundColor = "var(--verde)";
  document.getElementById("btnContinue").style.color = "var(--branco)";
  document.querySelectorAll(".arrow")[0].src = "/images/arrow-white.svg";
  document.getElementById("btnContinue").disabled = false;
  change = "S";
}
function nextPage() {
  window.location.href = "newShare.html";
}
