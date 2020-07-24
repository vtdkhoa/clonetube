import { formatNumber } from '../number-format'

test('formatNumber(0)', () => {
  expect(formatNumber(0)).toEqual('0')
})

test('formatNumber(8)', () => {
  expect(formatNumber(8)).toEqual('8')
})

test('formatNumber(23)', () => {
  expect(formatNumber(23)).toEqual('23')
})

test('formatNumber(238)', () => {
  expect(formatNumber(238)).toEqual('238')
})

test('formatNumber(1001)', () => {
  expect(formatNumber(1001)).toEqual('1.0K')
})

test('formatNumber(1099)', () => {
  expect(formatNumber(1099)).toEqual('1.1K')
})

test('formatNumber(5298)', () => {
  expect(formatNumber(5298)).toEqual('5.3K')
})

test('formatNumber(10053)', () => {
  expect(formatNumber(10053)).toEqual('10.1K')
})

test('formatNumber(10100)', () => {
  expect(formatNumber(10100)).toEqual('10.1K')
})

test('formatNumber(10999)', () => {
  expect(formatNumber(10999)).toEqual('11.0K')
})

test('formatNumber(11732)', () => {
  expect(formatNumber(11732)).toEqual('12K')
})

test('formatNumber(100000)', () => {
  expect(formatNumber(100000)).toEqual('100K')
})

test('formatNumber(532000)', () => {
  expect(formatNumber(532000)).toEqual('532K')
})

test('formatNumber(1000000)', () => {
  expect(formatNumber(1000000)).toEqual('1M')
})

test('formatNumber(1230000)', () => {
  expect(formatNumber(1230000)).toEqual('1.2M')
})

test('formatNumber(23000000)', () => {
  expect(formatNumber(23000000)).toEqual('23M')
})

test('formatNumber(872000000)', () => {
  expect(formatNumber(872000000)).toEqual('872M')
})

test('formatNumber(1000000000)', () => {
  expect(formatNumber(1000000000)).toEqual('1B')
})

test('formatNumber(1500000000)', () => {
  expect(formatNumber(1500000000)).toEqual('1.5B')
})

test('formatNumber(20000000000)', () => {
  expect(formatNumber(20000000000)).toEqual('20B')
})

test('formatNumber(387000000000)', () => {
  expect(formatNumber(387000000000)).toEqual('387B')
})

test('formatNumber(1000000000000)', () => {
  expect(formatNumber(1000000000000)).toEqual('1T')
})

test('formatNumber(1800000000000)', () => {
  expect(formatNumber(1800000000000)).toEqual('1.8T')
})