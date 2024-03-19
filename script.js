const questions = [
    {
        question: "What is the full form of CSS?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is the correct HTML tag for inserting a line break?",
        options: ["<break>", "<br>", "<lb>", "<newline>"],
        answer: "<br>"
    },
    {
        question: "What is the correct CSS syntax for making all <p> elements bold?",
        options: ["p {font-style: bold;}", "p {font-weight: bold;}", "p {text-style: bold;}", "p {style: bold;}"],
        answer: "p {font-weight: bold;}"
    },
    {
        question: "What HTML attribute is used to specify additional information about an element?",
        options: ["class", "id", "style", "title"],
        answer: "title"
    },
    {
        question: "Which CSS property is used for controlling the layout of an element?",
        options: ["position", "layout", "display", "align"],
        answer: "display"
    }
];

let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const resultElement = document.getElementById('result');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        resultElement.textContent = "Correct!";
        score++;
    } else {
        resultElement.textContent = "Incorrect. The correct answer is: " + currentQuestion.answer;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionElement.textContent = " ";
    optionsContainer.innerHTML = '';
    document.getElementById('next-btn').style.display = 'none';
    //resultElement.textContent = "Quiz finished!<br>Your score: " + score + " out of " + questions.length;
    resultElement.innerHTML = "<strong>Quiz finished!</strong><br>Your score: " + score + " out of " + questions.length;
}

document.getElementById('next-btn').addEventListener('click', showQuestion);

showQuestion();
