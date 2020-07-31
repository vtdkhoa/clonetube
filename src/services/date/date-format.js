export function formatPublishedAtDateString(dateString) {
  if (!dateString) {
    return ''
  }
  const newDate = new Date(Date.parse(dateString))
  return newDate.toDateString()
}