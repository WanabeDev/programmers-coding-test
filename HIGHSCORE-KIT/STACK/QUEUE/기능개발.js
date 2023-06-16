/* My Answer 01 */
function solution(progresses, speeds) {
  const answer = [];

  // progresses 배열이 비어있지 않은 동안 반복
  while (progresses.length > 0) {
    // 작업률을 작업속도에 맞게 업데이트
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    let count = 0;

    // 작업 진도가 100% 이상인 작업을 배열에서 제거
    while (progresses.length > 0 && progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }

    if (count > 0) {
      answer.push(count);
    }
  }
  return answer;
}
/* 



*/
/* Another Approach 01(for를 활용한 방법) */
function solution(progresses, speeds) {
  let answer = [0];
  // 작업이 완료되기까지 걸리는 날짜 배열 계산
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    // 현재 작업이 이전 작업들의 최대 날짜보다 작거나 같은 경우
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      // 현재 작업이 이전 작업들의 최대 날짜보다 큰 경우
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
