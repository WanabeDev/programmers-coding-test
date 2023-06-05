/* My Answer 01 */
function solution(number) {
  const sum = number
    .split("")
    .map((num) => Number(num))
    .reduce((acc, cur) => acc + cur);
  return sum < 9 ? sum : sum % 9;
}
/* 



*/
/* My Answer 02(number의 길이가 최대 100,000까지 이므로 BigInt를 활용한 해당 풀이가 적절하다) */
const solution = (n) => BigInt(n) % 9n;
/* 



*/
/* My Answer 03 */
function solution(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number.charCodeAt(i) - 48;
  }
  if (sum < 9) {
    return sum;
  } else {
    return sum % 9;
  }
}
/* 



*/
/* My Answer 04 */
function solution(number) {
  var answer = 0;

  for (let i of number) {
    answer += Number(i);
  }

  return answer % 9;
}
/* 



*/
/* My Answer 05 */
function solution(number) {
  const sum = [...number].reduce((acc, cur) => acc + parseInt(cur), 0);
  return sum % 9 === 0 ? 9 : sum % 9;
}
/* 



*/
/* My Answer 06 */
function solution(number) {
  return [...number].reduce((a, b) => +a + +b) % 9;
}
/* 



*/
/* My Answer 07 */
function solution(number) {
  return Array.from(number).reduce((acc, v) => acc + Number(v), 0) % 9;
}
