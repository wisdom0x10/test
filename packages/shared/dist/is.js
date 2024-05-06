// Create by wisdom0x10
const objectToString = Object.prototype.toString;
const toTypeString = (val) => {
    return objectToString.call(val);
};
// extract "RawType" from strings like "[object RawType]"
const toRawType = (val) => toTypeString(val).slice(8, -1);
const isString = (val) => typeof val === 'string';
const isNumber = (val) => typeof val === 'number';
const isBoolean = (val) => typeof val === 'boolean';
const isUndefined = (val) => typeof val === 'undefined';
const isNull = (val) => toTypeString(val) === '[object Null]';
const isSymbol = (val) => typeof val === 'symbol';
const isFunction = (val) => typeof val === 'function';
const isArray = Array.isArray;
const isObject = (val) => val !== null && typeof val === 'object';
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isPromise = (val) => (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => toTypeString(val) === '[object Date]';
const isRegExp = (val) => toTypeString(val) === '[object RegExp]';

export { isArray, isBoolean, isDate, isFunction, isMap, isNull, isNumber, isObject, isPlainObject, isPromise, isRegExp, isSet, isString, isSymbol, isUndefined, objectToString, toRawType, toTypeString };
