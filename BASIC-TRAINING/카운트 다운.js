/* My Answer 01 */
function solution(start, end) {
  let result = [];
  for (let i = start; end <= i; i--) {
    result.push(i);
  }
  return result;
}
/* 



*/
/* My Answer 02 */
function solution(start, end) {
  return Array.from({ length: start - end + 1 }, () => {
    return start--;
  });
}
/* 



*/
/* My Answer 03 */
function solution(start, end) {
  return Array.from(Array(start - end + 1), (_, i) => start - i);
}
