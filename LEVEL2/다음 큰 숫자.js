/* ✨ My Answer 01 ✨ */
function solution(n) {
  const num1 = n.toString(2).replace(/0/gi, "").length; // n을 2진수로 변환한 값에서 1의 개수
  let nextNum = n + 1; // n보다 큰 다음 숫자

  // 다음 숫자의 2진수에서 1의 개수가 num1과 다를 때까지 반복
  while (nextNum.toString(2).replace(/0/gi, "").length !== num1) {
    nextNum++; // 다음 숫자를 1씩 증가시킴
  }
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(n, a = n + 1) {
  // n의 2진수에서 1의 개수와 a의 2진수에서 1의 개수가 같을 경우
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a // a를 반환
    : solution(n, a + 1); // a를 1씩 증가시킨 값으로 재귀 호출
}
