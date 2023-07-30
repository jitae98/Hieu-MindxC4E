const ANSWERS = [
  {
    words: "Dolphin",
    hint: "Type of fish who they can rescue people to avoid dangerous conditions",
  },
  {
    hint: "Chair",
    words: "The thing that we can sit down on it",
  },
  {
    words: "Bed",
    hint: "The thing that we can lay down after a long day study and work",
  },
];

// Tạo biến
let guessRemaining = 3;
let timeRemaining = 60;
let answerObj;
let guessedLetters = [];

// Lấy DOM
const domUserInputDiv = document.getElementById("answer_input_blocks");
const domGuessRemain = document.getElementById("user_guess_remain");
const domTimeLeft = document.getElementById("time_left");
const domAnswerHintContent = document.getElementById("answer_hint_content");
const domGuessForm = document.getElementById("guess_form");
const domGuessInput = document.getElementById("user_guess_input");

// Update số lần đoán và thời gian còn lại
function updateGuessAndTime() {
  domGuessRemain.innerText = guessRemaining;
  domTimeLeft.innerText = timeRemaining;
}

// Generate ra câu hỏi bất kì trong ANSWER
function generateRandomAnswer(answers) {
  const randomAnswerIndex = Math.floor(Math.random() * answers.length);
  if (answers && Array.isArray(answers) && answers.length > 0) {
    return answers[randomAnswerIndex];
  }
  return {};
}

// Start a new game
function newGame() {
  guessRemaining = 3;
  timeRemaining = 60;
  guessedLetters = [];
  answerObj = generateRandomAnswer(ANSWERS);
  domAnswerHintContent.innerText = "Hint: " + answerObj.hint;
  updateGuessAndTime();
  updateAnswerBlocks();
}

// Check if the game is over
function isGameOver() {
  return (
    timeRemaining <= 0 ||
    guessRemaining <= 0 ||
    !domUserInputDiv.innerText.includes("*")
  );
}

// End the game
function endGame() {
  clearInterval(timer);
  if (timeRemaining <= 0) {
    alert("Time's up!");
  } else if (guessRemaining <= 0) {
    alert("No more guesses left!");
  } else {
    alert("Congratulations! You've guessed the word.");
  }
}

// Update the answer blocks
function updateAnswerBlocks() {
  domUserInputDiv.innerHTML = "";
  for (let i = 0; i < answerObj.words.length; i++) {
    if (guessedLetters.includes(answerObj.words[i].toLowerCase())) {
      domUserInputDiv.innerHTML += `<span class="answer_input_block answer_input_word">${answerObj.words[i]}</span>`;
    } else {
      domUserInputDiv.innerHTML += `<span class="answer_input_block answer_input_word">*</span>`;
    }
  }
}

// Guess a letter
domGuessForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const guess = domGuessInput.value.toLowerCase();
  domGuessInput.value = "";
  if (!guessedLetters.includes(guess)) {
    guessedLetters.push(guess);
    if (!answerObj.words.toLowerCase().includes(guess)) {
      guessRemaining--;
    }
  }
  updateGuessAndTime();
  updateAnswerBlocks();
  if (isGameOver()) {
    endGame();
  }
});

// Timer
const timer = setInterval(function () {
  timeRemaining--;
  updateGuessAndTime();
  if (isGameOver()) {
    endGame();
  }
}, 1000);

// Start the game
newGame();
