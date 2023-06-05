/* My Answer 01 */
function solution(arr, intervals) {
  const [[a1, a2], [b1, b2]] = intervals;
  const parts1 = arr.slice(a1, a2 + 1);
  const parts2 = arr.slice(b1, b2 + 1);
  return [...parts1, ...parts2];
}
