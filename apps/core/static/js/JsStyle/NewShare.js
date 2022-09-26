function NextPage() {
  if (document.getElementById("check").checked) {
    document.querySelectorAll(".btnContinue")[0].disabled = false;
    document.querySelectorAll(".btnContinue")[0].style.backgroundColor =
      "var(--verde)";
    document.querySelectorAll(".btnContinue")[0].style.color = "var(--branco)";
    document.querySelectorAll(".btnContinue")[0].style.opacity = "1";
  } else {
    document.querySelectorAll(".btnContinue")[0].disabled = true;
    document.querySelectorAll(".btnContinue")[0].style.backgroundColor =
      "var(--cinza-claro)";
    document.querySelectorAll(".btnContinue")[0].style.color =
      "var(--cinza-escuro)";
    document.querySelectorAll(".btnContinue")[0].style.opacity = "0.7";
  }
}
