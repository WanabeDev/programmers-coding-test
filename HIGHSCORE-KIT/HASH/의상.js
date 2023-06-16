/* My Answer 01 🤔 */
function solution(clothes) {
  let map = new Map();
  let combi = 1;

  // map에 clothes의 item을 저장
  for (let item of clothes) {
    const [a, b] = [item[0], item[1]];

    if (!map.has(b)) {
      map.set(b, new Set());
    }
    map.get(b).add(a);
  }

  // 경우의 수 계산
  for (const [category, items] of map) {
    combi *= items.size + 1;
  }

  // 아무것도 선택하지 않는 경우를 제외한 경우의 수 반환
  return combi - 1;
}
/* 


*/
/* Another Approach 01 😮 (나의 풀이보다 좀더 간결한 방법) */
function solution(clothes) {
  let answer = 1;
  const obj = {};
  for (let item of clothes) {
    // 카테고리만 키로 추가하고 값은 숫자로도 충분
    obj[item[1]] = (obj[item[1]] || 0) + 1;
  }

  for (let key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
}
/* 


*/
/* Another Approach 02 👍 */
function solution(clothes) {
  return (
    // 객체를 Object.values처리하면 값이 배열형태로 반환됨
    Object.values(
      // 종류별 옷 개수를 객체형태로 저장
      clothes.reduce((obj, t) => {
        obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
        return obj;
      }, {})
    ).reduce((a, b) => a * (b + 1), 1) - 1
  );
}
