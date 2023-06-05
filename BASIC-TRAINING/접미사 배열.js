/* My Answer 01 */
function solution(my_string) {
  const result = [];
  for (let i = my_string.length - 1; i >= 0; i--) {
    result.unshift(my_string.slice(i));
  }
  return result.sort();
}
