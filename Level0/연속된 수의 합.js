/* ✨ My Answer 01 ✨ */
function solution(num, total) {
  let result = [];
  let mid = ((total * 2) / num + num - 1) / 2;

  for (let i = 0; i < num; i++) {
    result.push(mid);
    mid--;
  }

  return result.sort((a, b) => a - b);
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(num, total) {
  var min = Math.ceil(total / num - Math.floor(num / 2));
  var max = Math.floor(total / num + Math.floor(num / 2));

  return new Array(max - min + 1).fill(0).map((el, i) => {
    return i + min;
  });
}
/* 



*/
/* ⭐️ Another Approach 02 ⭐️ */
function solution(num, total) {
  const a = ((2 * total) / num + 1 - num) / 2;
  return Array(num)
    .fill()
    .map((_, i) => i + a);
}
