/* My Answer 01(삼항연산자를 활용하여 년,월,일 비교) */
function solution(date1, date2) {
  return date1[0] < date2[0]
    ? 1
    : date1[0] === date2[0] && date1[1] < date2[1]
    ? 1
    : date1[0] === date2[0] && date1[1] === date2[1] && date1[2] < date2[2]
    ? 1
    : 0;
}
/*



*/
/* Another Approach 01(Date를 사용하여 날짜 객체로 변환 후 날짜 비교) */
const solution = (date1, date2) => (new Date(date1) < new Date(date2) ? 1 : 0);
/*



*/
/* Another Approach 02(날짜를 문자열로 변환하여 비교) */
function solution(date1, date2) {
  return date1.join("") - date2.join("") < 0 ? 1 : 0;
}
