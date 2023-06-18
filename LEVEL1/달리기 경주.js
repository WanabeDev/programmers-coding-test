/* Wrong Answer 01(for를 활용한 풀이 - 일부 테스트를 시간초과로 통과하지 못함) */
function solution(players, callings) {
  const result = [...players];

  for (let i = 0; i < callings.length; i++) {
    const index = result.indexOf(callings[i]);
    const element = result.splice(index, 1)[0];

    result.splice(index - 1, 0, element);
  }
  return result;
}
/* 



*/
/* My Answer 01(객체에 선수들의 정보와 인덱스를 등록하여 순위를 교체하는 방법) */
function solution(players, callings) {
  const playersMap = {};

  // playersMap객체에 선수이름과 인덱스 값을 매핑
  for (let i = 0; i < players.length; i++) {
    playersMap[players[i]] = i;
  }

  // callings배열을 순회하며 선수들의 등수를 업데이트
  for (let i = 0; i < callings.length; i++) {
    // players배열 내 해당 선수의 위치
    const idx = playersMap[callings[i]];
    // 호출된 선수가 추월하게 될 선수의 인덱스
    const temp = players[idx - 1];

    // 호출된 선수와 앞 선수의 위치 교체
    players[idx - 1] = callings[i];
    players[idx] = temp;

    // playersMap의 인덱스 업데이트
    playersMap[callings[i]] = idx - 1;
    playersMap[temp] = idx;
  }

  return players;
}
/* 



*/
/* Another Apporach 01(forEach를 사용하여 선수들의 순서를 교체) */
function solution(players, callings) {
  let idx;
  let name1;
  let name2;
  const idxList = {};

  players.forEach((name, index) => (idxList[name] = index));
  for (let call of callings) {
    idx = idxList[call];
    name1 = players[idx];
    name2 = players[idx - 1];
    idxList[call] -= 1;
    idxList[name2] += 1;
    players[idx] = name2;
    players[idx - 1] = name1;
  }

  return players;
}
