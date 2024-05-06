import { numberToFixed } from './number'
import { isNumber } from './is'

export function formatSizeUnit(
  target: number,
  options?: {
    from?: string
    to?: string
    keep?: number
    convertor?: (target: number, unit: string) => {}
  }
) {
  let result = Number(target)
  if (!isNumber(result) || isNaN(result)) throw new Error(`Invalid type`)

  let from = options?.from?.toLowerCase() || 'kb'
  let to = options?.to?.toLowerCase()
  let keep = options?.keep
  let convertor = options?.convertor || ((target: number, unit: string) => `${target}${unit}`)
  let units = ['b', 'kb', 'mb', 'gb', 'tb', 'pb']

  let fromIndex = units.indexOf(from)
  let toIndex = units.indexOf(to!) === -1 ? units.length : units.indexOf(to!)

  if (fromIndex === -1 || (to && toIndex === -1)) throw new Error(`Invalid type`)

  if (to) {
    // force
    result = result * Math.pow(1024, fromIndex - toIndex)

    return convertor(keep ? numberToFixed(result, keep) : result, to)
  } else {
    // auto
    while (result >= 1024 && fromIndex < toIndex) {
      result /= 1024
      fromIndex++
    }
    return convertor(keep ? numberToFixed(result, keep) : result, units[fromIndex])
  }
}
