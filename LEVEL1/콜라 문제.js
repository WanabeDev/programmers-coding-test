/* ✨ My Answer 01 ✨ (while을 이용한 풀이) */
function solution(a, b, n) {
  let total = 0;

  while (n >= a) {
    // 받은 콜라병의 수
    const coke = Math.floor(n / a) * b;
    total += coke;
    // 남은 빈병 개수 + 받은 콜라병의 수
    n = (n % a) + coke;
  }

  return total;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ (단일 표현식으로 계산하는 방법) */
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
