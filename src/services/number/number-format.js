/**
 * K: thousand
 * M: million
 * B: billion
 * T: trillion
 */
const UNITS = ['K', 'M', 'B', 'T']

/**
 * @param {string} number
 */
export function formatNumber(number) {
  const showDecimalPlace = UNITS.some((element, index) => {
    const lowerBound = Math.pow(1000, index + 1)
    const higherBound = lowerBound + lowerBound * 10
    return number > lowerBound && number < higherBound
  })
  const digits = showDecimalPlace ? 1 : 0

  for (let i = UNITS.length - 1; i >= 0; i--) {
    const decimal = Math.pow(1000, i + 1)

    if (number >= decimal) {
      return (number / decimal).toFixed(digits) + UNITS[i]
    }
  }

  return number.toString()
}