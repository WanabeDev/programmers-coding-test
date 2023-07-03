/* ✨ My Answer 01 ✨ */
function solution(park, routes) {
  // 직사각형 공원이 가로 세로 길이
  const maxRow = park.length - 1;
  const maxCol = park[0].length - 1;

  // 시작 지점의 좌표를 구한다.
  // findIndex(), includes() 메서드를 이용해 몇 번째 행에 있는지를 구한다.
  // 구한 행에서 indexOf() 메서드를 이용해 몇 번째 열에 있는지 구한다.
  let row = park.findIndex((s) => s.includes("S"));
  let col = park[row].indexOf("S");

  // routes를 forEach() 메서드를 이용해 요소를 하나씩 확인한다.
  routes.forEach((position) => {
    // 요소를 빈칸 기준으로 나눠준다. (구조분해할당을 이용)
    // D = "E" / M = "2"
    const [D, M] = position.split(" ");

    // 임시 좌표를 만들어주고 flag도 하나 만들어준다.
    let tempRow = row;
    let tempCol = col;
    let flag = true;

    // 구한 이동거리 수 만큼 for문을 돌려준다.
    for (let i = 0; i < Number(M); i++) {
      // 동서 쪽 일 경우 행을 더하거나 빼주고
      // 남북 쪽 일 경우 열을 더하거나 빼준다.
      if (D === "E") tempCol++;
      else if (D === "W") tempCol--;
      else if (D === "S") tempRow++;
      else if (D === "N") tempRow--;

      // 그 후 행과 열이 공원을 벗어나는지
      // 행과 열의 좌표에 장애물이 없는지를 확인한다.
      if (
        tempRow > maxRow ||
        tempRow < 0 ||
        tempCol > maxCol ||
        tempCol < 0 ||
        park[tempRow][tempCol] === "X"
      ) {
        // 장애물이 있거나 공원을 벗어났다면
        // flag에 false를 넣어주고 break를 통해 for문을 종료시킨다.
        flag = false;
        break;
      }
    }

    // for문을 무사히 통과했다면 이동을 한 것이기 때문에
    // 임시 좌표를 실제 좌표에 대입해준다.
    if (flag) {
      col = tempCol;
      row = tempRow;
    }
  });

  // 다 확인 후 마지막 좌표를 반환한다.
  return [row, col];
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(park, routes) {
  const route = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  // 초기 위치
  let [x, y] = [0, 0];

  // 시작 지점(S)의 위치를 찾아 초기 위치로 설정
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      [x, y] = [i, park[i].indexOf("S")];
      break;
    }
  }

  // 주어진 명령어(routes)를 순회하며 수행
  routes.forEach((route) => {
    // 명령어에서 방향(r)과 거리(n) 추출
    const [r, n] = route.split(" ");
    // 새로운 위치를 저장할 변수 초기화
    let [nx, ny] = [x, y];
    // 이동한 거리를 카운트하는 변수 초기화
    let cnt = 0;

    // 거리(n)만큼 이동할 때까지 반복
    while (cnt < n) {
      // 새로운 위치 계산
      [nx, ny] = [nx + route[r][0], ny + route[r][1]];

      // 새로운 위치가 공원의 범위를 벗어나거나 장애물(X)을 만나면 반복 종료
      if (!park[nx] || !park[nx][ny] || park[nx][ny] === "X") break;

      // 이동한 거리를 카운트
      cnt++;
    }

    // 명령어의 거리(n)만큼 정상적으로 이동한 경우 위치 업데이트
    if (cnt == n) [x, y] = [nx, ny];
  });

  return [x, y];
}
