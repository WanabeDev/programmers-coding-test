/* ✨ My Answer 01 ✨ */
// 최대공약수
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function solution(numer1, denom1, numer2, denom2) {
  const numerator = numer1 * denom2 + numer2 * denom1; // 두 분수의 분자를 더한 값
  const denominator = denom1 * denom2; // 두 분수의 분모를 곱한 값
  const gcdValue = gcd(numerator, denominator); // 두 분수의 합의 최대공약수를 구함

  return [numerator / gcdValue, denominator / gcdValue]; // 기약분수로 약분하여 반환
}
