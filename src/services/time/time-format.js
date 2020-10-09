const timeMap = ['years', 'months', 'days', 'hours', 'minutes', 'seconds']
const numbers = '\\d+(?:[\\.,]\\d{0,3})?'
const datePattern = `(${numbers}Y)?(${numbers}M)?(${numbers}D)?`
const timePattern = `T(${numbers}H)?(${numbers}M)?(${numbers}S)?`
const pattern = new RegExp(`P(?:${datePattern}(?:${timePattern})?)`)

/**
 * @param {string} duration
 * @returns {object} { days, hours, minutes, seconds }
 */
export function formatTime(duration) {
  return duration.match(pattern).slice(1).reduce((prev, next, id) => {
    prev[timeMap[id]] = parseFloat(next) || 0
    return prev
  }, {})
}

/**
 * @param {string} videoDuration: follow ISO 8601 (https://vi.wikipedia.org/wiki/ISO_8601)
 * @returns {string} converted time => 00:00:00
 */
export function formatVideoDuration(videoDuration) {
  if (!videoDuration) {
    return ''
  }

  let { days, hours, minutes, seconds } = formatTime(videoDuration)
  let secondsString = seconds.toString()
  let minutesString = minutes.toString()
  let accumulatedHours = days * 24 + hours

  if (seconds < 10) {
    secondsString = seconds.toString().padStart(2, '0')
  }

  if (minutes < 10 && hours !== 0) {
    minutesString = minutes.toString().padStart(2, '0')
  }

  if (!accumulatedHours) {
    return [minutesString, secondsString].join(':')
  } else {
    return [accumulatedHours, minutesString, secondsString].join(':')
  }
}