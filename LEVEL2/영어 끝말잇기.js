/* ✨ My Answer 01 ✨ */
function solution(n, words) {
  const wordSet = new Set();

  for (let i = 0; i < words.length; i++) {
    const endChar = words[i][words[i].length - 1]; // 현재 단어의 마지막 글자

    // 반복문이 마지막 단어 이전까지만 실행되도록
    if (i < words.length - 1) {
      const startChar = words[i + 1][0]; // 다음 단어의 첫 번째 글자

      // 현재 단어의 마지막 글자와 다음 단어의 첫 번째 글자가 일치하지 않거나, 다음 단어가 이미 등장한 단어인 경우
      if (endChar !== startChar || wordSet.has(words[i + 1])) {
        return [((i + 1) % n) + 1, Math.floor((i + 1) / n + 1)];
      }
    }

    wordSet.add(words[i]); // 현재 단어를 집합에 추가하여 등장한 단어로 기록
  }

  return [0, 0]; // 정상적으로 게임이 종료되었을 경우
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(n, words) {
  let answer = 0; // 답을 저장하기 위한 변수 초기화
  words.reduce((prev, now, idx) => {
    // reduce 함수는 'words' 배열의 각 단어를 반복 처리
    // prev: 이전에 처리된 단어 (처음에는 빈 문자열로 초기화됨)
    // now: 현재 처리 중인 단어
    // idx: 'words' 배열에서 현재 단어의 인덱스

    // 'answer'가 0이 아닌지 (이미 설정된 상태인지) 확인
    // 0이 아니라면, 이미 'answer'가 설정된 상태이므로 아래 조건에 따라 'answer'를 평가함
    answer =
      answer ||
      // words.slice(0, idx).indexOf(now) !== -1 : now 이전에 등장한 단어들의 배열에 현재 단어가 포함되어있는지 체크
      // prev !== now[0] : 하단 now[now.length - 1]를 통해 prev에 등록된 이전단어의 마지막글자와 현재 단어의 맨 앞글자를 비교
      (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]
        ? idx
        : answer);

    return now[now.length - 1]; // 다음 반복을 위해 현재 단어의 마지막 글자를 반환하여 'prev'로 사용
  }, "");

  // reduce 함수 실행 후에, 'answer'가 0이 아닌지 확인
  // 0이 아니라면, 게임이 문제로 인해 종료된 것이므로 플레이어 번호와 라운드 번호를 반환
  // 0이면, 게임에 문제가 없이 정상적으로 종료되었음을 나타내기 위해 [0, 0]을 반환
  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}
