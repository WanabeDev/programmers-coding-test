/* My Answer 01 */
function solution(my_string, index_list) {
  let result = "";
  for (let i = 0; i < index_list.length; i++) {
    result += my_string[index_list[i]];
  }
  return result;
}
/* 



*/
/* My Answer 02 */
function solution(my_string, index_list) {
  return index_list.reduce((acc, cur) => acc + my_string[cur], "");
}
/* 



*/
/* My Answer 03 */
function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
}
