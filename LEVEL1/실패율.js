/* 🚫 Wrong Answer 01(일부 테스트를 통과하지 못함) 🚫 */
function solution(N, stages) {
  let rateMap = new Map();

  for (let i = 1; i <= N; i++) {
    let dropOut = stages.filter((stage) => stage === i);
    rateMap.set(i, +(dropOut.length / stages.length).toFixed(2));
    stages = stages.filter((stage) => stage > i);
  }

  let result = Array.from(rateMap)
    .sort((a, b) => b[1] - a[1])
    .map(([stage]) => stage);

  return result;
}
/* 



*/
/* ✨ My Answer 01 ✨(map을 활용한 풀이)*/
function solution(N, stages) {
  let rateMap = new Map();
  let players = stages.length;

  for (let i = 1; i <= N; i++) {
    // 스테이지 별 클리어 실패한 도전자 수
    let dropOut = stages.filter((stage) => stage === i);
    // 스테이지 별 실패율
    let failureRate = dropOut.length / players || 0;
    rateMap.set(i, failureRate);
    players -= dropOut.length;
  }

  let result = Array.from(rateMap)
    .sort((a, b) => {
      // 실패율이 다를때만 내림차순
      if (b[1] !== a[1]) {
        return b[1] - a[1];
      } else {
        return a[0] - b[0];
      }
    })
    .map(([stage]) => stage);

  return result;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️(for와 filter를 활용한 간단한 풀이) */
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    // 스테이지 별 남은 도전자 수
    let reach = stages.filter((x) => x >= i).length;
    // 스테이지 별 클리어 실패한 도전자 수
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
