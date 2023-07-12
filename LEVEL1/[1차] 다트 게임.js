/* ✨ My Answer 01 ✨ */
function solution(dartResult) {
  const scores = []; // 점수를 저장할 배열
  const regex = /(\d+)([SDT])([*#]?)/g; // 정규식 패턴
  let match;

  // 정규식과 매칭되는 부분을 찾을 때까지 반복
  while ((match = regex.exec(dartResult)) !== null) {
    const [, score, bonus, option] = match; // 매칭된 결과에서 점수, 보너스, 옵션 추출
    let currentScore = parseInt(score); // 현재 점수를 정수로 변환

    if (bonus === "D") {
      currentScore **= 2; // 보너스가 "D"면 현재 점수를 제곱하여 갱신
    } else if (bonus === "T") {
      currentScore **= 3; // 보너스가 "T"면 현재 점수를 세제곱하여 갱신
    }

    if (option === "*") {
      currentScore *= 2; // 옵션이 "*"이면 현재 점수를 2배로 갱신
      if (scores.length > 0) {
        scores[scores.length - 1] *= 2; // 이전 점수도 2배로 갱신
      }
    } else if (option === "#") {
      currentScore *= -1; // 옵션이 "#"이면 현재 점수를 음수로 갱신
    }

    scores.push(currentScore); // 현재 점수를 점수 배열에 추가
  }

  const totalScore = scores.reduce((acc, cur) => acc + cur, 0); // 점수 배열의 합을 계산
  return totalScore; // 총 점수 반환
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}
