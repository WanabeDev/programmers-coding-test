/* My Answer 01 */
function solution(arr, k) {
  if (k % 2) {
    return arr.map((n) => n * k);
  } else {
    return arr.map((n) => n + k);
  }
}
/* 



*/
/* My Answer 02 */
function solution(arr, k) {
  return arr.map((n) => (k % 2 ? n * 3 : n + 2));
}
