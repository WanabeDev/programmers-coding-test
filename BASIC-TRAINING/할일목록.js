/* My Answer 01 */
function solution(todo_list, finished) {
  return todo_list.filter((_, i) => !finished[i]);
}
