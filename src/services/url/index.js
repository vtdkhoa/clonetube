export function getSearchParam(location, suffix) {
  if (!location || !location.search) {
    return null
  }
  const searchParams = new URLSearchParams(location.search)
  return searchParams.get(suffix)
}