const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", handleButtonClick);

function handleButtonClick(e) {
  const buttonClicked = e.target;
  const action = buttonClicked.dataset.action;

  if (!action) {
    return;
  }

  const currentCount = parseInt(count.textContent);
  const newCount = calculateNewCount(action, currentCount);
  updateCountDisplay(newCount);
  setColor(newCount);
}

function calculateNewCount(action, currentCount) {
  if (action === "add") {
    return currentCount + 1;
  } else if (action === "subtract") {
    return currentCount - 1;
  } else {
    return 0;
  }
}

function updateCountDisplay(newCount) {
  count.textContent = newCount;
}

function setColor(newCount) {
  if (newCount > 0) {
    count.style.color = "yellow";
  } else if (newCount < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "white";
  }
}

