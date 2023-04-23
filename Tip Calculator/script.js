const elements = {
  btn: document.querySelector(".btn"),
  error: document.querySelector(".error"),
  tip: document.querySelector(".tip"),
  total: document.querySelector(".total"),
  bill: document.querySelector(".bill"),
  rate: document.querySelector(".rate"),
};

const hideError = () => {
  setTimeout(() => {
    elements.error.style.display = "none";
  }, 3000);
};

const showError = (message) => {
  elements.error.innerHTML = message;
  elements.error.style.display = "block";
  hideError();
};

const calculateTip = () => {
  const { bill, rate } = elements;

  if (!bill.value || !rate.value) {
    showError("Please enter the bill amount and tip rate.");
  } else if (isNaN(bill.value)) {
    showError("Please enter a valid number for the bill amount.");
  } else {
    const tipAmount = Math.ceil(bill.value * rate.value);
    const totalBill = Number(bill.value) + tipAmount;

    elements.tip.innerHTML = `Tip amount: $${tipAmount}`;
    elements.total.innerHTML = `Total amount: $${totalBill}`;
  }
};

elements.btn.addEventListener("click", calculateTip);
