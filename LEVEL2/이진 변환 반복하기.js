/* ✨ My Answer 01 ✨ */
function solution(s) {
  let [A, B] = [0, 0];

  // 문자열이 "1"이 아닐 때까지 반복
  while (s !== "1") {
    const accLen = s.length; // 변환 이전 문자열의 길이
    const curLen = s.replace(/0/gi, "").length; // 0을 제거한 후의 문자열 길이

    A++; // 2진수 변환 횟수 증가
    B += accLen - curLen; // 제거된 0의 총 개수 계산

    s = curLen.toString(2); // 0을 제거한 후의 문자열을 2진수로 변환하여 다음 반복에 사용
  }
  return [A, B]; // 변환된 2진수의 개수와 제거된 0의 총 개수 반환
}

/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(s) {
  var answer = [0, 0];

  // 문자열의 길이가 1보다 큰 동안 반복
  while (s.length > 1) {
    answer[0]++; // 2진수 변환 횟수 증가
    answer[1] += (s.match(/0/g) || []).length; // 제거된 0의 총 개수 계산
    s = s.replace(/0/g, "").length.toString(2); // 0을 제거한 후의 문자열을 2진수로 변환하여 다음 반복에 사용
  }
  return answer; // 변환된 2진수의 개수와 제거된 0의 총 개수 반환
}
