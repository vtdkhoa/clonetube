import { formatTime } from '../time-format'

describe('time-format', () => {
  test('parse 4 seconds video duration', () => {
    expect(formatTime('PT4S')).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 4
    })
  })

  test('parse 15 seconds video duration', () => {
    expect(formatTime('PT15S')).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 15
    })
  })

  test('parse 01:00 min video duration', () => {
    expect(formatTime('PT1M')).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0
    })
  })

  test('parse 01:30 min video duration', () => {
    expect(formatTime('PT1M30S')).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 30
    })
  })

  test('parse 10:15 min video duration', () => {
    expect(formatTime('PT10M15S')).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 10,
      seconds: 15
    })
  })

  test('parse 02:08:23 hours video duration', () => {
    expect(formatTime('PT2H8M23S')).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 2,
      minutes: 8,
      seconds: 23
    })
  })

  test('parse 15:30:56 hours video duration', () => {
    expect(formatTime('PT15H30M56S')).toEqual({
      years: 0,
      months: 0,
      days: 0,
      hours: 15,
      minutes: 30,
      seconds: 56
    })
  })

  test('parse 00:29:59 days video duration', () => {
    expect(formatTime('P1DT29M59S')).toEqual({
      years: 0,
      months: 0,
      days: 1,
      hours: 0,
      minutes: 29,
      seconds: 59
    })
  })
})