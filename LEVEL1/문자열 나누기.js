/* 🌧️ My Answer 01 🌧️ */
function solution(s) {
  let result = 0; // 분해된 문자열의 개수

  while (s.length > 0) {
    let sameCount = 1; // 동일 문자 개수
    let otherCount = 0; // 다른 문자 개수

    for (let i = 1; i < s.length; i++) {
      // 동일한 문자일 경우
      if (s[i] === s[0]) {
        sameCount++;
      } else {
        otherCount++;
      }

      // 동일 문자와 다른 문자의 개수가 같은 경우
      if (sameCount === otherCount) {
        result++;
        // 다음 문자열 처리를 위해 문자열을 잘라 갱신
        s = s.substring(i + 1);
        break;
      }
    }

    // 동일 문자와 다른 문자의 개수가 다른 경우
    if (sameCount !== otherCount) {
      result++;
      s = "";
    }
  }

  return result;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(s, count = 0) {
  // 문자열이 비어있을 경우 count를 반환하고 종료
  if (!s) return count;
  let [first, ...rest] = s.split("");
  let countSame = 1; // 동일 문자 개수를
  let countInSame = 0; // 다른 문자 개수
  let i = 0;

  // 동일 문자와 다른 문자 개수 카운트
  for (; i < rest.length; i++) {
    if (rest[i] === first) {
      // 현재 문자와 첫 번째 문자가 같으면 countSame 증가
      countSame++;
    } else {
      countInSame++;
    }

    // 동일 문자와 다른 문자 개수가 같아지면 루프 종료
    if (countSame === countInSame) {
      break;
    }
  }

  // 재귀 함수 호출. 나머지 문자와 분해된 문자열의 개수(count)를 인자로 보냄
  return solution(rest.slice(i + 1).join(""), count + 1);
}
/* 



*/
/* ⭐️ Another Approach 02 ⭐️ */
function solution(s) {
  let answer = 0; // 분해한 문자열의 개수
  let current; // 현재 처리 중인 문자
  let count = 0; // 현재까지 나타난 동일 문자 개수

  for (let i = 0; i < s.length; i++) {
    // 새로운 문자열의 시작
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      // 현재 처리 중인 문자와 다른 문자인 경우
      if (current !== s[i]) count--;
      else count++;
    }
  }

  return answer;
}
