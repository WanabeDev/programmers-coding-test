/* My Answer 01 */
function solution(n) {
  let result = [n];
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    result.push(n);
  }
  return result;
}
/* 



*/
/* My Answer 02 */
function solution(n, arr = []) {
  arr.push(n);
  if (n === 1) return arr;
  if (n % 2 === 0) return solution(n / 2, arr);
  return solution(3 * n + 1, arr);
}
