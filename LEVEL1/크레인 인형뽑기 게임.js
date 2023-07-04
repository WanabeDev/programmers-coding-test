/* ✨ My Answer 01 ✨ */
function solution(board, moves) {
  const basket = []; // 뽑은 인형을 담을 배열
  let count = 0; // 사라진 인형의 총 개수를 담을 변수

  for (let move of moves) {
    // moves 배열을 반복하면서
    let col = move - 1; // 뽑을 열을 결정

    for (let row = 0; row < board.length; row++) {
      // 열에 해당하는 각 행을 순회하면서
      let doll = board[row][col]; // 해당 위치의 인형을 가져옴

      if (doll !== 0) {
        // 인형이 존재한다면
        if (basket[basket.length - 1] === doll) {
          // 바구니의 가장 위에 있는 인형과 같은 종류라면
          basket.pop(); // 바구니에서 인형을 제거 (같은 종류의 인형이 사라짐)
          count += 2; // 사라진 인형의 개수 2개 추가
        } else {
          basket.push(doll); // 바구니에 인형을 추가
        }

        board[row][col] = 0; // 뽑은 위치의 인형을 0으로 표시 (인형이 사라짐)
        break; // 인형을 하나 뽑았으므로 반복 종료
      }
    }
  }

  return count; // 사라진 인형의 총 개수 반환
}
