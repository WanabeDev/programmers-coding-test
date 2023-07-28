/* ✨ My Answer 01 ✨ */
// 피보나치 수열을 활용한 방법
function solution(n) {
  const MOD = 1234567;
  let a = 1; // 초기 두 번째 피보나치 수
  let b = 2; // 초기 세 번째 피보나치 수

  if (n <= 2) return n; // n이 1 또는 2인 경우 n을 반환

  // 피보나치 수열을 구하기 위한 반복문
  for (let i = 3; i <= n; i++) {
    const c = (a + b) % MOD; // 다음 피보나치 수를 계산하고 MOD로 나눈 나머지를 구함
    a = b; // a와 b 갱신
    b = c;
  }

  return b; // n번째 피보나치 수 반환
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
// 피보나치 수열과 DP를 활용한 방법
function solution(n) {
  var answer = 0;
  var dp = [];
  dp[1] = 1; // 초기 첫 번째 피보나치 수
  dp[2] = 2; // 초기 두 번째 피보나치 수

  // 동적 프로그래밍을 이용하여 피보나치 수열을 구함
  for (var i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567; // 현재 피보나치 수를 이전 두 개의 수를 이용하여 계산하고 1234567로 나눈 나머지를 구함
  }

  answer = dp[n]; // n번째 피보나치 수를 결과값으로 할당
  return answer % 1234567; // 결과값을 1234567로 나눈 나머지를 반환
}
