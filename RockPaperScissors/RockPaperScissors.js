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
  Math.floor(Math.random() * 3);
  return getComputerChoice;
}
console.log(getComputerChoice)
