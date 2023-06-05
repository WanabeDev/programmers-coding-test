/* My Answer 01 */
function solution(strArr) {
  return strArr.map((v, i) =>
    i % 2 === 0 ? v.toLowerCase() : v.toUpperCase()
  );
}
/* 



*/
/* My Answer 02 */
function solution(strArr) {
  var answer = [];

  for (let i = 0; i < strArr.length; i++) {
    if (i % 2 == 0) {
      answer.push(strArr[i].toLowerCase());
    } else {
      answer.push(strArr[i].toUpperCase());
    }
  }

  return answer;
}
