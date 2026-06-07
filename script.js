let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".a");

const userScorePara = document.querySelector("#zero");
const compScorePara = document.querySelector("#z");
const msg = document.querySelector("#move p");

// Click events
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

// Generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

// Draw game
const drawGame = () => {
    msg.innerText = "Game was Draw!";
};

// Show winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
    }
};

// Play game
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    // Draw
    if (userChoice === compChoice) {
        drawGame();
        return;
    }

    let userWin = true;

    if (userChoice === "rock") {
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        userWin = compChoice === "scissor" ? false : true;
    } else {
        userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
};

