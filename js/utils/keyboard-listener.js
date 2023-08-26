/**
 * @typedef ObserverParams
 * @property {string} keyPressed
 *
 * @callback ObserverFunction
 * @param {ObserverParams} params
 */

export function createKeyboardListener() {
  const state = {
    observers: []
  }

  /**
   *
   * @param {ObserverFunction} observerFunction
   */
  function subscribe(observerFunction) {
    state.observers.push(observerFunction)
  }

  /**
   * @param {ObserverParams} params
   */
  function notifyAll(params) {
    for (let observerFunction of state.observers) {
      observerFunction(params)
    }
  }

  window.addEventListener('keydown', (event) => {
    const keyPressed = event.key
    notifyAll({ keyPressed })
  })

  return {
    subscribe,
  }
}
