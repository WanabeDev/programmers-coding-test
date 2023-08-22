/* ✨ My Answer 01 ✨ */
function solution(babbling) {
  const result = [];

  const regex = /aya|ye|woo|ma/g;

  for (const item of babbling) {
    let newItem = item.replace(regex, "");
    result.push(newItem);
  }

  return result.filter((e) => e === "").length;
}
/* 



*/
/* ✨ My Answer 02 ✨ */
function solution(babbling) {
  const regex = /aya|ye|woo|ma/g;

  return babbling
    .map((item) => item.replace(regex, ""))
    .filter((item) => item === "").length;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}
