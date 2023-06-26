/* 🚫 Wrong Answer 01(일부 테스트를 시간초과) 🚫 */
function solution(X, Y) {
  let minLen = X.length < Y.length ? X : Y;
  let maxLen = X.length >= Y.length ? X : Y;
  let result = [];

  for (let i = 0; i < maxLen.length; i++) {
    const num = maxLen[i];

    for (let j = 0; j < minLen.length; j++) {
      if (maxLen[i] === minLen[j]) {
        result.push(num);
        minLen = minLen.replace(num, "");
      }
    }
  }

  if (result.length === 0) {
    return "-1";
  } else if (+result.join("") === 0) {
    return "0";
  } else {
    result = result.sort((a, b) => b - a).join("");
  }

  return result;
}
/* 



*/
/* ✨ My Answer 01 ✨(map을 활용한 풀이) */
function solution(X, Y) {
  let result = "";
  const map = new Map();

  // X의 각 문자를 순회하며 숫자별 개수 파악
  for (const num of X) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Y의 각 문자를 순회하며 X에 존재하는 숫자인지 파악
  for (const num of Y) {
    // X에 존재하는 숫자인 경우 결과 문자열에 추가하고 개수를 감소
    if (map.has(num) && map.get(num) > 0) {
      result += num;
      map.set(num, map.get(num) - 1);
    }
  }

  // result가 비어있을 경우
  if (result === "") return "-1";
  // result가 0일 경우
  if (+result === 0) return "0";
  return [...result]
    .map((num) => +num)
    .sort((a, b) => b - a)
    .join("");
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️(for와 filter를 활용한 간단한 풀이) */
function solution(X, Y) {
  let result = "";
  const numObj = {};

  // X의 각 문자를 순회하며 숫자별 개수 파악
  for (const char of X) {
    // 해당 값이 존재하지 않을 경우 0으로 대체, 존재하면 1 증가
    numObj[char] = (numObj[char] || 0) + 1;
  }

  // Y의 각 문자를 순회하며 X에 존재하는 숫자인 경우 결과 문자열에 추가하고 개수를 감소
  for (const char of Y) {
    // 해당 숫자가 X에 존재하지 않으면 건너뜀
    if (!numObj[char]) continue;
    result += char;
    numObj[char]--;
  }

  // result가 비어있을 경우
  if (result === "") return "-1";
  // result가 0일 경우
  if (+result === 0) return "0";
  return [...result]
    .map((num) => +num)
    .sort((a, b) => b - a)
    .join("");
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️(for와 filter를 활용한 간단한 풀이) */
function solution(X, Y) {
  // 초기화
  const answer = [];
  const numberX = new Array(10).fill(0);
  const numberY = new Array(10).fill(0);

  // 숫자별 보유 개수파악
  X.split("").forEach((n) => numberX[n]++);
  Y.split("").forEach((n) => numberY[n]++);

  // 최대공통개수 파악 후, 해당 개수만큼 숫자 확보
  for (let i = 0; i < 10; i++) {
    const m = Math.min(numberX[i], numberY[i]);
    for (let j = 0; j < m; j++) {
      answer.push(i);
    }
  }

  // 짝꿍숫자 추출 후 예외처리 및 형변환
  let mateNum = answer.sort((a, b) => b - a);
  if (mateNum[0] == 0) {
    mateNum = [0];
  }
  if (mateNum.length == 0) {
    mateNum = [-1];
  }
  return String(mateNum.join(""));
}
