/* 🚫 Wrong Answer 01 🚫(중복문자가 2개 이상일 때를 대응하지 못함) */
function solution(s) {
  let check = [];
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (!check.includes(s[i])) {
      check.push(s[i]);
      result.push(-1);
    } else {
      let idx = check.indexOf(s[i]);
      result.push(i - idx);
    }
  }
  return result;
}
/* 



*/
/* My Answer 01(hash를 활용한 풀이) */
function solution(s) {
  // -1로 이루어진 s길이의 배열 생성
  const result = new Array(s.length).fill(-1);
  const hash = {};

  // s를 순회하며 문자와 인덱스를 map에 추가
  for (let i = 0; i < s.length; i++) {
    if (hash.hasOwnProperty(s[i])) {
      b;
      result[i] = i - hash[s[i]];
    }
    hash[s[i]] = i;
  }

  return result;
}
/* 



*/
/* Another Approach 01(위 풀이에서 for대신 map을 사용한 방법) */
function solution(s) {
  const hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}
/* 



*/
/* Another Approach 02(lastIndexOf를 이용하여 중복문자와의 거리를 계산) */
const solution = (s) =>
  [...s].map((char, i) => {
    // lastIndexOf가 해당값이 없으면 -1을 반환한다는 점을 이용
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
