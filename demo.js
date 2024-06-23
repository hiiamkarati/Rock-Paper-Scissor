let userscore = 0;
let compscore = 0;

// User clickable choice
const choices = document.querySelectorAll(".choice");
const msgg = document.querySelector("#msg");
const userpara=document.querySelector("#user-score");
const comppara=document.querySelector("#comp-score");


choices.forEach((cho) => {
    cho.addEventListener("click", () => {
        const choiceId = cho.getAttribute("id");
        playGame(choiceId);
    });
});

const drawGame = () => {
    msgg.innerText = "Game was Draw. Play again.";
    msgg.style.backgroundColor = "#081b31";
};


// Computer random choice
const compChoice = () => {
    const options = ["rock", "paper", "scissors"]; // Corrected typo in 'scissors'
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};


const playGame = (choiceId) => {
    console.log("User choice is:", choiceId);
    // Now to get computer choice
    const computerChoice = compChoice();
    console.log("Computer choice:", computerChoice);
    if (choiceId === computerChoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (choiceId === "rock") {
            // scissors, paper
            userWin = computerChoice === "paper" ? false : true;
        } else if (choiceId === "paper") {
            // rock, scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, choiceId, computerChoice);
    }
};


const showWinner = (userWin, choiceId, computerChoice) => {
    if (userWin) {
        userscore++
        userpara.innerText=userscore;
        msgg.innerText = `You win! Your ${choiceId} beats ${computerChoice}`; // Use innerText as a property
        msgg.style.backgroundColor = "green";

    } else {
        compscore++;
        comppara.innerText=compscore;
        msgg.innerText = `You lost. Device ${computerChoice} beats your ${choiceId}`; // Use innerText as a property
        msgg.style.backgroundColor = "red";
    }
};