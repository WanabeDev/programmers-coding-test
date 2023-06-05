/* My Answer 01 */
function solution(q, r, code) {
  return [...code].filter((_, i) => i % q == r).join("");
}
