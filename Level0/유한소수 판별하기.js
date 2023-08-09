/* ✨ My Answer 01 ✨ */
// 최대공약수
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// 분모가 2와 5로만 이루어져 있는지 확인하는 함수
function isFiniteDenom(denom) {
  while (denom % 2 === 0) denom /= 2; // 분모에서 2의 인수 제거
  while (denom % 5 === 0) denom /= 5; // 분모에서 5의 인수 제거

  return denom === 1; // 분모가 1이면 유한소수, 아니면 무한소수
}

// 주어진 분수 a/b의 유한소수 여부를 판별하는 함수
function solution(a, b) {
  // 최대공약수로 기약분수의 분모를 구함
  const newDenom = b / gcd(a, b);

  // 분모가 2와 5로만 이루어져 있다면 유한소수, 아니면 무한소수
  return isFiniteDenom(newDenom) ? 1 : 2;
}

/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(a, b) {
  // 분자와 분모의 공약수 중 최대 공약수를 구하는 과정
  let n = 1;

  //불필요한 반복을 위해 a,b중 최소값 까지만 반복문이 실행되도록 함
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) n = i; // 공약수를 찾아 n을 갱신
  }

  // 최대 공약수로 분모를 나누어 기약분수로 변환
  b /= n;

  // 분모를 2와 5로 나누어 유한소수 여부를 확인
  while (b % 2 === 0) b /= 2; // 분모를 2로 나누어 2의 인수 제거
  while (b % 5 === 0) b /= 5; // 분모를 5로 나누어 5의 인수 제거

  // 분모가 1이면 유한소수, 아니면 무한소수 반환
  return b === 1 ? 1 : 2;
}
/* 



*/
/* ⭐️ Another Approach 02 ⭐️ */
// 해당코드는 테스트 예제가 유한소수이면서 소수점 자리수가 10자리를 넘어가는 경우에 대비하진 못한다
function solution(a, b) {
  return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
}
