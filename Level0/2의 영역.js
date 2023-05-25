/* My Answer 01 */
function solution(arr) {
  // 배열의 앞,뒤에서부터 2가 위치한 인덱스값을 찾아 slice
  const twosRange = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);

  // 배열에 값이 2인 요소가 없는 경우
  return twosRange.length === 0 ? [-1] : twosRange;
}

/* Another Approach 01 */
function solution(arr) {
  const from = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  // 배열에 값이 2인 요소가 없는 경우
  return from === -1 ? [-1] : arr.slice(from, end + 1);
}
