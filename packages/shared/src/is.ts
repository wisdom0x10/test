export const objectToString = Object.prototype.toString

export const toTypeString = (val: unknown): string => {
  return objectToString.call(val)
}

// extract "RawType" from strings like "[object RawType]"
export const toRawType = (val: unknown): string => toTypeString(val).slice(8, -1)

export const isString = (val: unknown): val is string => typeof val === 'string'

export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'

export const isUndefined = (val: unknown): val is Function => typeof val === 'undefined'

export const isNull = (val: unknown): val is null => toTypeString(val) === '[object Null]'

export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'

export const isFunction = (val: unknown): val is Function => typeof val === 'function'

export const isArray = Array.isArray

export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object'

export const isPlainObject = (val: unknown): val is object => toTypeString(val) === '[object Object]'

export const isPromise = <T = any>(val: unknown): val is Promise<T> => (isObject(val) || isFunction(val)) && isFunction((val as any).then) && isFunction((val as any).catch)

export const isMap = (val: unknown): val is Map<any, any> => toTypeString(val) === '[object Map]'

export const isSet = (val: unknown): val is Set<any> => toTypeString(val) === '[object Set]'

export const isDate = (val: unknown): val is Date => toTypeString(val) === '[object Date]'

export const isRegExp = (val: unknown): val is RegExp => toTypeString(val) === '[object RegExp]'
