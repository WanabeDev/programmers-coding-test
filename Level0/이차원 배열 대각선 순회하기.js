/* My Answer 01(for 활용) */
function solution(board, k) {
  var result = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
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
      sum + innerArr.reduce((acc, num) => (num <= k ? acc + num : acc), 0),
    0
  );
  return result;
}
