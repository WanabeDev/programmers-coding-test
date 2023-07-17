/* ✨ My Answer 01 ✨ */
function solution(s) {
  return s.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}
