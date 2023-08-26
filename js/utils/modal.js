export class Modal {
  static wrapper = document.querySelector('.modal-wrapper')
  static #messageTitle = document.querySelector('.modal .title')
  static #messageBody = document.querySelector('.modal span')
  static buttonClose = document.querySelector('.modal .close')


/**
 * @param {Object} data
 * @param {string} data.imc
 * @param {string} data.rating
 */
  static message(data) {
    this.#messageTitle.innerText = `Seu IMC é de ${data.imc}`
    this.#messageBody.innerText = data.rating
  }

  static open() {
    this.wrapper.classList.add('open')
  }

  static close() {
    this.wrapper.classList.remove('open')
  }

  static isOpen() {
    return this.wrapper.classList.contains('open')
  }

  /**
   *
   * @param {Object} params
   * @param {string} params.keyPressed
   */
  static hostKeys(params) {
    const { keyPressed } = params

    const acceptedKeys = {
      Escape() {
        Modal.close()
      }
    }

    const keyFunction = acceptedKeys[keyPressed]

    if (keyFunction) {
      keyFunction()
    }
  }
}

Modal.buttonClose.addEventListener('click', () => {
  Modal.close()
})
