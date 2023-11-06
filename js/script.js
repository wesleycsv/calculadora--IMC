import { Modal } from "./Modal.js"
import { alertError } from "./alertError.js"
import { IMC, validateNumber } from "./utils.js"

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = function (event) {
  event.preventDefault()

  let weight = inputWeight.value
  let height = inputHeight.value

  let isValidateDados = validateNumber(weight) || validateNumber(height)

  if (isValidateDados) {
    alertError.open()
    alertError.closeMessageErrorInput(inputWeight)
    alertError.closeMessageErrorInput(inputHeight)
    return
  }

  alertError.close()

  let result = IMC(weight, height)
  Modal.showMessage(result)
  Modal.open()
}
