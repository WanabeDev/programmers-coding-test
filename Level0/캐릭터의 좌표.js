/* ✨ My Answer 01 ✨ */
function solution(keyinput, board) {
  let [x, y] = [0, 0];
  const key = { up: [0, 1], down: [0, -1], left: [-1, 0], right: [1, 0] };
  const [boardX, boardY] = [(board[0] - 1) / 2, (board[1] - 1) / 2]; // 보드의 중심 좌표

  // 방향키 입력을 하나씩 처리
  for (let i = 0; i < keyinput.length; i++) {
    const k = keyinput[i]; // 현재 입력된 방향키
    const newX = x + key[k][0]; // 새로운 X좌표
    const newY = y + key[k][1]; // 새로운 Y좌표

    // 좌표가 보드의 경계를 넘어갈 경우
    if (
      newX >= -boardX &&
      newX <= boardX &&
      newY >= -boardY &&
      newY <= boardY
    ) {
      x = newX; // 현재 X 좌표를 새로운 X 좌표로 업데이트
      y = newY; // 현재 Y 좌표를 새로운 Y 좌표로 업데이트
    }
  }

  return [x, y];
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(keyinput, board) {
  let res = [0, 0];

  // 방향키 입력을 하나씩 처리
  for (let p of keyinput) {
    switch (
      p // 현재 입력된 방향키에 따라 분기 처리
    ) {
      case "left":
        if (-res[0] < board[0] / 2 - 1) res[0]--; // 왼쪽으로 이동할 때 보드의 좌측 경계를 넘지 않으면 X 좌표 감소
        break;
      case "right":
        if (res[0] < board[0] / 2 - 1) res[0]++; // 오른쪽으로 이동할 때 보드의 우측 경계를 넘지 않으면 X 좌표 증가
        break;
      case "up":
        if (res[1] < board[1] / 2 - 1) res[1]++; // 위쪽으로 이동할 때 보드의 상단 경계를 넘지 않으면 Y 좌표 증가
        break;
      case "down":
        if (-res[1] < board[1] / 2 - 1) res[1]--; // 아래쪽으로 이동할 때 보드의 하단 경계를 넘지 않으면 Y 좌표 감소
        break;
    }
  }
  return res;
}
/* 



*/
/* ⭐️ Another Approach 02 ⭐️ */
function solution(keyinput, board) {
  let key = { right: [1, 0], up: [0, 1], down: [0, -1], left: [-1, 0] }; // 방향키 입력에 대응하는 방향 좌표

  let rslt = keyinput
    .map((v) => key[v]) // 방향키 입력을 방향 좌표로 변환하여 새 배열 생성
    .reduce(
      (a, b) => {
        if (
          Math.abs(a[0] + b[0]) > board[0] / 2 || // 새로운 X 좌표가 보드의 좌우 경계를 넘어가면 현재 좌표 그대로 유지
          Math.abs(a[1] + b[1]) > board[1] / 2 // 새로운 Y 좌표가 보드의 상하 경계를 넘어가면 현재 좌표 그대로 유지
        )
          return [a[0], a[1]];

        return [a[0] + b[0], a[1] + b[1]]; // 현재 좌표에 방향 좌표를 더한 새 좌표로 업데이트
      },
      [0, 0]
    );

  return rslt;
}
