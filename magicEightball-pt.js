let randomNumber = Math.floor(Math.random() * 20);
let eightBall = " ";
switch (randomNumber) {
  case 0:
    eightBall = "Com certeza";
    break;
  case 1:
    eightBall = "Definitivamente sim";
    break;
  case 2:
    eightBall = "Sem duvida";
    break;
  case 3:
    eightBall = "É uma ótima decisão";
    break;
  case 4:
    eightBall = "Pode contar com isso";
    break;
  case 5:
    eightBall = "Na minha opinão, sim";
    break;
  case 6:
    eightBall = "Provavelmente sim";
    break;
  case 7:
    eightBall = "Isso parece bom";
    break;
  case 8:
    eightBall = "SIM";
    break;
  case 9:
    eightBall = "Os signais dizem sim";
    break;
  case 10:
    eightBall = "Resposta obscura, tente novamente";
    break;
  case 11:
    eightBall = "Pergunte mais tarde";
    break;
  case 12:
    eightBall = "Melhor não falar agora";
    break;
  case 13:
    eightBall = "Não posso prever agora";
    break;
  case 14:
    eightBall = "Se concentre e pergunte novamente";
    break;
  case 15:
    eightBall = "Não conte com isso";
    break;
  case 16:
    eightBall = "Minha resposta é não";
    break;
  case 17:
    eightBall = "Minhas fontes dizem não";
    break;
  case 18:
    eightBall = "Isso não parece bom";
    break;
  case 19:
    eightBall = "Muito duvidoso";
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
buttonAgain.innerHTML = "Tenho uma outra pergunta!";
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
    alert("Faça uma pergunta!");
  } else {
    shakeIt();
  }
});

button.addEventListener("click", () => {
  if (question.value.length < 1) {
    alert("Faça uma pergunta!");
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
    alert("Faça uma pergunta!");
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
  if (x === "english") {
    window.location.pathname = "magic8ball";
  }
}
