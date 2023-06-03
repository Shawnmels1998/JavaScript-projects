const input = document.querySelector(".input");
const character = document.querySelector(".character");
const word = document.querySelector(".word");
const readingTime = document.querySelector(".reading-time");
const wordLimit = document.querySelector(".word-limit");
const WORD_LIMIT = 100;

input.addEventListener("keyup", handleInput);

function handleInput() {
  const value = input.value;
  character.innerHTML = value.length;
  const words = value.match(/\b[-?(\w+)?]+\b/gi);

  if (words) {
    const wordCount = words.length;
    word.innerHTML = wordCount;
    wordLimit.innerHTML = WORD_LIMIT - wordCount;
    handleWordLimit();
    handleReadingTime(wordCount);
  } else {
    word.innerHTML = 0;
    wordLimit.innerHTML = WORD_LIMIT;
    readingTime.innerHTML = "0s";
  }
}

function handleWordLimit() {
  input.addEventListener("keydown", function (e) {
    const value = input.value;
    const words = value.match(/\b[-?(\w+)?]+\b/gi);
    if (words && words.length > WORD_LIMIT - 1 && e.code !== "Backspace") {
      e.preventDefault();
    }
  });
}

function handleReadingTime(wordCount) {
  const seconds = Math.floor((wordCount * 60) / 225);
  if (seconds > 59) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds - minutes * 60;
    readingTime.innerHTML = `${minutes}m${remainingSeconds}s`;
  } else {
    readingTime.innerHTML = `${seconds}s`;
  }
}
