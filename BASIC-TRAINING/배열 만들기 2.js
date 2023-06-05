/* My Answer 01(정규표현식을 이용하여 0과5로만 이루어진 정수를 result에 추가)*/
function solution(l, r) {
  const result = [];
  const regex = /^[05]+$/; // 문자열이 0과 5만으로만 구성된 정수를 찾는 패턴
  for (let i = l; i <= r; i++) {
    if (regex.test(i)) {
      result.push(i);
    }
  }
  return result.length > 0 ? result : [-1];
}

/* Another Approach 01(r에서 l까지의 배열을 생성후 0과 5이외의 수를 필터링) */
function solution(l, r) {
  const result = Array.from({ length: r - l + 1 }, (_, i) => i + l).filter(
    (n) => !/[^05]/.test(n)
  );
  return result.length ? result : [-1];
}
