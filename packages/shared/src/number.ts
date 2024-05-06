export function numberToFixed(target: number, keep = 2) {
  return Math.floor(target * Math.pow(10, keep)) / Math.pow(10, keep)
}
