/* My Answer 01 ⛅️(테스트는 통과했지만 해싱을 사용하지 않아 아쉬운 풀이) */
function solution(participant, completion) {
  const sortPart = participant.sort();
  const sortComple = completion.sort();

  for (let i = 0; sortPart.length; i++) {
    if (sortPart[i] !== sortComple[i]) {
      return sortPart[i];
    }
  }
}
/* 


*/
/* Another Approach 01 👍(map 활용) */
function solution(participant, completion) {
  const map = new Map();

  // participant 배열을 순회하며 이름을 키, 출현 횟수를 값으로 하는 Map 생성
  for (let name of participant) {
    map.set(name, (map.get(name) || 0) + 1);
  }
  // completion 배열을 순회하며 해당 이름의 출현 횟수를 1 감소시킴
  for (let name of completion) {
    map.set(name, map.get(name) - 1);
  }

  // Map을 순회하며 출현 횟수가 양수인 첫 번째 이름 반환
  for (let [key, value] of map) {
    if (value > 0) {
      return key;
    }
  }
}
/* 


*/
/* Another Approach 02 👍(01 풀이 업그레이드 버전)*/
function solution(participant, completion) {
  const map = new Map();

  // 참가자의 이름과 출연회수를 맵에 저장
  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1); //map에 a가 있으면 +1, 없으면 0을 초기값으로
    map.set(b, (map.get(b) || 0) - 1); //map에 b가 있으면 -1, 없으면 0을 초기값으로
  }

  // 출연회수가 0보다 큰 참가자를 찾아 반환
  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}
/* 


*/
/* Another Approach 03 😱(독특한 풀이.매개변수를 _,$처리하여 경량화 했지만 가독성이 떨어지고 이해가 어렵다) */
var solution = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );
//
// 매개변수를 복원한 모습. completion배열 내 이름을 키, 출연회수를 값으로 등록한 객체와 participant의 이름을 비교하여 중복되지 않는 이름을 찾는 방법
var solution = (participant, completion) =>
  participant.find(
    (name) => !completion[name]--,
    completion.map((name) => (completion[name] = (completion[name] | 0) + 1))
  );
