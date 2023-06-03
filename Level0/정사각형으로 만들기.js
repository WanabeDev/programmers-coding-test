/* My Answer 01 */
function solution(arr) {
  const result = [...arr];
  const colLen = arr[0].length; // 열의 개수
  const lowLen = arr.length; // 행의 개수

  // 행의 개수가 열의 개수보다 큰 경우
  if (lowLen > colLen) {
    for (let i = 0; i < lowLen; i++) {
      for (let j = colLen; j < lowLen; j++) {
        // 0을 추가하여 열 맞춤
        result[i].push(0);
      }
    }
    // 행의 개수가 열의 개수보다 작은 경우
  } else if (lowLen < colLen) {
    for (let i = lowLen; i < colLen; i++) {
      // 0으로 이루어진 배열을 추가하여 행을 맞춤
      result.push(Array(colLen).fill(0));
    }
    // 행의 개수와 열의 개수가 동일한 경우
  } else if (lowLen === colLen) {
    return arr;
  }

  return result;
}
/* 



 */
/* Another Approach 01(내 정답과 큰 흐름은 같지만 행과 열의 길이 차를 절대값으로 하여 코드를 좀 더 직관적으로 만듦) */
function solution(arr) {
  const ROWS = arr.length;
  const COLS = arr[0].length;
  const DIFF = Math.abs(ROWS - COLS); // 행과 열의 차이를 절대값으로 구함

  if (ROWS > COLS) {
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < DIFF; j++) {
        arr[i].push(0);
      }
    }
  } else if (ROWS < COLS) {
    for (let i = 0; i < DIFF; i++) {
      const row = new Array(COLS).fill(0);
      arr.push(row);
    }
  }

  return arr;
}
