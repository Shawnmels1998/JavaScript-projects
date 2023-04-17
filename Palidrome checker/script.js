
const button = document.querySelector(".btn");
const resultElement = document.querySelector(".result");

button.addEventListener("click", checkPalindrome);

function checkPalindrome() {
  const inputWord = document.querySelector(".input-text").value.toLowerCase();
  const wordLength = inputWord.length;

  const firstHalf = inputWord.substring(0, Math.floor(wordLength / 2));
  const secondHalf = inputWord.substring(wordLength - Math.floor(wordLength / 2)).split("").reverse().join("");

  const isPalindrome = (firstHalf === secondHalf);

  if (isPalindrome) {
    resultElement.innerHTML = `${inputWord.toUpperCase()} is a palindrome`;
  } else {
    resultElement.innerHTML = `${inputWord.toUpperCase()} is NOT a palindrome`;
  }
}
