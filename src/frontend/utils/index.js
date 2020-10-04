export function numberHumanized(number) {
  return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
};
export function test() {
  return 'test';
}
