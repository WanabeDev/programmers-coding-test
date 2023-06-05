/* My Answer 01(패턴의 문자열이 1글자이상일 경우 해당패턴의 첫번째 글자 위치를 기준으로 하므로 패턴의 길이를 더해줌) */
function solution(str, pat) {
  return str.substring(0, str.lastIndexOf(pat) + pat.length);
}
/* 



*/
/* Another Approach 01(pat를 기준으로 부분문자열을 반환 후 pat문자를 붙이는 방법) */
const solution = (str, pat) => str.substring(0, str.lastIndexOf(pat)) + pat;
