const typedWord = document.querySelector(".typed-word");
const cursor = document.querySelector(".cursor");

const wordArray = ["Web Developer", "CS student", "Tech enthusiast"];
let wordArrayIndex = 0;
let letterIndex = 0;

const typingDelay = 200;
const erasingDelay = 100;
const newWordDelay = 2000;

function type() {
  if (letterIndex < wordArray[wordArrayIndex].length) {
    toggleCursorClass("typing");
    typedWord.textContent += wordArray[wordArrayIndex][letterIndex];
    letterIndex++;
    setTimeout(type, typingDelay);
  } else {
    toggleCursorClass("typing");
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (letterIndex > 0) {
    toggleCursorClass("typing");
    typedWord.textContent = wordArray[wordArrayIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    toggleCursorClass("typing");
    wordArrayIndex = (wordArrayIndex + 1) % wordArray.length;
    setTimeout(type, typingDelay);
  }
}

function toggleCursorClass(className) {
  if (!cursor.classList.contains(className)) {
    cursor.classList.add(className);
  } else {
    cursor.classList.remove(className);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newWordDelay);
});
