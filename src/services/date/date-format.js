/**
 * @param {string} dateString
 * @returns {string} converted date
 */
export function formatPublishedAtDateString(dateString) {
  if (!dateString) {
    return ''
  }
  const newDate = new Date(Date.parse(dateString))
  return newDate.toDateString()
}