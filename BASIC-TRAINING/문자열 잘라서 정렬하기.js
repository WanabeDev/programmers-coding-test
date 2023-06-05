/* My Answer 01 */
function solution(myString) {
  return myString
    .split("x")
    .filter((e) => e !== "")
    .sort();
}
