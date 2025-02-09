// Assign elements to variables
const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const questionLimit = quiz.length;
let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;
let incorrectAnswers = [];

window.onload = function () {
    homeBox.querySelector(".total-question").innerHTML = questionLimit;
};

function startQuiz() {
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    setAvailableQuestions();
    getNewQuestion();
    answersIndicator();
}

function setAvailableQuestions() {
    availableQuestions = [...quiz];
}

function getNewQuestion() {
    questionNumber.innerHTML = `Question ${questionCounter + 1} of ${questionLimit}`;
    const questionIndex = availableQuestions.splice(Math.floor(Math.random() * availableQuestions.length), 1)[0];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    
    if (currentQuestion.hasOwnProperty("img")) {
        const img = document.createElement("img");
        img.src = currentQuestion.img;
        img.className = "question-img";
        questionText.appendChild(img);
    }
    
    optionContainer.innerHTML = '';
    availableOptions = [...Array(currentQuestion.options.length).keys()];
    availableOptions.sort(() => Math.random() - 0.5);
    
    availableOptions.forEach(index => {
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[index];
        option.id = index;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this)");
    });
    questionCounter++;
}

function getResult(element) {
    const id = parseInt(element.id);
    if (id === currentQuestion.answer) {
        element.classList.add("correct");
        updateAnswerIndicator("correct");
        correctAnswers++;
    } else {
        element.classList.add("wrong");
        updateAnswerIndicator("wrong");
        
        incorrectAnswers.push({
            question: currentQuestion.q,
            selected: currentQuestion.options[id],
            correct: currentQuestion.options[currentQuestion.answer],
            img: currentQuestion.img || null
        });
        
        for (let i = 0; i < optionContainer.children.length; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }
    }
    attempt++;
    unclickableOptions();
}

function unclickableOptions() {
    for (let i = 0; i < optionContainer.children.length; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }
}

function answersIndicator() {
    answersIndicatorContainer.innerHTML = '';
    for (let i = 0; i < questionLimit; i++) {
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType) {
    answersIndicatorContainer.children[questionCounter - 1].classList.add(markType);
}

function next() {
    if (questionCounter === questionLimit) {
        quizOver();
    } else {
        getNewQuestion();
    }
}

function quizOver() {
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    quizResult();
    showIncorrectAnswers();
}

function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = questionLimit;
    resultBox.querySelector(".total-attempt").innerHTML = attempt;
    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
    const percentage = (correctAnswers / questionLimit) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + questionLimit;
}

function showIncorrectAnswers() {
    let incorrectContainer = document.createElement("div");
    incorrectContainer.className = "incorrect-answers";
    incorrectContainer.innerHTML = "<h3>Incorrect Answers</h3>";
    
    incorrectAnswers.forEach((item, index) => {
        let questionBlock = document.createElement("div");
        questionBlock.className = "incorrect-answer-item";
        questionBlock.innerHTML = `
            <p><strong>Q${index + 1}:</strong> ${item.question}</p>
            ${item.img ? `<img src='${item.img}' class='incorrect-img' />` : ''}
            <p><span style='color: red;'>Your Answer:</span> ${item.selected}</p>
            <p><span style='color: green;'>Correct Answer:</span> ${item.correct}</p>
            <hr>
        `;
        incorrectContainer.appendChild(questionBlock);
    });
    resultBox.appendChild(incorrectContainer);
}

function resetQuiz() {
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
    availableQuestions = [];
    incorrectAnswers = [];
}

function tryAgainQuiz() {
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    resetQuiz();
    startQuiz();
}

function goToHome() {
    resultBox.classList.add("hide");
    homeBox.classList.remove("hide");
    resetQuiz();
}
