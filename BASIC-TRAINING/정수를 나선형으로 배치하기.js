/* My Answer 01 */
function solution(n) {
  //n = 4

  // nxn사이즈의 배열 생성
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  // 1부터 n2까지 정수를 배치하기 위한 초기값
  let val = 1;

  // 행과 열의 시작과 끝
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // 좌 > 우
    for (let col = colStart; col <= colEnd; col++) {
      matrix[rowStart][col] = val++;
    }
    rowStart++;
    // 상 > 하
    for (let row = rowStart; row <= rowEnd; row++) {
      matrix[row][colEnd] = val++;
    }
    colEnd--;
    // 우 > 좌
    for (let col = colEnd; col >= colStart; col--) {
      matrix[rowEnd][col] = val++;
    }
    rowEnd--;
    // 하 > 상
    for (let row = rowEnd; row >= rowStart; row--) {
      matrix[row][colStart] = val++;
    }
    colStart++;
  }
  return matrix;
}
/* 



*/
/* Another Approach 01 */
function solution(n) {
  const move = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const answer = Array.from(new Array(n), () => new Array(n).fill(0));
  let x = 0,
    y = 0,
    dir = 0,
    num = 1;
  while (num <= n * n) {
    answer[x][y] = num;
    let nextX = x + move[dir][0];
    let nextY = y + move[dir][1];
    if (
      nextX >= n ||
      nextX < 0 ||
      nextY >= n ||
      nextY < 0 ||
      answer[nextX][nextY] !== 0
    ) {
      dir = (dir + 1) % 4;
      nextX = x + move[dir][0];
      nextY = y + move[dir][1];
    }
    x = nextX;
    y = nextY;
    num++;
  }
  return answer;
}
/* 



*/
/* Another Approach 02 */
function solution(n) {
  let result = new Array(n);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(n);
  }
  let direction = 1;
  let x, y, num;
  x = y = num = 0;
  x--;

  while (1) {
    for (let i = 0; i < n; i++) {
      x += direction;
      result[y][x] = ++num;
    }

    n--;
    if (n == 0) break;

    for (let j = 0; j < n; j++) {
      y += direction;
      result[y][x] = ++num;
    }
    direction *= -1;
  }

  return result;
}
/* 



*/
function solution(n) {
  //n = 4

  // nxn사이즈의 배열 생성
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  //[0,0,0,0,
  // 0,0,0,0,
  // 0,0,0,0,
  // 0,0,0,0]

  // 1부터 n2까지 정수를 배치하기 위한 초기값
  let val = 1;

  // 행과 열의 시작과 끝
  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;

  // 1st     0    <=   3    &&    0     <=   3
  // 2nd     1    <=   2    &&    1     <=   2
  while (rowStart <= rowEnd && colStart <= colEnd) {
    // 좌 > 우
    // 1st             0      0  <=   3
    // 2nd             1      1  <=   2
    for (let col = colStart; col <= colEnd; col++) {
      matrix[rowStart][col] = val++; // 1st : matrix[0][0-3] = val++(1~4) / 2nd : matrix[1][1-2] = val++(13~14);
      // * 1st
      //[1,2,3,4,
      // 0,0,0,0,
      // 0,0,0,0,
      // 0,0,0,0]

      // * 2nd
      //[1,2,3,4,
      //12,13,14,5,
      //11,0,0,6,
      //10,9,8,7]
    }
    rowStart++; // 1st : 1 / 2nd : 2

    // 상 > 하
    // 1st             1      1  <=   3
    // 2nd             2      2  <=   2
    for (let row = rowStart; row <= rowEnd; row++) {
      matrix[row][colEnd] = val++; // 1st : matrix[1-3][3] = val++(5~7) / 2nd : matrix[2][2] = val++(15)
      // * 1st
      //[1,2,3,4,
      // 0,0,0,5,
      // 0,0,0,6,
      // 0,0,0,7]

      // * 2nd
      //[1,2,3,4,
      //12,13,14,5,
      //11,0,15,6,
      //10,9,8,7]
    }
    colEnd--; // 1st : 2 / 2nd : 1

    // 우 > 좌
    // 1st             2    2  <=   0
    // 2nd             1    1  <=   1
    for (let col = colEnd; col >= colStart; col--) {
      matrix[rowEnd][col] = val++; // 1st : matrix[3][2-0] = val++(8~10) // 2nd : matrix[2][1] = val++(16)
      //[1,2,3,4,
      // 0,0,0,5,
      // 0,0,0,6,
      //10,9,8,7]

      // * 2nd
      //[1,2,3,4,
      //12,13,14,5,
      //11,16,15,6,
      //10,9,8,7]
    }
    rowEnd--; // 1st : 2 / 2nd : 1 (📌 rowStart(2) <= rowEnd(1) && colStart(1) <= colEnd(1))

    // 하 > 상
    //                2     2  <=   1
    for (let row = rowEnd; row >= rowStart; row--) {
      matrix[row][colStart] = val++; //matrix[2-1][0] = val++;
      //[1,2,3,4,
      //12,0,0,5,
      //11,0,0,6,
      //10,9,8,7]
    }
    colStart++; // 1
  }
  return matrix;
}
