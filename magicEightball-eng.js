let randomNumber = Math.floor(Math.random() * 20);
let eightBall = ' '
switch (randomNumber) {
    case 0:
    eightBall = 'It is certain';
    break;
    case 1:
    eightBall = 'It is decidedly so';
    break;
    case 2:
    eightBall = 'Without a doubt';
    break;
    case 3:
    eightBall = 'Yes – definitely';
    break;
    case 4:
    eightBall = 'You may rely on it';
    break;
    case 5:
    eightBall = 'As I see it, yes';
    break;
    case 6:
    eightBall = 'Most likely';
    break;
    case 7:
    eightBall = 'Outlook good';
    break;
    case 8:
    eightBall = 'Yes';
    break;
    case 9:
    eightBall = 'Signs point to yes';
    break;
    case 10:
    eightBall = 'Reply hazy, try again';
    break;
    case 11:
    eightBall = 'Ask again later';
    break;
    case 12:
    eightBall = 'Better not tell you now';
    break;
    case 13:
    eightBall = 'Cannot predict now';
    break;
    case 14:
    eightBall = 'Concentrate and ask again';
    break;
    case 15:
    eightBall = "Don't count on it";
    break;
    case 16:
    eightBall = 'My reply is no';
    break;
    case 17:
    eightBall = 'My sources say no';
    break;
    case 18:
    eightBall = 'Outlook not so good';
    break;
    case 19:
    eightBall = 'Very doubtful';
    break;
}


let eight = document.getElementById('eight');
let answer = document.getElementById('answer');
let triangle = document.getElementById('triangle');
let eightball = document.getElementById('eight-ball');
let question = document.getElementById('question');
let ballAnswer = document.getElementById('ball-answer');
let button = document.getElementById('button');
let buttonAgain = document.createElement('button');
buttonAgain.innerHTML = "I have another question!";
buttonAgain.style.backgroundColor = "#f6ebf2";
buttonAgain.style.color = "black";


let shakeIt = function() {
    eightball.classList.add("shake-hard");
            
}
let results = function() {
    ballAnswer.classList.add("show");
    answer.classList.remove("hide");
    triangle.classList.remove("hide");
    eight.classList.add("hide");
    answer.innerText = eightBall;
        
}

eightball.addEventListener('click', () => {
    if (question.value.length < 1) {
        alert('You need to ask a question!');
    } else {
        shakeIt();
    }
    });

button.addEventListener('click', () => {
    if (question.value.length < 1) {
        alert('You need to ask a question!');
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
        alert('You need to ask a question!');
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

