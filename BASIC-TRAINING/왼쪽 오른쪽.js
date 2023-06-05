/* My Answer 01 */
function solution(str_list) {
  let result = [...str_list];
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "l") {
      return result.splice(0, i);
    } else if (result[i] === "r") {
      return result.splice(i + 1);
    }
  }
  return [];
}
