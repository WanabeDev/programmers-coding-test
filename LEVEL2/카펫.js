/* ✨ My Answer 01 ✨ */
// (x-2) * (y-2) = yellow
// x * y - yellow = brown
function solution(brown, yellow) {
  const grids = brown + yellow; // 갈색 격자와 노란색 격자의 총합

  // 가능한 모든 x에 대해서 검사 (x는 최소 3 이상이어야 함)
  for (let x = 3; x <= grids; x++) {
    const y = Math.floor(grids / x); // x * y = grids을 만족하는 y 계산

    if ((x - 2) * (y - 2) === yellow) {
      // 유효한 카펫의 크기를 찾은 경우
      return [Math.max(x, y), Math.min(x, y)];
    }
  }
}
