/* My Answer 01 */
function solution(a, b) {
  return a % 2 === 0 && b % 2 === 0
    ? Math.abs(a - b)
    : a % 2 !== 0 && b % 2 !== 0
    ? Math.pow(a, 2) + Math.pow(b, 2)
    : 2 * (a + b);
}
/* 



*/
/* My Answer 02 */
function solution(a, b) {
  if (a % 2 === 0 && b % 2 === 0) {
    return Math.abs(a - b);
  } else if (a % 2 !== 0 && b % 2 !== 0) {
    return Math.pow(a, 2) + Math.pow(b, 2);
  } else if (a % 2 === 1 || b % 2 === 1) {
    return 2 * (a + b);
  }
}
