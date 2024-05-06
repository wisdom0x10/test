// Create by wisdom0x10
function numberToFixed(target, keep = 2) {
    return Math.floor(target * Math.pow(10, keep)) / Math.pow(10, keep);
}

export { numberToFixed };
