/* My Answer 01 */
function solution(rank, att) {
  //att의 값이 'true'인 인덱스에 해당하는 값만 필터링 후 오름차순 정렬
  const top3 = [...rank].filter((_, i) => att[i]).sort((a, b) => a - b);

  // 상위 3개 요소의 인덱스를 이용하여 계산
  return (
    10000 * rank.indexOf(top3[0]) +
    100 * rank.indexOf(top3[1]) +
    rank.indexOf(top3[2])
  );
}
/*



*/
/* My Answer 02 */
function solution(rank, att) {
  // rank와 index를 2차원 배열 형태로 저장하여 활용
  const top3 = [...rank]
    .map((v, i) => [v, i])
    .filter((_, i) => att[i])
    .sort((a, b) => a[0] - b[0])
    .slice(0, 3);

  // 상위 3개 요소의 인덱스를 이용하여 계산(2차원 배열을 이용하여 answer01보다 좀 더 간소화된 코드)
  return 10000 * top3[0][1] + 100 * top3[1][1] + top3[2][1];
}
/*



*/
/* Another Approach 01 (for/if 활용)*/
function solution(rank, attendance) {
  const arrIdxRank = [];
  {
    for (let i = 0; i < rank.length; i++) {
      // attendance 배열의 값이 true인 경우만 arrIdxRank에 추가
      if (attendance[i]) arrIdxRank.push([i, rank[i]]);
    }

    arrIdxRank.sort((a, b) => a[1] - b[1]);
  }

  return arrIdxRank
    .slice(0, 3)
    .reduce((acc, cur, idx) => acc + cur[0] * 100 ** (2 - idx), 0);
}
/*



*/
/* Another Approach 02 (모든 과정을 압축한 방법)*/
const solution = (r, a) =>
  r
    .map((v, i) => [v, i])
    .filter((v, i) => a[i])
    .sort((a, b) => a[0] - b[0])
    .slice(0, 3)
    .map((v, i) => 100 ** (2 - i) * v[1])
    .reduce((a, v) => a + v);
