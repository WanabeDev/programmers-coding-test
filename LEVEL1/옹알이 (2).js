/* ⛈️ My Answer 01 ⛈️ (배열의 요소들을 split의 기준으로 삼아 판별하는 방법 아쉬운 풀이) */
function solution(babbling) {
  const can = ["aya", "ye", "woo", "ma"];
  let result = 0;

  for (let word of babbling) {
    for (let i = 0; i < can.length; i++) {
      if (word.includes(can[i].repeat(2))) {
        break;
      }

      word = word.split(can[i]).join(" ");
    }
    if (word.split(" ").join("").length === 0) {
      result += 1;
    }
  }

  return result;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️(정규표현식을 활용한 풀이) */
function solution(babbling) {
  // (aya|ye|woo|ma)괄호 안의 내용 중 하나
  // \1+ : 이전 그룹과 동일한 발음이 1회 이상 반복되는 것
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  // ^ : 문자열의 시작
  // +$ : 시작부터 끝까지 해당 발음이 1회 이상 반복되는 패턴
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}
/* 



*/
/* ⭐️ Another Approach 02 ⭐️(정규표현식을 활용한 풀이) */
function solution(babbling) {
  let answer = 0;

  // forEach() 메서드로 babbling을 하나씩 확인합니다.
  for (let word of babbling) {
    // 정규식을 이용하여 연속된 같은 발음이 있는지 체크합니다.
    // 연속된 같은 발음이 있다면 continue를 통해 다음 단어로 넘어갑니다.
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;

    // 정규식을 이용해 발음할 수 있는 단어만 있는지 체크합니다.
    // 발음할 수 있는 단어만 있다면 answer을 1 증가시킵니다.
    if (/^(aya|ye|woo|ma)+$/g.test(word)) {
      answer++;
    }
  }

  return answer;
}
