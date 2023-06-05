/* My Answer 01 */
function solution(n, k) {
  return Array.from({ length: n }, (_, i) => i + 1).filter((v) => v % k === 0);
}
/* 



*/
/* My Answer 02 */
function solution(n, k) {
  return Array(~~(n / k))
    .fill(k)
    .map((v, i) => v * (i + 1));
}
