/* 🚫 Wrong Answer 01 🚫 (정규표현식을 활용한 풀이. 대부분의 효율성 테스트 불통) */
/* replaced를 통한 문자열을 재생성하는 과정과 정규표현식을 사용하는 것이 반복되어 데이터 처리시간이 늘어난 것으로 보임 */
function solution(s) {
  while (s.length > 0) {
    const replaced = s.replace(/(.)\1/, "");
    if (replaced === s) {
      // replace를 하더라도 연속된 문자열이 더 이상 없을 때, 1을 반환하여 종료
      return 0;
    }
    // 연속된 문자열이 있을 경우, 연속된 문자열을 제거한 새로운 문자열로 갱신
    s = replaced;
  }
  // 모든 연속된 문자열을 제거한 결과가 빈 문자열이면 1을 반환, 아니면 0을 반환
  return 1;
}
/* 



*/
/* 🚫 Wrong Answer 02 🚫 (반복문을 활용한 풀이. 대부분의 효율성 테스트 불통) */
/* 문자열을 재생성하고 잘라니는 작업이 반복되어 처리시간이 증가한 것으로 보임 */
function solution(s) {
  while (s.length > 0) {
    let sameChk = false;
    for (let i = 1; i < s.length; i++) {
      if (s[i] === s[i - 1]) {
        // 현재 문자와 이전 문자가 같으면 연속된 문자열을 제거
        sameChk = true;
        s = s.slice(0, i - 1) + s.slice(i + 1);
        break;
      }
    }
    if (!sameChk) {
      // 연속된 문자열이 없으면 0을 반환하여 종료
      return 0;
    }
  }
  // 모든 연속된 문자열을 제거한 결과가 빈 문자열이면 1을 반환, 아니면 0을 반환
  return 1;
}
/* 



*/
/* ✨ My Answer 01 ✨ (stack을 활용한 풀이) */
/* 후입선출 구조를 가진 stack을 활용하여 불필요한 반복작업을 하지 않음 */
function solution(s) {
  const stack = [];

  for (const char of s) {
    // 스택의 top이 현재 문자와 같을 경우
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      // 연속된 문자를 제거
      stack.pop();
    } else {
      // 아니면 스택에 추가
      stack.push(char);
    }
  }

  // 모든 값을 짝지어 제거했다면 1, 아니라면 0을 반환
  return stack.length === 0 ? 1 : 0;
}
