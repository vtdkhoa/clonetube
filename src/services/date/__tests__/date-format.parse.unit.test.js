import { formatPublishedAtDateString } from '../date-format'

describe('formatPublishedAtDateString', () => {
  test('formatted to string', () => {
    const mockUpPublishedAt = '2020-03-23T18:36:55Z'
    const toBeEqual = 'Tue Mar 24 2020'
    expect(formatPublishedAtDateString(mockUpPublishedAt)).toEqual(toBeEqual)
  })
})