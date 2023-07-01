/* 🚫 Wrong Answer 01(제출시 다 틀림) 🚫 */
function solution(s, skip, index) {
  let strCode = [...s].map((char) => char.charCodeAt(0));
  const skipCode = [...new Set(skip)].map((char) => char.charCodeAt(0));

  for (let i = 0; i < strCode.length; i++) {
    let skipCount = 0;

    for (const num of skipCode) {
      if (num > strCode[i] && num < strCode[i] + index) {
        skipCount++;
      }
    }

    // index와 스킵해야하는 문자수를 합하여 해당문자에 반영
    strCode[i] += index + skipCount;

    // code가 'z'에 해당하는 122를 넘길 경우
    if (strCode[i] > 122) {
      strCode[i] = 96 + (strCode[i] - 122);
    }
  }

  return strCode.map((char) => String.fromCharCode(char)).join("");
}
/* 




*/
/* ✨ My Answer 01 ✨ */
function solution(s, skip, index) {
  let result = "";

  // 알파벳 배열 내에서 스킵해야하는 문자들을 필터링
  const skipedChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ].filter((c) => !skip.includes(c));

  for (const c of s) {
    // 현재 문자의 인덱스 값에 index를 더하여 새로운 인덱스 계산
    const newIdx = skipedChars.indexOf(c) + index;
    // 계산된 인덱스를 유효범위 내로 조정하여 해당하는 문자를 결과에 추가
    result += skipedChars[newIdx % skipedChars.length];
  }

  return result;
}
/* 




*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(s, skip, index) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ].filter((c) => !skip.includes(c));

  // % alphabet.length를 통해 인덱스가 배열의 범위를 초과할 경우에 대비하며 해당하는 문자를 가져옴
  return s
    .split("")
    .map((c) => alphabet[(alphabet.indexOf(c) + index) % alphabet.length])
    .join("");
}
/* 




*/
/* ⭐️ Another Approach 02 ⭐️ (정규표현식 활용)*/
const solution = (s, skip, index) => {
  let ans = "";
  const matched = "abcdefghijklmnopqrstuvwxyz".match(
    new RegExp(`[^${skip}]`, "g")
  );

  for (const c of s) {
    const newIdx = matched.indexOf(c) + index;
    ans += matched[newIdx % matched.length];
  }

  return ans;
};
