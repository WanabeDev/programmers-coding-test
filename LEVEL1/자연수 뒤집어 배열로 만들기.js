/* My Answer 01 */
function solution(n) {
  return [...(n + "")].reverse().map((e) => +e);
}
/* 



*/
/* Another Approach 01(수학적인 풀이방법) */
function solution(n) {
  var arr = [];

  do {
    // n의 일의 자리를 push
    arr.push(n % 10);
    // n을 10으로 나누어 '1234.5'와 같은 형태로 만든 뒤 Math.floor()를 통해 일의자리를 하나씩 버리는 동작을 반복함
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
