/* My Answer 01 (for를 이용하여 flag를 순회하며 해당 연산 수행)*/
function solution(arr, flag) {
  let result = [];
  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        result.push(arr[i]);
      }
    } else {
      for (let j = 0; j <= arr[i] - 1; j++) {
        result.pop();
      }
    }
  }
  return result;
}
/*



*/
/* Another Approach 01 (reduce를 이용하여 문자열 일부를 잘라낸 값과 패턴을 비교) */
function solution(arr, flag) {
  return arr.reduce(
    (prev, num, i) =>
      flag[i]
        ? [...prev, ...new Array(num * 2).fill(num)]
        : prev.slice(0, -num),
    []
  );
}
