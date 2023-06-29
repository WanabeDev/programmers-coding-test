/* 🌧️ My Answer 01 🌧️ (Map을 활용한 방법으로 너무 복잡하게 풀어내 아쉬운 풀이)*/
function solution(keymap, targets) {
  const map = new Map();
  const result = [];

  // map에 각 문자와 등장위치를 키와 값으로 저장
  for (let i = 0; i < keymap.length; i++) {
    const str = keymap[i];
    for (let j = 0; j < str.length; j++) {
      const char = str[j];
      if (!map.has(char)) {
        map.set(char, []);
      }
      map.get(char).push(j);
    }
  }

  // targets를 순회하며 일치하는 문자가 있는지 확인
  for (let i = 0; i < targets.length; i++) {
    const target = targets[i];
    let count = 0;
    let found = true;

    for (let j = 0; j < target.length; j++) {
      const char = target[j];
      // keymap에 일치하는 문자가 있을 경우
      if (map.has(char)) {
        const indices = map.get(char);
        const minIndex = Math.min(...indices);
        count += minIndex + 1;
        // keymap에 없는 문자가 target에 나오면 break
      } else {
        found = false;
        break;
      }
    }

    result.push(found ? count : -1);
  }

  return result;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ (객체 리터럴을 활용한 방법)*/
function solution(keymap, targets) {
  const answer = [];
  const map = {};

  for (const items of keymap) {
    // 각 문자열을 문자 단위로 분리하여 처리하고, 해당 문자의 최소 눌림 횟수를 map 객체에 저장
    items
      .split("")
      .map(
        (item, index) =>
          (map[item] = map[item] < index + 1 ? map[item] : index + 1)
      );
  }

  for (const items of targets) {
    // 각 문자열을 문자 단위로 분리하여 처리하고, 문자의 눌림 횟수를 누적하여 합산
    // 만약 문자열을 작성할 수 없는 경우 (눌린 키가 없는 경우) -1을 추가
    answer.push(
      items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
    );
  }
  return answer;
}
/*
//
// 아래와 같이split대신 스프레드도 활용 가능하다
function solution(keymap, targets) {
  const answer = [];
  const map = {};

  for (const items of keymap) {
    [...items].map(
      (item, index) =>
        (map[item] = map[item] < index + 1 ? map[item] : index + 1)
    );
  }

  for (const items of targets) {
    answer.push([...items].reduce((cur, item) => (cur += map[item]), 0) || -1);
  }

  return answer;
}
*/
