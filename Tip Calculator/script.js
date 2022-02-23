const btn = document.querySelector(".btn");
const error = document.querySelector(".error");
const tip = document.querySelector(".tip");
const total = document.querySelector(".total");

const hideError = () => {
    setTimeout(() => {
        error.style.display = "none";
    }, 3000);
}

const calculateTip = () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;

    if (bill === "" || rate == "") {
        error.style.display = "block";
        hideError();
    } else if (isNaN(bill)) {
        error.innerHTML = "please enter a number";
        error.style.display = "block";
        hideError();
    } else {
        let tipAmount = bill * rate;
         tipAmount = Math.ceil(tipAmount);
        tip.innerHTML =`Tip amount: $${tipAmount}`;

        let totalBill = Number(bill) + tipAmount;
        total.innerHTML = `Total amount: $${totalBill}`;
        }
}

btn.addEventListener("click", calculateTip);