/* My Answer 01 */
function solution(num_list) {
  const sumEven = num_list
    .filter((n) => n % 2 === 0)
    .reduce((acc, cur) => `${acc}${cur}`, 0);
  const sumOdd = num_list
    .filter((n) => n % 2 !== 0)
    .reduce((acc, cur) => `${acc}${cur}`, 0);
  return +sumEven + +sumOdd;
}
/* 



*/
/* My Answer 02 */
function solution(num_list) {
  const [odd, even] = num_list.reduce(
    ([odd, even], num) =>
      num % 2 === 0 ? [odd, even + num] : [odd + num, even],
    ["", ""]
  );
  return +odd + +even;
}
/* 



*/
/* My Answer 03 */
function solution(num_list) {
  let numA = "",
    numB = "";
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) numA += num_list[i];
    else numB += num_list[i];
  }
  return +numA + +numB;
}
