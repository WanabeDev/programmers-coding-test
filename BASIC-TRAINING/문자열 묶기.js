/* My Answer 01(길이별로 객체에 정리하여 제일 카운트가 많이 된 값을 반환) */
function solution(arr) {
  // 문자열 길이별로 카운트를 저장할 객체 counts 선언
  const counts = arr.reduce((counts, str) => {
    const length = str.length;

    // counts 객체에 해당 길이의 속성이 존재하는지 확인하고, 없다면 0으로 초기화 후 1을 더하여 업데이트
    counts[length] = (counts[length] || 0) + 1;
    return counts;
  }, {});

  // counts 객체의 값들 중 가장 큰 값을 반환
  return Math.max(...Object.values(counts));
}
/*



*/
/* Another Approach 01 */
function solution(strArr) {
  // 길이 31인 배열을 0으로 채워 초기화
  let ans = Array(31).fill(0);

  // 주어진 문자열 배열을 순회하면서 각 문자열의 길이별로 카운트
  for (let s of strArr) ans[s.length]++;

  // 카운트 배열에서 가장 큰 값을 반환
  return Math.max(...ans);
}
/*



*/
/* Another Approach 02 */
function solution(strArr) {
  return Math.max(
    ...Object.values(
      strArr.reduce((p, c) => {
        // 해당 문자열의 길이가 현재 객체에 속성으로 존재하는지 확인
        if (!p.hasOwnProperty(c.length))
          // 존재하지 않을 경우 0으로 초기화
          p[c.length] = 0;
        // 해당 길이의 문자열 카운트를 1 증가시킴
        p[c.length]++;
        return p;
      }, {})
    )
  );
}
