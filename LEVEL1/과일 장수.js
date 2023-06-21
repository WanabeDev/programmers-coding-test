/* 🚫 Wrong Answer 01 🚫(테스트 5, 16 불통 버리는 사과의 기준을 잘못 파악한 것이 원인) */
function solution(k, m, score) {
  const scores = [...score.sort((a, b) => b - a)];
  let result = 0;

  for (let i = 0; i < scores.length; i += m) {
    const subArray = scores.slice(i, i + m);
    const leftApples = subArray.reduce((a, c) => a + c);

    if (leftApples >= m) {
      const minScore = subArray.reduce((min, score) => Math.min(min, score));
      result += minScore * m * 1;
    }
  }

  return result;
}
/* 



*/
/* ✨ My Answer 01 ✨ (점수를 내림차순 정렬하여 상자단위로 나눈 뒤 최저 점수 계산) */
function solution(k, m, score) {
  const scores = [...score.sort((a, b) => b - a)];
  let result = 0;

  // 사과를 상자단위로 나누기
  for (let i = 0; i < scores.length; i += m) {
    const subArray = scores.slice(i, i + m);

    // 상자 내 사과 점수의 합이 아닌 상자 단위를 충족하는지 체크
    if (subArray.length >= m) {
      const minScore = subArray.reduce((min, score) => Math.min(min, score));
      result += minScore * m * 1;
    }
  }

  return result;
}
/* 



*/
/* ✨ My Answer 02 ✨(scores에서 정렬과 동시에 박스단위로 나누도록 함) */
function solution(k, m, score) {
  let result = 0;
  //slice(score.length % m)와 같이 지정해 주는 것으로 박스단위로 떨어지지 않는 나머지 값은 버릴 수 있다
  const scores = [...score.sort((a, b) => a - b).slice(score.length % m)];

  for (let i = 0; i < scores.length; i += m) {
    result += scores[i] * m;
  }

  return result;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ (filter와 reduce를 사용한 풀이) */
solution = (_, m, s) =>
  s
    .sort()
    // 0부터 m의 배수 단위의 인덱스만 필터링
    .filter((_, i) => !((s.length - i) % m))
    .reduce((a, v) => a + v, 0) * m;
