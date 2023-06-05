/* My Answer 01 */
function solution(n) {
  return Array.from({ length: n }, () => Array(n).fill(0)).map((e, i) =>
    e.map((v, j) => (i === j ? 1 : v))
  );
}
