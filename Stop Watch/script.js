const timerEl = document.querySelector(".time");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerId = null;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(displayTime, 10);
}

function pauseTimer() {
  clearInterval(timerId);
}

function resetTimer() {
  clearInterval(timerId);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  displayTime();
}

function displayTime() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  const h = hours.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");
  const ms = milliseconds.toString().padStart(3, "0");

  timerEl.textContent = `${h} : ${m} : ${s} : ${ms}`;
}
