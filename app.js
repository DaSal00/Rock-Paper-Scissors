// creating variables for DOM elements of game.html
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const playerMove = document.querySelector("#playerMove");
const computerMove = document.querySelector("#computerMove");
const reset = document.querySelector("#reset");
let computerPoints = 0;
let playerPoints = 0;

//game logic
function move(button) {
  const paths = ["/img/Paper.png", "/img/Rock.png", "/img/Scissors.png"];
  let computer = paths[Math.floor(Math.random() * paths.length)];
  let p1;

  if (button.id === "paperButton") {
    p1 = paths[0];
  } else if (button.id === "rockButton") {
    p1 = paths[1];
  } else if (button.id === "scissorsButton") {
    p1 = paths[2];
  } else if (button.id === "reset") {
    p1 = "";
    computer = "";
    computerDisplay.textContent = " Computer : ";
    playerDisplay.textContent = " You : ";
    playerPoints = 0;
    computerPoints = 0;
  }

  if (p1 === paths[0] && computer == paths[1]) {
    playerPoints += 1;
  } else if (p1 === paths[0] && computer == paths[2]) {
    computerPoints += 1;
  } else if (p1 === paths[1] && computer == paths[0]) {
    computerPoints += 1;
  } else if (p1 === paths[1] && computer == paths[2]) {
    playerPoints += 1;
  } else if (p1 === paths[2] && computer == paths[1]) {
    computerPoints += 1;
  } else if (p1 === paths[2] && computer == paths[0]) {
    playerPoints += 1;
  }
  playerMove.src = p1;
  computerMove.src = computer;
  computerDisplay.textContent = ` Computer : ${computerPoints}`;
  playerDisplay.textContent = ` You : ${playerPoints}`;
}

//adding event listeners to the buttons
rockButton.addEventListener("click", () => move(event.currentTarget));
paperButton.addEventListener("click", () => move(event.currentTarget));
scissorsButton.addEventListener("click", () => move(event.currentTarget));
reset.addEventListener("click", () => move(event.currentTarget));
