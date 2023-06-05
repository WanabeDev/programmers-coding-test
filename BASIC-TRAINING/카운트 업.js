/* My Answer 01 */
function solution(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
/* 



*/
/* My Answer 02 */
function solution(start, end) {
  return Array.from({ length: end - start + 1 }, () => {
    return start++;
  });
}
