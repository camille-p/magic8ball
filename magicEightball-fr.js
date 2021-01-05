let randomNumber = Math.floor(Math.random() * 20);
let eightBall = ' '
switch (randomNumber) {
    case 0:
    eightBall = 'Essaye plus tard';
    break;
    case 1:
    eightBall = 'Essaye encore';
    break;
    case 2:
    eightBall = "Pas d'avis";
    break;
    case 3:
    eightBall = "C'est ton destin";
    break;
    case 4:
    eightBall = 'Le sort en est jeté';
    break;
    case 5:
    eightBall = 'Une chance sur deux';
    break;
    case 6:
    eightBall = 'Repose ta question';
    break;
    case 7:
    eightBall = "D'après moi oui";
    break;
    case 8:
    eightBall = "C'est certain";
    break;
    case 9:
    eightBall = 'Oui absolument';
    break;
    case 10:
    eightBall = 'Tu peux compter dessus';
    break;
    case 11:
    eightBall = 'Sans aucun doute';
    break;
    case 12:
    eightBall = 'Très probable';
    break;
    case 13:
    eightBall = 'Oui';
    break;
    case 14:
    eightBall = "C'est bien parti";
    break;
    case 15:
    eightBall = "C'est non";
    break;
    case 16:
    eightBall = 'Peu probable';
    break;
    case 17:
    eightBall = 'Faut pas rêver';
    break;
    case 18:
    eightBall = "N'y compte pas";
    break;
    case 19:
    eightBall = 'Impossible';
    break;
}


let eight = document.getElementById('eight');
let answer = document.getElementById('answer');
let eightball = document.getElementById('eight-ball');
let question = document.getElementById('question');
let ballAnswer = document.getElementById('ball-answer');
let button = document.getElementById('button');
let buttonAgain = document.createElement('button');
buttonAgain.innerHTML = "J'ai une autre question!";
buttonAgain.style.backgroundColor = "#f6ebf2";
buttonAgain.style.color = "black";


let shakeIt = function() {
    eightball.classList.add("shake-hard");
            
}
let results = function() {
    ballAnswer.classList.add("show");
    answer.classList.remove("hide");
    eight.classList.add("hide");
    answer.innerText = eightBall;
        
}

eightball.addEventListener('click', () => {
    if (question.value.length < 1) {
        alert('Pose moi une question!');
    } else {
        shakeIt();
    }
    });

button.addEventListener('click', () => {
    if (question.value.length < 1) {
        alert('Pose moi une question!');
    } else {
        shakeIt();
    }
});

question.addEventListener('keyup', () => {
    if (event.keyCode === 13) {
        shakeIt();
    }
});

eightball.addEventListener('animationend', () => {
    if (question.value.length < 1) {
        alert('Pose moi une question!');
    } else {
    results();
    button.parentNode.replaceChild(buttonAgain, button);
}
});

buttonAgain.addEventListener('click',function(e){
    location.reload();
});

function changeLanguage() {
    let x = document.getElementById("language").value;
    if (x === "french") {
        window.location.pathname = 'magic8ball/french.html'
    } else if (x === "english"){
        window.location.pathname = 'magic8ball'
    }
}