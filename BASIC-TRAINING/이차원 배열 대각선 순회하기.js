/* My Answer 01(for 활용) */
function solution(board, k) {
  var result = 0;

  // 2중 for문을 활용
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // i와 j를 더한 값이 k보다 작거나 같은 경우에만 result에 b[i][j] 값을 더함
      if (i + j <= k) result += board[i][j];
    }
  }

  return result;
}
/*



*/
/* My Answer 02(reduce 활용) */
function solution(board, k) {
  const result = board.reduce(
    (sum, innerArr) =>
      // innerArr을 순회하며 각 요소가 k보다 작거나 같은지 확인 후, 합을 계산
      sum + innerArr.reduce((acc, num) => (num <= k ? acc + num : acc), 0),
    0
  );

  return result;
}
