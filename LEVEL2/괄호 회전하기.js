/* 🌧️ My Answer 01 🌧️ */
// 불필요한 중복 패턴 체크로 인해 시간 복잡도가 높아져 성능저하 우려가 있음
function solution(s) {
  const Parentheses = [];

  function isCorrectParentheses(s) {
    // 괄호의 짝이 맞는지 체크하기 위한 정규표현식
    const regex = /(\(\)|\[\]|\{\})/g;
    // rotate한 문자가 올바른 괄호패턴인지 체크
    while (regex.test(s)) {
      s = s.replace(regex, "");
    }

    return s.length === 0;
  }

  // 문자열을 회전시키면서 올바른 괄호 패턴을 찾아 Parentheses 배열에 추가
  for (let i = 0; i < s.length; i++) {
    // 문자열 s를 왼쪽으로 i칸 회전시킨 문자열
    const rotate = s.slice(i) + s.slice(0, i);

    // rotate가 올바른 괄호인지 체크하여 Parentheses 배열에 추가
    if (isCorrectParentheses(rotate)) {
      Parentheses.push(rotate);
    }
  }

  return Parentheses.length;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(s) {
  // 문자열의 길이가 홀수일 경우
  if (s.length % 2 === 1) return 0;

  const mapping = { "}": "{", "]": "[", ")": "(" };
  let answer = 0;

  // 문자열을 회전시키며 올바른 괄호 패턴을 찾아 개수를 증가
  for (let i = 0; i < s.length; i++) {
    const stack = [];
    // 문자열 s를 왼쪽으로 i칸 회전시킨 문자열
    const rotate = s.slice(i) + s.slice(0, i);
    // 괄호 짝을 확인하는 플래그
    let flag = true;

    // 회전시킨 문자열을 순회하며 괄호 패턴을 확인
    for (let j = 0; j < s.length; j++) {
      if (rotate[j] === "[" || rotate[j] === "(" || rotate[j] === "{") {
        stack.push(rotate[j]);
      } else {
        const last = stack.pop();

        if (last !== mapping[rotate[j]]) {
          flag = false;
          break;
        }
      }
    }

    if (flag) answer++;
  }

  return answer;
}
/* 



*/
/* ⭐️ Another Approach 02 ⭐️ */
function solution(s) {
  let answer = 0;

  // 문자열을 회전시키면서 괄호 패턴 체크
  for (let i = 0; i < s.length; i++) {
    const arr = [];
    // 문자열 s를 왼쪽으로 i칸 회전시킨 문자열
    const temp = i === 0 ? s : s.slice(i) + s.slice(0, i);

    // 회전시킨 문자열을 순회하며 괄호 패턴을 확인
    for (let j = 0; j < temp.length; j++) {
      // 스택의 마지막 요소가 '('이고, 현재 문자가 ')'일 경우
      if (arr[arr.length - 1] === "(" && temp[j] === ")") {
        arr.pop();
        // 스택의 마지막 요소가 '['이고, 현재 문자가 ']'일 경우
      } else if (arr[arr.length - 1] === "[" && temp[j] === "]") {
        arr.pop();
        // 스택의 마지막 요소가 '{'이고, 현재 문자가 '}'일 경우
      } else if (arr[arr.length - 1] === "{" && temp[j] === "}") {
        arr.pop();
      } else {
        arr.push(temp[j]);
      }
    }

    if (arr.length === 0) answer++;
  }

  return answer;
}
