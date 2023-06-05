/* 🚫Wrong Answer 01(forEach의 매개변수를 잘못지정함) */
function solution(arr, queries) {
  queries.forEach((idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  });
  return arr;
}

/* My Answer 01 */
function solution(arr, queries) {
  queries.forEach(([idx1, idx2]) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  });
  return arr;
}
