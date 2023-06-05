/* My Answer 01 */
function solution(str_list, ex) {
  return str_list.filter((v) => !v.includes(ex)).join("");
}
