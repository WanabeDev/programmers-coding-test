/* My Answer 01 */
function solution(num_list, n) {
  const slicedArr = num_list.slice(0, n);
  const rest = num_list.slice(n);
  return [...rest, ...slicedArr];
}
/* 



*/
/* My Answer 02(splice를 이용하여 과정 간소화) */
function solution(num_list, n) {
  const slicedArr = num_list.splice(0, n);
  return num_list.concat(slicedArr);
}
/* 



*/
/* Another approach 01 */
function solution(num_list, n) {
  return num_list.slice(n).concat(num_list.slice(0, n));
}
/* 



*/
/* Another approach 02 */
function solution(num_list, n) {
  num_list.push(...num_list.splice(0, n));
  return num_list;
}
