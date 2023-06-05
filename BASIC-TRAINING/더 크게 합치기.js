/* My Answer 01 */
function solution(a, b) {
  const ab = Number(`${a}${b}`);
  const ba = Number(`${b}${a}`);
  return ab >= ba ? ab : ba;
}
/* 



*/
/* My Answer 02 */
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
/* 



*/
/* My Answer 03 */
function solution(a, b) {
  return Math.max(Number(a + "" + b), Number(b + "" + a));
}
