// Create by wisdom0x10
import { numberToFixed } from './number.js';
import { isNumber } from './is.js';

function formatSizeUnit(target, options) {
    var _a, _b;
    let result = Number(target);
    if (!isNumber(result) || isNaN(result))
        throw new Error(`Invalid type`);
    let from = ((_a = options === null || options === void 0 ? void 0 : options.from) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || 'kb';
    let to = (_b = options === null || options === void 0 ? void 0 : options.to) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    let keep = options === null || options === void 0 ? void 0 : options.keep;
    let convertor = (options === null || options === void 0 ? void 0 : options.convertor) || ((target, unit) => `${target}${unit}`);
    let units = ['b', 'kb', 'mb', 'gb', 'tb', 'pb'];
    let fromIndex = units.indexOf(from);
    let toIndex = units.indexOf(to) === -1 ? units.length : units.indexOf(to);
    if (fromIndex === -1 || (to && toIndex === -1))
        throw new Error(`Invalid type`);
    if (to) {
        // force
        result = result * Math.pow(1024, fromIndex - toIndex);
        return convertor(keep ? numberToFixed(result, keep) : result, to);
    }
    else {
        // auto
        while (result >= 1024 && fromIndex < toIndex) {
            result /= 1024;
            fromIndex++;
        }
        return convertor(keep ? numberToFixed(result, keep) : result, units[fromIndex]);
    }
}

export { formatSizeUnit };
