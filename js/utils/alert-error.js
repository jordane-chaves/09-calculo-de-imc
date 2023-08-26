export class AlertError {
  static element = document.querySelector('.alert-error')

  static open() {
    this.element.classList.add('open')
  }

  static close() {
    this.element.classList.remove('open')
  }
}
