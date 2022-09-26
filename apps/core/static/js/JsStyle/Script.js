let time = 2000,
  currentImageIndex = 0,
  images = document.querySelectorAll(".carousel img");
max = images.length;

function proximaImagem() {
  images[currentImageIndex].classList.remove("slides");
  currentImageIndex++;

  if (currentImageIndex >= max) currentImageIndex = 0;

  images[currentImageIndex].classList.add("slides");
}

function start() {
  setInterval(() => {
    proximaImagem();
  }, time);
}

window.addEventListener("load", start);

function mascara(i) {
  document.getElementById("CPF").style.opacity = "1";

  var v = i.value;
  
    if (isNaN(v[v.length - 1])) {
      // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length - 1);
      return;
    }
  
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";

    if (v.length<14){
      document.getElementById("btn-continuar-form").style.background = "var(--cinza-claro)" ;
      document.getElementById("btn-continuar-form").style.color = "var(--azul-escuro)" ;
      document.getElementById("CPF").style.color = "var(--azul-escuro)";
      document.getElementById("arrow-gray").setAttribute('src', 'Css/Svg/Seta-cinza.svg')
      document.getElementById("arrow-gray").style.width = "35px";
    }else{
    if (v.length == 14){
        document.getElementById("btn-continuar-form").style.background = "var(--verde)" ;
        document.getElementById("btn-continuar-form").style.color = "var(--branco)" ;
        document.getElementById("CPF").style.color = "var(--verde)";
        document.getElementById("arrow-gray").setAttribute('src', 'Css/Svg/arrow-white.svg')
        document.getElementById("arrow-gray").style.width = "40px";
      
      }
    }
  }
  

  function openForm(){
    let form = document.querySelectorAll('.new-form');

    if (form == "block"){

    }else[
      form[0].style.display ="flex"
    ]
    
  }

  function closeForm(){
    let form = document.querySelectorAll('.new-form');
    
      form[0].style.display = "none";
    
  }


  function showMore($show) {
    var Listquestions = [
      document.getElementById("question1"),
      document.getElementById("question2"),
      document.getElementById("question3"),
      document.getElementById("question4"),
    ];
  
    var firstquestion = Listquestions[0];
    var secoundquestion = Listquestions[1];
    var threequestion = Listquestions[2];
    var fourquestion = Listquestions[3];
  
    if ($show == 1) {
      
    
    if (document.querySelectorAll(".questions-show #question1")) {
      if (firstquestion.style.display == "block") {
        firstquestion.style.display = "none";
        document.getElementById("arrow-question1").style.transform= "rotate(0deg)";
      } else {
        firstquestion.style.display = "block";
        document.getElementById("arrow-question1").style.transform= "rotate(180deg)";
      }
    }
  }
  if ($show==2) {
    
  
    if (document.querySelectorAll(".questions-show #question2")) {
      if (secoundquestion.style.display == "block") {
        secoundquestion.style.display = "none";
        document.getElementById("arrow-question2").style.transform= "rotate(0deg)";
      } else {
        secoundquestion.style.display = "block";
        document.getElementById("arrow-question2").style.transform= "rotate(180deg)";
      }
    }
  }
   
  if ($show==3) {
    
  
  if (document.querySelectorAll(".questions-show #question3")) {
      if (threequestion.style.display == "block") {
        threequestion.style.display = "none";
        document.getElementById("arrow-question3").style.transform= "rotate(0deg)";
      } else {
        threequestion.style.display = "block";
        document.getElementById("arrow-question3").style.transform= "rotate(180deg)";
      }
    }
  }
  
  if ($show==4) {
   
    if (document.querySelectorAll(".questions-show #question4")) {
      if (fourquestion.style.display == "block") {
        fourquestion.style.display = "none";
        document.getElementById("arrow-question4").style.transform= "rotate(0deg)";
      } else {
        fourquestion.style.display = "block";
        document.getElementById("arrow-question4").style.transform= "rotate(180deg)";
      }
    }
  }
  }
  