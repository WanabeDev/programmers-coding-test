/* My Answer 01(forEach를 활용하여 배열을 패턴과 비교) */
function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const counts = [0, 0, 0];

  // answers배열 순회
  answers.forEach((answer, i) => {
    // patterns배열 순회
    patterns.forEach((pattern, j) => {
      // 패턴 내 현재 인덱스에 해당하는 답안과 일치하는지 확인 후
      // 일치하는 경우 해당 패턴의 정답 횟수 증가.
      if (answer === pattern[i % pattern.length]) {
        counts[j]++;
      }
    });
  });

  /* 위 forEach를 이용한 방법을 for문으로 풀어내면 아래와 같다
for (let i = 0; i < answers.length; i++) {
  const answer = answers[i];

  for (let j = 0; j < patterns.length; j++) {
    const pattern = patterns[j];

    if (answer === pattern[i % pattern.length]) {
      counts[j]++;
    }
  }
}
 */

  // counts내 최대 값
  const maxCount = Math.max(...counts);

  // 가장 큰 값과 일치하는 패턴의 인덱스들을 배열에 저장
  const maxKeys = counts.reduce((acc, cur, index) => {
    if (cur === maxCount) {
      acc.push(index + 1);
    }
    return acc;
  }, []);

  return maxKeys;
}
/* 



*/
/* Another Approach 01(패턴을 각각 분리하여 맞힌 횟수를 비교하는 방법) */
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 각 패턴별 맞힌 횟수 비교
  // 패턴길이보다 입력길이가 길 경우에 대비하기 위해 'i % a1.length'와 같은 방식 사용
  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  // 패턴별 맞힌 횟수를 빈 배열에 추가
  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}
