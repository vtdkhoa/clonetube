import { formatVideoDuration } from '../time-format'

describe('formatVideoDuration', () => {
  test('formats 4s video', () => {
    expect(formatVideoDuration('PT4S')).toEqual('0:04')
  })

  test('formats 15s video', () => {
    expect(formatVideoDuration('PT15S')).toEqual('0:15')
  })

  test('formats 01:00 min video', () => {
    expect(formatVideoDuration('PT1M')).toEqual('1:00')
  })

  test('formats 01:30 min video', () => {
    expect(formatVideoDuration('PT1M30S')).toEqual('1:30')
  })

  test('formats 10:15 min video', () => {
    expect(formatVideoDuration('PT10M15S')).toEqual('10:15')
  })

  test('formats 02:08:23 hours video', () => {
    expect(formatVideoDuration('PT2H8M23S')).toEqual('2:08:23')
  })

  test('formats 15:30:56 hours video', () => {
    expect(formatVideoDuration('PT15H30M56S')).toEqual('15:30:56')
  })

  test('formats 01:00:29:59 days video', () => {
    expect(formatVideoDuration('P1DT29M59S')).toEqual('24:29:59')
  })
})