/* My Answer 01 (while이 정적인 조건문 뿐만 아니라 변수 값을 변경하거나 증감하는 표현식을 사용할 수 있다는 점을 이용) */
function solution(n) {
  var x = 1;
  while (x++) {
    if (n % x === 1) return x;
  }
}
/* 


*/
/* Another Approach 01(재귀함수를 활용한 풀이, 조건을 만족하는 값을 찾을 때 까지 함수를 호출) */
function solution(n, x = 0) {
  return n % x === 1 ? x : solution(n, x + 1);
}
/* 


*/
/* Another Approach 02(for를 활용한 방법) */
const solution = function (n) {
  for (let i = 0; i < n; i++) {
    if (n % i == 1) {
      return i;
    }
  }
};
