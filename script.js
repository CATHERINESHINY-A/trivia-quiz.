document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");
    const questions = [
        {
            question: "In web dev 'HTML' is used in which of the cases?",
            answers: ["To structure", "To develop", "To destroy", "To style"],
            correct: 0
        },
        {
            question: "Extension of HTML is______",
            answers: [".css", ".js", ".destroy", ".html"],
            correct: 3
        },
        {
            question: "In web dev 'CSS' is used in which of the cases?",
            answers: ["To structure", "To develop", "To destroy", "To style"],
            correct: 3
        },
        {
            question: "Extension of CSS is______",
            answers: [".html", ".js", ".css", ".destroy"],
            correct: 2
        },
        {
            question: "In web dev 'Javascript' is used in which of the cases?",
            answers: ["To structure", "To develop", "To destroy", "To style"],
            correct: 1
        },
        {
            question: "Extension of Javascript is______",
            answers: [".js", ".html", ".destroy", ".css"],
            correct: 0
        },
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const question = questions[currentQuestionIndex];
        quizContainer.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${question.question}</h5>
                <ul class="list-group">
                    ${question.answers.map((answer, index) => `
                        <li class="list-group-item">
                            <input type="radio" name="answer" value="${index}"> ${answer}
                        </li>`).join('')}
                </ul>
                <button class="btn btn-primary mt-3" onclick="nextQuestion()">Next</button>
            </div>
        `;
    }

    window.nextQuestion = function () {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer) {
            if (parseInt(selectedAnswer.value) === questions[currentQuestionIndex].correct) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showResults();
            }
        } else {
            alert("Please select an answer!");
        }
    }

    function showResults() {
        quizContainer.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">Your Score: ${score}/${questions.length}</h5>
                <p class="card-text">Awesome you completed the quiz! Thank you for participating may your web development continues! Give us your feedback.</p>
            </div>
        `;
    }

    loadQuestion();
});




document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const score = document.getElementById('score').value;
    const suggestions = document.getElementById('suggestions').value;

    if (name && email && score && suggestions) {
        alert("Feedback submitted successfully!");
        document.getElementById('feedback-form').reset();
    } else {
        alert("Please fill out all fields correctly.");
    }
});
