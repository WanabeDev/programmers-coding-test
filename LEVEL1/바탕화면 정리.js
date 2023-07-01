/* ✨ My Answer 01 ✨ */
function solution(wallpaper) {
  // 왼쪽(L), 위쪽(T), 오른쪽(R), 아래쪽(B) 좌표
  const L = [];
  const T = [];
  const R = [];
  const B = [];

  // 바탕화면을 순회하며 파일의 위치를 찾아 좌표를 기록
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        L.push(i);
        T.push(j);
        R.push(i + 1);
        B.push(j + 1);
      }
    }
  }

  // 좌표를 정렬하여 가장 작은 좌표와 가장 큰 좌표를 구함
  L.sort((a, b) => a - b);
  T.sort((a, b) => a - b);
  R.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  // 최소한의 이동거리를 갖는 드래그의 시작점과 끝점 반환
  return [L[0], T[0], R[0], B[0]];
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(wallpaper) {
  const X = [];
  const Y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        Y.push(i);
        X.push(j);
      }
    }
  }

  X.sort((a, b) => a - b);
  Y.sort((a, b) => a - b);

  return [Y[0], X[0], Y[Y.length - 1] + 1, X[X.length - 1] + 1];
}
/* 



*/
/* ⭐️ Another Approach 02 ⭐️ */
function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}
