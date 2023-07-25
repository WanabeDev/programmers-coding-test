/* 🌧️ My Answer 01 🌧️ (DP를 이용한 방법. 효율성 테스트 불통)*/
function solution(n) {
  // DP 테이블의 크기 설정을 위해 n의 제곱근을 올림한 값을 구함
  const sqrtN = Math.ceil(Math.sqrt(n));
  // 각 위치까지의 건전지 사용량을 저장할 DP 테이블 생성
  const DP = new Array(sqrtN).fill(0);

  // i가 1부터 n까지 순회하며 DP 테이블을 채움
  for (let i = 1; i <= n; i++) {
    // 1칸 앞으로 점프
    DP[i] = DP[i - 1] + 1;

    // 순간이동을 고려하여 최소 건전지 사용량 갱신
    if (i % 2 === 0) {
      DP[i] = Math.min(DP[i], DP[i / 2]);
    }
  }

  // 거리 N까지의 최소 건전지 사용량 반환
  return DP[n];
}

/* 



*/
/* ✨ My Answer 01 ✨ */
function solution(n) {
  // 건전지 사용량을 저장하는 변수
  let batt = 0;

  // n이 0보다 큰 동안 반복
  while (n > 0) {
    // n이 짝수라면 2로 나누어 순간이동
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      // n이 홀수라면 1을 빼서 1칸 앞으로 점프
      n = n - 1;
      batt++;
    }
  }

  // 최소 건전지 사용량 반환
  return batt;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
// n을 2로 나누고, 그 몫을 또 2로 계속해서 나누면서 나오는 나머지들의 모든 합이
// n을 이진수로 변환한 수의 1의 개수와 같다는 것을 이용함
function solution(n) {
  // n이 1인 경우, 건전지 사용량은 1이므로 바로 반환
  if (n === 1) return 1;

  // n을 2진수로 변환하여 배열로 만듦
  const nArr = Array.from(n.toString(2));

  // 2진수 배열의 각 원소를 숫자로 변환하여 더한 결과를 반환
  return nArr.reduce((a, b) => +a + +b);
}
/* 



*/
/* ⭐️ Another Approach 02 ⭐️ */
// n을 2로 나누고, 그 몫을 또 2로 계속해서 나누면서 나오는 나머지들의 모든 합이
// n을 이진수로 변환한 수의 1의 개수와 같다는 것을 이용함
function solution(n) {
  return n.toString(2).replace(/0/g, "").length;
}
