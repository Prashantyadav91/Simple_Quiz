const questions = [
    {
        question: "In how many ways can we add CSS to our HTML file?",
        answers: [
            {text: "1",correct: false},
            {text: "2",correct: false},
            {text: "3",correct: true},
            {text: "4",correct: false},
        ]
    },
    {
        question: "Which type of CSS holds highest priority?",
        answers: [
            {text: "Inline CSS",correct: true},
            {text: "Internal or Embedded CSS",correct: false},
            {text: "External CSS",correct: false},
            {text: "All of these have same priority",correct: false},
        ]
    },
    {
        question: "How many types of list are in HTML",
        answers: [
            {text: "1",correct: false},
            {text: "2",correct: false},
            {text: "3",correct: true},
            {text: "4",correct: false},
        ]
    },
    {
        question: "Which is the smallest Animal in the world?",
        answers: [
            {text: "Rabbit",correct: false},
            {text: "Mongoose",correct: false},
            {text: "frog",correct: false},
            {text: "Etruscan shrew",correct: true},
        ]
    },
    {
        question: "Which is the largest Animal in the world?",
        answers: [
            {text: "Shark",correct: false},
            {text: "Blue Whale",correct: true},
            {text: "Elephant",correct: false},
            {text: "Giraffe",correct: false},
        ]
    },
    {
        question: "Who is the prime minister of India?",
        answers: [
            {text: "Mr. Droupadi Murmu",correct: false},
            {text: "Mr. Rahul gandhi",correct: false},
            {text: "Mr. Narendra Damodardas Modi",correct: true},
            {text: "Mr. Ram Nath Kovind",correct: false},
        ]
    },
    {
        question: "Who was the first prime minister of India?",
        answers: [
            {text: "Mr. Shubhas chandra Bose",correct: false},
            {text: "Mr. Mohandas Karamchand Gandhi",correct: false},
            {text: "Pt. Jawahar Lal Nehru",correct: true},
            {text: "Dr. Rajendra Prasad",correct: false},
        ]
    },
    {
        question: "Which is the largest Ocean in the world?",
        answers: [
            {text: "Pacific Ocean",correct: true},
            {text: "Atlantic Ocean",correct: false},
            {text: "indian Ocean",correct: false},
            {text: "Arctic Ocean",correct: false},
        ]
    },
    {
        question: "Which country is also called the land of rising Sun?",
        answers: [
            {text: "Russia",correct: false},
            {text: "Japan",correct: true},
            {text: "North korea",correct: false},
            {text: "America",correct: false},
        ]
    },
    {
        question: "Which Kind of condition of water will turn cold faster?",
        answers: [
            {text: "cold water",correct: false},
            {text: "Moderate water",correct: false},
            {text: "Hot water",correct: true},
            {text: "None of these",correct: false},
        ]
    },
];

const quesEle = document.getElementById("question");
const ansBtns = document.getElementById("answer-button");
const nextBtn = document.getElementById("next-btn");
let curntQuesIndx = 0;
let score = 0;

function startQuiz(){
    curntQuesIndx = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQues();
}
function showQues(){
    resetQuiz();
    let curntQues = questions[curntQuesIndx];
    let quesNo = curntQuesIndx + 1;
    quesEle.innerHTML = quesNo + ". " + curntQues.question;

    curntQues.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBtns.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAns)
    });

}

function resetQuiz(){
    nextBtn.style.display = "none";
    while(ansBtns.firstChild){
        ansBtns.removeChild(ansBtns.firstChild);
    }
}

function selectAns(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansBtns.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore(){
    resetQuiz();
    quesEle.innerHTML  = `You scored ${score} out of ${questions.length}!`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextBtn(){
    curntQuesIndx++;
    if(curntQuesIndx < questions.length){
        showQues();
    }else{
        showScore();
    }
}



nextBtn.addEventListener("click",()=>{
    if(curntQuesIndx < questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
});



startQuiz();
