/* My Answer 01(Array.from활용) */
function solution(x, n) {
  // 배열을 생성함과 동시에 배열의 각 요소를 계산
  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}
/* 



*/
/* Another Approach 01(Array와 map활용) */
function solution(x, n) {
  // x원소로 이루어진 배열을 생성 후 map을 통해 배열의 각 요소를 계산
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}
