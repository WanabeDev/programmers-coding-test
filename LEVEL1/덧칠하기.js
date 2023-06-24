/* ✨ My Answer 01 ✨(map을 활용한 풀이)*/
function solution(n, m, section) {
  // 페인트칠 횟수
  let result = 0;
  // 현재 페인트가 칠해진 범위
  let range = 0;
  section.forEach((s) => {
    // 현재 구역에 페인트칠이 필요할 경우
    if (s > range) {
      // 페인트칠 회수 증가
      result++;
      // 페인트칠 범위 갱신
      range = s + m - 1;
    }
  });
  return result;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️(forEach대신 for of활용) */
function solution(n, m, sections) {
  var answer = 0;
  var painted = 0;
  for (var section of sections) {
    if (painted < section) {
      answer++;
      painted = section + m - 1;
    }
  }
  return answer;
}
