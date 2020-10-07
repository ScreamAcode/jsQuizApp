const startBtn = document.querySelector("#startBtn");
const  questionContainer= document.querySelector("#questionContainer");
const questionElement = document.querySelector("#question");
const answerElement = document.querySelector("#answerBtn");
const nextBtn = document.querySelector("#nextBtn");
let shuffledQuestions,currentQuestionIndex;

startBtn.addEventListener("click",startGame);

nextBtn.addEventListener("click",()=>{
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame(){
     startBtn.classList.add("hide");
     shuffledQuestions = questions.sort(()=>Math.random() - .5);
     currentQuestionIndex = 0;
     questionContainer.classList.remove("hide");
     setNextQuestion();
}
function setNextQuestion(){
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
 questionElement.innerText = question.question;
 question.answers.forEach(answer =>{
     const button = document.createElement("button");
     button.innerText = answer.text;
     button.classList.add("btn");
     if(answer.correct){
         button.dataset.correct = answer.correct;
     }
     button.addEventListener("click",selectAnswer);
     answerElement.appendChild(button);
 })
}

function resetState(){  
    clearStatusClass(document.body);
    nextBtn.classList.add("hide");
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton = e.target ;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body,correct);
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button,button.dataset.correct);
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextBtn.classList.remove("hide");
    }else{
        startBtn.innerText = "RESTART";
        startBtn.classList.remove("hide");
    }
   
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add("correctAnswer")
    }else{
        element.classList.add("wrongAnswer")
    }
}

function clearStatusClass(element){
    element.classList.remove("correctAnswer");
    element.classList.remove("wrongAnswer");
}
const questions = [
    {
        question : "DNS stands for ?",
        answers:[
            {text : "DOMAIN NAME SYSTEM", correct:true},
            {text : "DOMAIN NODE SYSTEM", correct:false}
        ]
    },
    {
        question : "Where is the correct place to insert a JavaScript?",
        answers:[
            {text : "<head>", correct:false},
            {text : "<body>", correct:false},
            {text : "Both A & B", correct:true},
        ]
    },
    {
        question : "Inside which HTML element do we put the JavaScript?",
        answers:[
            {text : "<scripting>", correct:false},
            {text : "<script>", correct:true},
            {text : "<js>", correct:false},
            {text : "<javascript>", correct:false}
        ]
    },
    {
        question : "How do you create a function in JavaScript?",
        answers:[
            {text : "function:myFunction()", correct:false},
            {text : "function=myFunction()", correct:false},
            {text : "function myFuction()", correct:true},
        ]
    },
    {
        question : "How to write an IF statement in JavaScript?",
        answers:[
            {text : "if i = 5 then", correct:false},
            {text : "if(i == 5)", correct:true},
            {text : "if i = 5", correct:false},
            {text : "if i == 5 then", correct:false}
        ]
    }
]

@media (max-width:400px){
    .btnGrid{
        display: grid;
        grid-template-columns: repeat(1,auto);
        gap: 10px;
        margin: 20px 10px;
    }
}
