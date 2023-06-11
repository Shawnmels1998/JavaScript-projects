const elements = {
  main: document.querySelector(".main"),
  alertBox: document.querySelector(".alert"),
  exclamationIcon: document.querySelector(".fa-exclamation-circle"),
  msg: document.querySelector(".msg"),
  closeBtn: document.querySelector(".close-btn"),
  closeIcon: document.querySelector(".fa-times"),
};

class ShowAlert {
  constructor(state, borderColor, color) {
    this.alertBox = elements.alertBox;
    this.msg = elements.msg;
    this.closeBtn = elements.closeBtn;
    this.state = state;
    this.borderColor = borderColor;
    this.color = color;
  }

  trigger(message) {
    const { alertBox, msg, closeBtn } = this;

    alertBox.style.background = this.state;
    alertBox.style.borderColor = this.borderColor;
    msg.textContent = message;
    msg.style.color = this.color;
    elements.exclamationIcon.style.color = this.color;
    elements.closeIcon.style.color = this.color;

    alertBox.classList.add("show");
    alertBox.classList.remove("hide");
    setTimeout(() => {
      alertBox.classList.remove("show");
      alertBox.classList.add("hide");
    }, 5000);
    closeBtn.addEventListener("click", () => {
      alertBox.classList.remove("show");
      alertBox.classList.add("hide");
    });
  }
}

const warning = new ShowAlert("#ffdb9b", "#ffa502", "#ce8500");
const danger = new ShowAlert("#f8d7da", "#d1281f", "#721c24");

elements.main.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    danger.trigger("Alert: This is a dangerous alert!");
  } else if (e.target.classList.contains("btn-warning")) {
    warning.trigger("Alert: This is a Warning alert!");
  }
});
