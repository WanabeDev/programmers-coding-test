/* My Answer 01 */
function solution(arr) {
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 50 && arr[i] % 2 === 0) {
      result.push(arr[i] / 2);
    } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
      result.push(arr[i] * 2);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
/* 



*/
/* My Answer 02 */
function solution(arr) {
  return arr.map((num) => {
    if (num >= 50 && !(num % 2)) return num / 2;
    if (num < 50 && num % 2) return num * 2;
    return num;
  });
}
/* 



*/
/* My Answer 03 */
function solution(arr) {
  return arr.map((v) =>
    v >= 50 && v % 2 == 0 ? v / 2 : v < 50 && v % 2 == 1 ? v * 2 : v
  );
}
