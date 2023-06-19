/* ✨ My Answer 01 ✨ (award배열을 관리하여 최하점을 구하는 방법) */
function solution(k, score) {
  const award = [];
  const result = [];

  for (let i = 0; i < score.length; i++) {
    // 명예의 전당 기본 셋팅
    if (i < k) {
      award.push(score[i]);
    }

    // 이번 점수가 명예의 전당 최하위 점수보다 큰 경우
    if (score[i] > Math.min(...award)) {
      // 가장 작은 수를 이번 점수와 교체 후 내림차 순 정렬
      award.pop();
      award.push(score[i]);
      award.sort((a, b) => b - a);
    }

    // 결괏값에 명예의 전당 중 최하위 점수 입력
    result.push(award.at(-1));
  }

  return result;
}
/* 


*/
/* ⭐️ Another Approach 01 ⭐️ (reduce를 활용한 방법) */
function solution(k, score) {
  const stack = [];

  return score.reduce((a, c) => {
    //명예의 전당에 아직 자리가 있는 경우
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
      // 명예의 전당이 가득 찬 경우
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }

    // 현재 명예의 전당에서 가장 낮은 점수를 결과 배열에 추가
    a.push(stack[0]);
    return a;
  }, []);
}
