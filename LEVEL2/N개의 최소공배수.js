/* ✨ My Answer 01 ✨ */
// 유클리드 호제법을 이용한 풀이
// 최소공배수 구하는 함수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// 최대공약수 구하는 함수
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = lcm(result, arr[i]);
  }
  return result;
}
/* 



*/
/* ✨ My Answer 02 ✨ */
// reduce를 사용한 방법
// 최소공배수 구하는 함수
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// 최대공약수 구하는 함수
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solution(arr) {
  return arr.reduce((acc, cur) => lcm(acc, cur), 1);
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
// reduce 내에서 최소공배수를 구하며 더욱 더 간결해진 방법
function solution(arr) {
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
