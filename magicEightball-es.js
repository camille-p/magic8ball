let randomNumber = Math.floor(Math.random() * 20);
let eightBall = " ";
switch (randomNumber) {
  case 0:
    eightBall = "En mi opinión, sí";
    break;
  case 1:
    eightBall = "Es cierto";
    break;
  case 2:
    eightBall = "Es decididamente así";
    break;
  case 3:
    eightBall = "Probablemente";
    break;
  case 4:
    eightBall = "Buen pronóstico";
    break;
  case 5:
    eightBall = "Todo apunta a que sí";
    break;
  case 6:
    eightBall = "Sin duda";
    break;
  case 7:
    eightBall = "Sí";
    break;
  case 8:
    eightBall = "Sí - definitivamente";
    break;
  case 9:
    eightBall = "Debes confiar en ello";
    break;
  case 10:
    eightBall = "Respuesta vaga, vuelve a intentarlo";
    break;
  case 11:
    eightBall = "Pregunta en otro momento";
    break;
  case 12:
    eightBall = "Será mejor que no te lo diga ahora";
    break;
  case 13:
    eightBall = "No puedo predecirlo ahora";
    break;
  case 14:
    eightBall = "Concéntrate y vuelve a preguntar";
    break;
  case 15:
    eightBall = "No cuentes con ello";
    break;
  case 16:
    eightBall = "Mi respuesta es no";
    break;
  case 17:
    eightBall = "Mis fuentes me dicen que no";
    break;
  case 18:
    eightBall = "Las perspectivas no son buenas";
    break;
  case 19:
    eightBall = "Muy dudoso";
    break;
}

let eight = document.getElementById("eight");
let answer = document.getElementById("answer");
let triangle = document.getElementById("triangle");
let eightball = document.getElementById("eight-ball");
let question = document.getElementById("question");
let ballAnswer = document.getElementById("ball-answer");
let button = document.getElementById("button");
let buttonAgain = document.createElement("button");
buttonAgain.innerHTML = "Tengo otra pregunta!";
buttonAgain.style.backgroundColor = "#f6ebf2";
buttonAgain.style.color = "black";

let shakeIt = function () {
  eightball.classList.add("shake-hard");
};
let results = function () {
  ballAnswer.classList.add("show");
  answer.classList.remove("hide");
  triangle.classList.remove("hide");
  eight.classList.add("hide");
  answer.innerText = eightBall;
};

eightball.addEventListener("click", () => {
  if (question.value.length < 1) {
    alert("Necesita hacer una pregunta!");
  } else {
    shakeIt();
  }
});

button.addEventListener("click", () => {
  if (question.value.length < 1) {
    alert("Necesita hacer una pregunta!");
  } else {
    shakeIt();
  }
});

question.addEventListener("keyup", () => {
  if (event.keyCode === 13) {
    shakeIt();
  }
});

eightball.addEventListener("animationend", () => {
  if (question.value.length < 1) {
    alert("Necesita hacer una pregunta!");
  } else {
    results();
    button.parentNode.replaceChild(buttonAgain, button);
  }
});

buttonAgain.addEventListener("click", function (e) {
  location.reload();
});

function changeLanguage() {
  let x = document.getElementById("language").value;
  if (x === "portuguese") {
    window.location.pathname = "magic8ball/portuguese.html";
  }
  if (x === "french") {
    window.location.pathname = "magic8ball/french.html";
  }
  if (x === "spanish") {
    window.location.pathname = "magic8ball/spanish.html";
  }
  if (x === "english") {
    window.location.pathname = "magic8ball";
  }
}
