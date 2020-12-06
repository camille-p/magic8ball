let randomNumber = Math.floor(Math.random() * 20);
let eightBall = ' '
switch (randomNumber) {
    case 0:
    eightBall = "D'après moi oui";
    break;
    case 1:
    eightBall = "C'est certain";
    break;
    case 2:
    eightBall = "Oui absolument";
    break;
    case 3:
    eightBall = "Tu peux compter dessus";
    break;
    case 4:
    eightBall = "Sans aucun doute";
    break;
    case 5:
    eightBall = "Très probable";
    break;
    case 6:
    eightBall = "Oui";
    break;
    case 7:
    eightBall = "C'est bien parti";
    break;
    case 8:
    eightBall = "Essaye plus tard";
    break;
    case 9:
    eightBall = "Essaye encore";
    break;
    case 10:
    eightBall = "Impossible";
    break;
    case 11:
    eightBall = "Pas d'avis";
    break;
    case 12:
    eightBall = "C'est ton destin";
    break;
    case 13:
    eightBall = "Le sort en est jeté";
    break;
    case 14:
    eightBall = "Une chance sur deux";
    break;
    case 15:
    eightBall = "Repose ta question";
    break;
    case 16:
    eightBall = "C'est non";
    break;
    case 17:
    eightBall = "Peu probable";
    break;
    case 18:
    eightBall = "Faut pas rêver";
    break;
    case 19:
    eightBall = "N'y compte pas";
    break;
}



let eight = document.getElementById('eight');
let answer = document.getElementById('answer');
let eightball = document.getElementById('eight-ball');
let question = document.getElementById('question');
let ballAnswer = document.getElementById('ball-answer');

    let shakeIt = function() {
        eightball.classList.add("shake-hard");
        
    }
let results = function() {
    if(question.value.length < 1) {
        alert('You need to ask a question!');
    } else {
        ballAnswer.classList.add("show");
        answer.classList.remove("hide");
        eight.classList.add("hide");
        answer.innerText = eightBall;
    }
}


eightball.addEventListener('click', shakeIt);
question.addEventListener('keyup',function(e){
if (e.keyCode === 13) {
    shakeIt();
}
});

eightball.addEventListener("animationend", results)