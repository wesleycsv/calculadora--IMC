export const Modal = {
  btnClose: document.querySelector(".btn-close"),
  wrapper: document.querySelector(".wrap-modal"),
  message: document.querySelector(".modalMessage"),
  open() {
    this.wrapper.classList.add("open")
  },
  close() {
    this.wrapper.classList.remove("open")
  },
  showMessage(message) {
    Modal.message.innerText = message
  },
}

Modal.btnClose.onclick = function () {
  Modal.close()
}

window.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    Modal.close()
  }
})
