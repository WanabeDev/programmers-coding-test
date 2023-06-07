/* My Answer 01(for를 활용한 풀이) */
function solution(n) {
  let result = 0;
  // n의 제곱근 이상의 숫자는 약수가 될 수 없다는 점을 활용하여 i부터 n의 제곱근까지 반복
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result += i;
      // n을 i로 나눈 결과가 i가 아닌 경우 n을 i로 나눈 몫이 n의 약수가 됨
      if (n / i !== i) result += n / i;
    }
  }
  return result;
}
/* 



*/
/* Another Approach 01(약수의 위아래 짝을 한번에 더한 후 return단계에서 중복값을 보정해주는 방법) */
function solution(n) {
  var answer = 0;
  let i;
  // i부터 n의 제곱근까지 반복
  for (i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    // i가 n의 약수일 경우 약수값을 더함
    if (!(n % i)) {
      answer += i + n / i;
    }
  }
  i--;

  // 제곱근 여부를 파악하여 중복 값을 보정해준다
  return i === n / i ? answer - i : answer;
}
/* 



*/
/* Another Approach 02(재귀함수를 활용한 풀이, 코드는 간결하지만 반복문에 비해 성능상 좋지 않은 방법) */
function solution(n, a = 0, b = 0) {
  // 재귀호출을 통해 a값을 1씩 증가시키며 n의 약수를 찾아 b에 값을 누적
  return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
}
