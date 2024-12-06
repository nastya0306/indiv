const questionInput = document.createElement("input");
questionInput.id = "question-input";
questionInput.placeholder = "Введіть своє питання...";

const getButton = document.createElement("button");
getButton.id = "get-answer";
getButton.textContent = "Отримати відповідь";
const ballContainer = document.createElement("div");
ballContainer.className = "ball-container";
const ball = document.createElement("div");
ball.className = "ball";
ball.textContent = "Click";
getButton.onclick = function () {
    const question = questionInput.value.trim();
    if (question) {
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        ball.textContent = randomAnswer;
    } else {
        alert("Будь ласка, введіть своє питання!");
    }
};
document.body.appendChild(questionInput);
document.body.appendChild(getButton);
ballContainer.appendChild(ball);
document.body.appendChild(ballContainer);
    const answers = [
        "Так",
        "Запитай завтра",
        "Сам думай",
        "50\50",
        "Здається, так",
        "Нi",
        "Навряд чи",
        "Сумніваюся",
        "Запитай пізніше",
        "Спробуй ще раз",
        "Велике ні",
        "Малоймовірно.",
        "Зовсім ні."
    ];
