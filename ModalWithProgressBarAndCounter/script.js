const modal = document.getElementById("modal");
const input = document.getElementById("link");
const btn = document.getElementById("btn");
const close = document.getElementsByClassName("close")[0];
const progressBar = document.getElementById("pbar");
const counting = document.getElementById("counting");

btn.addEventListener("click", openPopup);
close.addEventListener("click", closePopup);
window.addEventListener("click", closeOutsideModal);

let reverseCounter = 10;

function openPopup(e) {
  e.preventDefault();
  console.log(input.value);
  modal.style.display = "block";
  startCountdown();
}

function closePopup() {
  modal.style.display = "none";
}

function closeOutsideModal(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

function startCountdown() {
  let downloadTimer = setInterval(function() {
    progressBar.value = 10 - (--reverseCounter);
    if (reverseCounter <= -1) {
      clearInterval(downloadTimer);
      closePopup();
      window.open(input.value, "_blank");
    }
    counting.innerHTML = reverseCounter;
  }, 1000);
}
