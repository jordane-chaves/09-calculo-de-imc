
/**
 * Receives height and weight and calculate the IMC
 *
 * @param {Object} data
 * @param {number} data.height - in centimeters
 * @param {number} data.weight - in kilos
 */
export function calculateIMC(data) {
  const { height, weight } = data

  const heightInMeters = height / 100 // converts cm to m

  const imc = (weight / heightInMeters ** 2).toFixed(2)

  const isThinness = imc < 18.5
  const isNormal = imc >= 18.5 && imc < 25
  const isOverweight = imc >= 25 && imc < 30
  const isObesity = imc >= 30 && imc < 40
  const isSevereObesity = imc >= 40

  let rating = ''

  if (isThinness) {
    rating = 'Magreza'
  }

  if (isNormal) {
    rating = 'Normal'
  }

  if (isOverweight) {
    rating = 'Sobrepeso'
  }

  if (isObesity) {
    rating = 'Obesidade'
  }

  if (isSevereObesity) {
    rating = 'Obesidade grave'
  }

  return {
    imc,
    rating,
  }
}