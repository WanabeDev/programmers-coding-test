/* My Answer 01 */
function solution(num_str) {
  return [...num_str].reduce((a, b) => a + Number(b), 0);
}
/* 



*/
/* My Answer 02 */
function solution(num_str) {
  return [...num_str].reduce((a, c) => a + +c, 0);
}
/* 



*/
/* My Answer 03 */
function solution(num_str) {
  var answer = 0;

  num_str.split("").map((a) => (answer += Number(a)));

  return answer;
}
