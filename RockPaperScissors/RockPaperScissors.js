console.log("hi");
console.log("Make your choice : Rock - Paper, or Scissors ! Choose wisely.");
let userScore = 0;
let computerScore = 0;

const userChoice = () => {
  switch (userChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("port nawak !!! type rock, paper, or scissors");
  }
};

console.log("Player's choice : ---->  "+getUserChoice("rock"));
console.log(userChoice['2']);

const computerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log("It's a tie game - no winner !");
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "sorry, computer won";
    } else {
      return "congratulation, you won";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "sorry, computer won";
    } else {
      return "congratulation, you won";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "sorry, computer won";
    } else {
      return "congratulation, you won";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
};


console.log("---------------------");
determineWinner;
console.log(computerChoice());
console.log(determineWinner());
console.log("---------------------");
console.log(determineWinner('rock', 'scissors'))
console.log(determineWinner('paper', 'scissors'))
console.log(determineWinner('rock', 'rock'))
