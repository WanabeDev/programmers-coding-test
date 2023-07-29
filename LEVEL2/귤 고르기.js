/* ✨ My Answer 01 ✨ */
function solution(k, tangerine) {
  // 배열 내 과일 크기별 개수를 담는 map
  const boxMap = new Map();

  // 귤을 크기별로 분류하고 개수 파악
  for (let num of tangerine) {
    boxMap.set(num, (boxMap.get(num) || 0) + 1);
  }

  // 귤의 크기별 개수를 내림차순 정렬
  let fruits = [...boxMap.values()].sort((a, b) => b - a);
  // 귤의 종류
  let types = 0;
  // 귤의 누적 개수
  let count = 0;

  // 크기가 가장 많은 종류부터 선택하면서 개수 누적
  for (let i = 0; i < fruits.length; i++) {
    count += fruits[i];
    types++;

    if (count >= k) {
      return types;
    }
  }

  return types;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(k, tangerine) {
  let answer = 0;
  const tDict = {};

  //배열을 순회하며 귤의 크기별 개수를 객체에 저장
  tangerine.forEach((t) => (tDict[t] = (tDict[t] || 0) + 1));

  //객체의 값을 배열로 변환하여 크기별 개수를 저장한 배열을 생성
  const tArr = Object.values(tDict).sort((a, b) => b - a);

  // 배열을 순회하며 가장 큰 크기의 귤부터 판매 개수를 카운트
  for (const t of tArr) {
    answer++;

    // 현재 귤의 크기 t가 k보다 작다면 k에서 t를 빼서 남은 개수를 업데이트
    if (k > t) k -= t;
    // 현재 귤의 크기 t가 k보다 크거나 같다면 더 이상 판매할 수 없으므로 반복문을 종료
    else break;
  }

  return answer;
}

function solution(k, tangerine) {
  const boxMap = new Map();

  for (let num of tangerine) {
    boxMap.set(num, (boxMap.get(num) || 0) + 1);
  }

  let fruits = [...boxMap.values()].sort((a, b) => b - a);
  let types = 0;
  let count = 0;

  for (let i = 0; i < fruits.length; i++) {
    count += fruits[i];
    types++;

    if (count >= k) {
      return types;
    }
  }

  return types;
}

function solution(k, tangerine) {
  let answer = 0;
  const tDict = {};

  tangerine.forEach((t) => (tDict[t] = (tDict[t] || 0) + 1));

  const tArr = Object.values(tDict).sort((a, b) => b - a);

  for (const t of tArr) {
    answer++;

    if (k > t) k -= t;
    else break;
  }

  return answer;
}
