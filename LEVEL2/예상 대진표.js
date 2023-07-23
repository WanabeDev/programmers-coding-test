/* ✨ My Answer 01 ✨ */
// N이 2의 지수 승으로 주어진다는 점을 이용
function solution(n, a, b) {
  let round = 0;
  let A = a;
  let B = b;

  // A와 B의 번호가 같아질 때까지
  while (A !== B) {
    A = Math.ceil(A / 2); // 다음 라운드에서 A의 번호를 계산
    B = Math.ceil(B / 2); // 다음 라운드에서 B의 번호를 계산
    round++; // 라운드 수 증가
  }

  return round; // A와 B가 같아지는 시점까지의 라운드 수를 반환
}
