import { expect, test } from 'vitest'
import { formatSizeUnit } from '../src/convertor'

test('formatSizeUnit', () => {
  expect(formatSizeUnit(1, { from: 'kb', to: 'b' })).toBe('1024b')
  expect(formatSizeUnit(1, { from: 'gb', to: 'b' })).toBe('1073741824b')
  expect(formatSizeUnit(1, { from: 'pb', to: 'tb' })).toBe('1024tb')

  expect(formatSizeUnit(1, { from: 'b', to: 'kb', keep: 7 })).toBe('0.0009765kb')
  expect(formatSizeUnit(1, { from: 'b', to: 'gb' })).toBe('9.313225746154785e-10gb')
  expect(formatSizeUnit(1, { from: 'tb', to: 'pb', keep: 7 })).toBe('0.0009765pb')
})
