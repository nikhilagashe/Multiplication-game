let num1 = Math.floor(Math.random()*20);
let num2 = Math.floor(Math.random()*20);
let correctAnswer = num1 * num2;

const questionE1 = document.getElementById("question");
questionE1.innerText = `What is ${num1} Multiply by ${num2}?`;

const formE1 = document.getElementById("form");
const inputE1 = document.getElementById("input");
const scoreE1 = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(score <= 0){
    score = 0;
}

scoreE1.innerText = `score: ${score}`
formE1.addEventListener("submit", ()=>{
    const userAns = +inputE1.value
    if(userAns===correctAnswer){
        score++
        updateLocalStorage()
    }
    else{
        score--
        updateLocalStorage()
    }
})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}