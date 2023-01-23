console.log("hi");
console.log("Make your choice : Rock - Paper, or Scissors ! Choose wisely.");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissor"
  ) {
    return userInput;
  } else {
    console.log("didn't understood");
  }
};
console.log(getUserChoice("ROCK"));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
    default:
      return "nawak";
      break;
  }
};

console.log(getComputerChoice());
