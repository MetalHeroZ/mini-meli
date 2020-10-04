export function numberHumanized(number) {
  return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
};
export function decimalHumanized(number) {
  if (number <= 9) {
    return `${number.toString()}0`;
  }
  return number.toString();
}
