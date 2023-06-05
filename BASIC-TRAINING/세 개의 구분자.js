/* My Answer 01(split과 정규표현식을 이용하여 a,b,c를 기준으로 나눔) */
function solution(myStr) {
  const result = myStr.split(/[a|b|c]/).filter((e) => e);
  return result.length ? result : ["EMPTY"];
}
/* 




*/
/* Another Approach 01(match와 정규표현식을 이용하여 a-c를 제외한 문자열 목록을 반환) */
const solution = (s) => s.match(/[^a-c]+/g) || ["EMPTY"];
