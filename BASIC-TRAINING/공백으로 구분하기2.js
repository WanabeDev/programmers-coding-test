/* My Answer 01 */
function solution(my_string) {
  return my_string.trim().split(/\s+/);
}

/* My Answer 02 */
function solution(my_string) {
  return my_string.split(" ").filter((v) => v);
}

/* My Answer 03 */
function solution(my_string) {
  return my_string.trim().split(/ +/);
}

/* My Answer 04 */
function solution(my_string) {
  return my_string.match(/[^\s]+/g);
}
