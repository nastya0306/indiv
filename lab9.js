const cards = [
    { name: "6", value: 6, img: "images.png" },
    { name: "7", value: 7, img: "im7.png" },
    { name: "8", value: 8, img: "images.8.png" },
    { name: "9", value: 9, img: "images.9.png" },
    { name: "10", value: 10, img: "images.10.png" },
    { name: "Валет", value: 12, img: "images.va.png" },
    { name: "Дама", value: 10, img: "images.qu.png" },
    { name: "Король", value: 10, img: "images.k.png" },
    { name: "Туз", value: 11, img: "images.t.png" }
];


let userScore = 0;
let computerScore = 0;
let attempts = 0;

function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}

function updateGame() {
    const userCard = getRandomCard();
    const computerCard = getRandomCard();

    userScore += userCard.value;
    computerScore += computerCard.value;
    attempts++;

    document.getElementById("user-card").innerHTML = `<img src="${userCard.img}" alt="${userCard.name}">`;
    document.getElementById("user-score").innerText = userScore;

    document.getElementById("computer-card").innerHTML = `<img src="${computerCard.img}" alt="${computerCard.name}">`;
    document.getElementById("computer-score").innerText = computerScore;

    if (attempts === 3) {
        let result = "";
        if (userScore > computerScore) {
            result = "The use won!";
        } else if (userScore < computerScore) {
            result = "The computer won!";
        } else {
            result = "draw!";
        }
        alert(result);
        resetGame();
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    attempts = 0;
    document.getElementById("user-score").innerText = userScore;
    document.getElementById("computer-score").innerText = computerScore;
    document.getElementById("user-card").innerHTML = "";
    document.getElementById("computer-card").innerHTML = "";
}

document.getElementById("generate-btn").addEventListener("click", updateGame);
