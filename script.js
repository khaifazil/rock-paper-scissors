let playerSelection = '';

function game() {
    let playerWins = 0;
    let aiWins = 0;
    let tie = 0;
    
    for (let i = 1; i <= 2; i++) {
        playerSelection = prompt("Choose Rock, Paper or Scissors.");
        computerSelection = computerPlay();
        let whoWin = playRound(playerSelection, computerSelection);

        if(whoWin == "AI"){
          aiWins++;
        }
        if(whoWin == "Player"){
          playerWins++;
        }
        if(whoWin == "Tie"){
          tie++;
        }
        console.log (`Total score: Player: ${playerWins} AI: ${aiWins} Ties: ${tie}`);
    }
    if (playerWins > aiWins) {
        return "Player Wins!";
    }else if (aiWins > playerWins) {
        return "AI wins!";
    }else {
        return "Its a tie!"
    }
}

function playRound(playerSelection, computerSelection) {
  //
    let lowerCase = playerSelection.toLowerCase();
    playerSelection = lowerCase[0].toUpperCase() + lowerCase.slice(1);

    let whoWin = "";

    if (playerSelection == "Rock" && computerSelection == "Rock") {
        console.log(`You chose ${playerSelection} and AI chose ${computerSelection}. Its a tie!`);
        whoWin = "Tie";
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        console.log(`You chose ${playerSelection} and AI chose ${computerSelection}. Its a tie!`);
        whoWin = "Tie";
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        console.log(`You chose ${playerSelection} and AI chose ${computerSelection}. Its a tie!`);
        whoWin = "Tie";
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log(`You chose ${playerSelection} and AI chose ${computerSelection}. You Lose! Paper beats Rock`);
        whoWin = "AI";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log(`You chose ${playerSelection} and AI chose ${computerSelection}. Its a win! Rock beats Scissors`);
        whoWin = "Player";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log(`You chose ${playerSelection} and AI chose ${computerSelection}. You win! Paper beats Rock`);
        whoWin = "Player";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log(`You chose ${playerSelection} and AI chose ${computerSelection}. You lose! Scissors beats Paper`);
        whoWin = "AI";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log(`You chose ${playerSelection} and AI chose ${computerSelection}. You lose! Rock beats Scissors`);
        whoWin = "AI";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log(`You chose ${playerSelection} and AI chose ${computerSelection}. You win! Scissors beats Paper`);
        whoWin = "Player";
    } else {
        console.log(`Please enter: Rock, Paper or Scissors!`)
    }
    //return who wins
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
