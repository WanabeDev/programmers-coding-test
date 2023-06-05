/* My Answer 01 */
function solution(num_list) {
  var result = [];
  for (let i = 0; i < num_list.length; i++) {
    result.push(num_list[i]);
    if (i === num_list.length - 1) {
      num_list[num_list.length - 2] < num_list[num_list.length - 1]
        ? result.push(
            num_list[num_list.length - 1] - num_list[num_list.length - 2]
          )
        : result.push(num_list[num_list.length - 1] * 2);
    }
  }
  return result;
}
/* 



*/
/* My Answer 02 */
function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}
