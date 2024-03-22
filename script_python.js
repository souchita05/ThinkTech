const questions = [
    {
        question: "In Python, which of the following data types is mutable?",
        options: ["Tuple", "List", "String", "Dictionary"],
        answer: "List"
    },
    {
        question: "Which of the following is a correct way to comment multiple lines in Python?",
        options: ["/* This is a comment */", "<!-- This is a comment -->", " ''' This is a comment ''' ", "# This is a comment"],
        answer: " ''' This is a comment ''' "
    },
    {
        question: "Which of the following is used to generate a random integer within a specified range in Python?",
        options: ["random.randint(start, end)", "random.random(start, end)", "random.randrange(start, end)", "random.choice(start, end)"],
        answer: "random.randint(start, end)"
    },
    {
        question: "What does the strip() method do in Python?",
        options: ["Removes leading and trailing whitespaces from a string", "Splits a string into a list of substrings based on a delimiter", "Converts the characters in a string to lowercase", "Returns the index of the specified substring within a string"],
        answer: "Removes leading and trailing whitespaces from a string"
    },
    {
        question: "What is the purpose of the __init__ method in Python classes?",
        options: ["It is used to initialize class variables.", "It is used to define instance methods.", "It is called when an object is created from the class and initializes its attributes.", "It is a constructor method that creates instances of the class."],
        answer: "It is called when an object is created from the class and initializes its attributes."
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
