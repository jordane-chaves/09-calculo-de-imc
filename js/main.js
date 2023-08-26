import { AlertError } from './utils/alert-error.js'
import { calculateIMC } from './utils/calculate-imc.js'
import { isNotANumber } from './utils/is-not-a-number.js'
import { Modal } from './utils/modal.js'
import { createKeyboardListener } from './utils/keyboard-listener.js'

const form = document.querySelector('form')
const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')
const keyboardListener = createKeyboardListener()

keyboardListener.subscribe(Modal.hostKeys)

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()

  const isModalOpen = Modal.isOpen()

  if (isModalOpen) {
    return;
  }

  const height = inputHeight.value
  const weight = inputWeight.value

  const heightOrWeightIsNotANumber = isNotANumber(height) || isNotANumber(weight)

  if (heightOrWeightIsNotANumber) {
    AlertError.open()
    return
  }

  const result = calculateIMC({ height, weight })
  displayResultMessage(result)

  inputHeight.value = ''
  inputWeight.value = ''
}

/**
 * @param {Object} data
 * @param {string} data.imc
 * @param {string} data.rating
 */
function displayResultMessage(data) {
  const { imc, rating } = data

  Modal.open()
  Modal.message({ imc, rating })
}
