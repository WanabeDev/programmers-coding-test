/* My Answer 01 */
function solution(rank, attendance) {
  const top3 = [...rank].filter((_, i) => attendance[i]).sort((a, b) => a - b);
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
  const top3 = [...rank]
    .map((v, i) => [v, i])
    .filter((_, i) => att[i])
    .sort((a, b) => a[0] - b[0])
    .slice(0, 3);
  return 10000 * top3[0][1] + 100 * top3[1][1] + top3[2][1];
}
/*




*/
/* Another Approach 01 */
function solution(rank, attendance) {
  const arrIdxRank = [];
  {
    for (let i = 0; i < rank.length; i++) {
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
/* Another Approach 02 */
const solution = (r, a) =>
  r
    .map((v, i) => [v, i])
    .filter((v, i) => a[i])
    .sort((a, b) => a[0] - b[0])
    .slice(0, 3)
    .map((v, i) => 100 ** (2 - i) * v[1])
    .reduce((a, v) => a + v);
