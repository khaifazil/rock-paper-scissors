// let playerSelection = '';

// function game() {
//     

//     for (let i = 1; i <= 2; i++) {
//         playerSelection = prompt("Choose Rock, Paper or Scissors.");
//         computerSelection = computerPlay();
//         
//     }
//     if (playerWins > aiWins) {
//         return "Player Wins!";
//     }else if (aiWins > playerWins) {
//         return "AI wins!";
//     }else {
//         return "Its a tie!"
//     }
// }

let playerWins = 0;
let aiWins = 0;
let tie = 0;
let whoWin;
const roundResults = document.querySelector('.currentRound');

function reset() {
    playerWins = 0;
    aiWins = 0;
    tie = 0;
    roundResults.textContent = '';
}

function winner() {
    if (whoWin == "AI") {
        aiWins++;
    };
    if (whoWin == "Player") {
        playerWins++;
    };
    if (whoWin == "Tie") {
        tie++;
    };
    const score = document.querySelector('.score');
    if (playerWins == 5) {
        score.textContent = `Player Wins! Congrats!`;
        reset();
    } else if (aiWins == 5) {
        score.textContent = `AI Wins! Try again!`;
        reset();
    } else {
        score.textContent = `Player: ${playerWins} | AI: ${aiWins} | Ties: ${tie}`;
    };
};

const btnRock = document.querySelector(".btn-rock");
btnRock.addEventListener('click', function () {
    playerSelection = 'Rock';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    winner();
});

const btnPaper = document.querySelector(".btn-paper");
btnPaper.addEventListener('click', function () {
    playerSelection = 'Paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    winner();
});

const btnScissors = document.querySelector(".btn-scissors");
btnScissors.addEventListener('click', function () {
    playerSelection = 'Scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    winner();
});

function playRound(playerSelection, computerSelection) {

    let lowerCase = playerSelection.toLowerCase();
    playerSelection = lowerCase[0].toUpperCase() + lowerCase.slice(1);

    if (playerSelection == "Rock" && computerSelection == "Rock" || playerSelection == "Paper" && computerSelection == "Paper" || playerSelection == "Scissors" && computerSelection == "Scissors") {
        roundResults.textContent = `You chose ${playerSelection} and AI chose ${computerSelection}. Its a tie!`;
        whoWin = "Tie";
    } else if (playerSelection == "Rock" && computerSelection == "Paper" || playerSelection == "Paper" && computerSelection == "Scissors" || playerSelection == "Scissors" && computerSelection == "Rock") {
        roundResults.textContent = `You chose ${playerSelection} and AI chose ${computerSelection}. You Lose!`;
        whoWin = "AI";
    } else {
        roundResults.textContent = `You chose ${playerSelection} and AI chose ${computerSelection}. Its a win!`;
        whoWin = "Player";
    };
    return whoWin;
}

function computerPlay() {
    let result;
    let num = Math.floor(Math.random() * 3) + 1;

    if (num == 1) {
        result = "Paper";
    } else if (num == 2) {
        result = "Rock";
    } else if (num == 3) {
        result = "Scissors";
    }

    return result;
}
