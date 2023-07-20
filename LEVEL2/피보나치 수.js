/* ✨ My Answer 01 ✨ */
function solution(n) {
  const mod = 1234567n; // 1234567로 나눈 나머지를 구하기 위한 모듈러 값
  const fib = [0n, 1n]; // 피보나치 수열을 저장할 배열, 초기 값은 0과 1

  // 피보나치 수열 계산 (n까지)
  for (let i = 2; i <= n; i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % mod; // 현재 항은 이전 두 항을 더한 값에 모듈러 연산을 적용
  }

  return fib[n]; // 결과 값 반환
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(n) {
  var result = [0, 1]; // 피보나치 수열을 저장할 배열, 초기 값은 0과 1

  // 피보나치 수열 계산 (n까지)
  while (result.length !== n + 1) {
    var fibonacci =
      (result[result.length - 2] + result[result.length - 1]) % 1234567; // 현재 항은 이전 두 항을 더한 값에 모듈러 연산을 적용
    result.push(fibonacci); // 계산된 값 배열에 추가
  }

  return result[n]; // 결과 값 반환
}
