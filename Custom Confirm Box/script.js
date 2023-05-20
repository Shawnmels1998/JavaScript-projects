const getElement = (selector) => document.querySelector(selector);

const btn1 = getElement(".btn-1");
const btn2 = getElement(".btn-2");
const confirmEl = getElement(".confirm");
const closeEl = getElement(".close");
const title = getElement(".title");
const content = getElement(".content");
const btnOk = getElement(".btn-ok");
const btnCancel = getElement(".btn-cancel");

class ShowConfirm {
  constructor(title, content, ok, cancel) {
    this.title = title;
    this.content = content;
    this.ok = ok;
    this.cancel = cancel;
  }

  trigger(callbackFn) {
    title.textContent = this.title;
    content.textContent = this.content;
    btnOk.innerText = this.ok;
    btnCancel.innerText = this.cancel;

    confirmEl.classList.remove("close-modal");

    const closeModal = () => {
      confirmEl.classList.add("close-modal");
    };

    closeEl.addEventListener("click", closeModal);
    btnCancel.addEventListener("click", closeModal);

    btnOk.addEventListener("click", () => {
      callbackFn();
      closeModal();
    });
  }
}

const changeBg = (color) => {
  const setBg = () => {
    document.body.style.backgroundColor = color;
  };

  const showConfirm = new ShowConfirm(
    "Change Background",
    "You are about to change the background!",
    "Change",
    "Cancel"
  );

  showConfirm.trigger(setBg);
};

btn1.addEventListener("click", () => {
  changeBg("red");
});

btn2.addEventListener("click", () => {
  changeBg("purple");
});
