/* My Answer 01 */
function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1)
    .filter((num) => (n % 2 === 0 ? num % 2 === 0 : num % 2 !== 0))
    .reduce((acc, cur) => (n % 2 === 0 ? acc + cur ** 2 : acc + cur), 0);
}
/* 



*/
/* My Answer 02 */
function solution(n) {
  if (n % 2 === 1) return ((n + 1) / 2) * ((n + 1) / 2);
  else return (n * (n + 1) * (n + 2)) / 6;
}
