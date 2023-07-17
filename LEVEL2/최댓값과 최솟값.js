/* ✨ My Answer 01 ✨ */
function solution(s) {
  const nums = s.split(" ").sort((a, b) => a - b);
  const min = nums[0];
  const max = nums[nums.length - 1];

  return `${min} ${max}`;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}
