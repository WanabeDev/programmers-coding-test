/* My Answer 01 */
function solution(arr, queries) {
  for (const [s, e] of queries) {
    for (let i = s; i <= e; i++) {
      arr[i] += 1;
    }
  }
  return arr;
}

/* Another Approach 01(forEach를 활용한 방법. ++연산자를 이용하여 인덱스 이동 및 값 증가) */
function solution(arr, queries) {
  queries.forEach(([s, e]) => {
    while (s <= e) arr[s++]++;
  });
  return arr;
}
