/* My Answer 01(stack을 이용하여 괄호의 쌍을 체크하는 방법) */
function solution(s) {
  // s의 길이가 홀수이거나 문자열의 시작 또는 끝이 각각 ")","("인 경우
  if (s.length % 2 !== 0 || s[0] === ")" || s[s.length - 1] === "(") {
    return false;
  }

  let stack = [];

  // 괄호 방향에 따라 push와 pop을 하며 쌍을 체크
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("()");
    } else if (s[i] === ")") {
      if (stack.length === 0 || stack.pop() !== "()") {
        return false;
      }
    }
  }

  // 괄호의 쌍이 맞다면 for문의 순회가 끝난 후 배열의 길이는 0이므로 true를 반환
  return stack.length === 0;
}
//↓↓
//↓↓
//↓↓
/* Fixed 🛠️(")"로 시작하는경우 스택이 비어있는지를 확인하고 처리)*/
function solution(s) {
  if (s.length % 2 !== 0 || s[0] === ")" || s[s.length - 1] === "(") {
    return false;
  }

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push("(");
    } else if (s[i] === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

/* 




*/
/* Wrong Answer 01(count를 활용한 방법 - 정확성 통과, 효율 불통) */
function solution(s) {
  let count = 0;

  // 괄호 방향에따라 count를 가감하며 짝이 맞는지 체크
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    } else if (s[i] === ")") {
      count--;
    }

    // 괄호의 짝이 맞지 않아 count가 음수가 될 경우
    if (count < 0) {
      return false;
    }
  }

  // 괄호의 쌍이 맞다면 for문의 순회가 끝난 후 count는 0이므로 true를 반환
  return count === 0;
}
//↓↓
//↓↓
//↓↓
/* Fixed 🛠️(")"가 먼저 나온 경우를 추가하여 유효성 검사 통과)*/
function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    } else if (s[i] === ")") {
      if (count === 0) {
        return false; // 오른쪽 괄호가 먼저 나온 경우
      }
      count--;
    }
  }

  return count === 0; // for문 순회 후 count가 0인지 확인하여 괄호의 쌍이 맞는지 반환
}

/* 




*/
/* Wrong Answer 02(Wrong Answer 01과 비슷한 방법 - 정확성 통과, 효율 불통) */
function solution(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}
//↓↓
//↓↓
//↓↓
/* Fixed 🛠️(괄호 개수 불일치만을 검사하던 기존 코드에서 괄호 순서까지 검사하는 것으로 수정)*/
function solution(s) {
  let cum = 0;
  for (let paren of s) {
    if (paren === "(") {
      cum++;
    } else if (paren === ")") {
      cum--;
    }
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0;
}
