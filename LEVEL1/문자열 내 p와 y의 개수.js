/* My Answer 01(for를 활용한 풀이 - 문자열의 길이에 따라 성능이 달라지므로 best는 아님) */
function solution(s) {
  const lowArr = [...s.toLowerCase()];
  let [p, y] = [0, 0];
  // s내에서 p와 y의 개수를 각각 카운트
  for (let i = 0; i <= lowArr.length; i++) {
    if (lowArr[i] === "p") {
      p++;
    } else if (lowArr[i] === "y") {
      y++;
    }
  }

  return p === y ? true : false;
}
/* 



*/
/* My Answer 02(정규표현식을 활용) */
function solution(s) {
  // s내에서 p또는 y를 대소문자 구분없이 찾아냄
  const matched = s.match(/p|y/gi);
  // 배열의 길이 짝,홀 여부에 따라 true 또는 false 반환
  return matched.length % 2 === 0;
}
/* 



*/
/* Another Approach 01(정규표현식을 조금 다르게 활용) */
function solution(s) {
  // s내에서 p와 y를 각각 찾아내 길이를 비교
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
