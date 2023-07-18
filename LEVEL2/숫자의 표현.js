/* ✨ My Answer 01 ✨ */
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    // n이 i로 나누어 떨어지고, i가 홀수인 경우
    if (n % i == 0 && i % 2 == 1) {
      answer++; // 홀수인 약수의 개수를 증가
    }
  }
  return answer; // 홀수인 약수의 개수 반환
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(n) {
  var answer = 0;
  for (let i = 1; (i * (i - 1)) / 2 < n; i++)
    // i개의 연속된 자연수의 합으로 n을 표현할 수 있는 경우
    if ((n - (i * (i - 1)) / 2) % i == 0) answer++; // 방법의 수를 증가
  return answer; // 방법의 수 반환
}
