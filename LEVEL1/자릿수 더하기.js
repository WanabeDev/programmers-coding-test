/* My Answer 01 */
function solution(n) {
  return n < 10
    ? n
    : String(n)
        .split("")
        .reduce((a, b) => Number(a) + Number(b));
}
/* 



*/
/* My Answer 02(1번 답변을 조금 다르게 풀어냄) */
function solution(n) {
  return n < 10 ? n : [...String(n)].reduce((a, c) => +a + +c);
}
