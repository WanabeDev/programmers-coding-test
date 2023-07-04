/* ✨ My Answer 01 ✨ */
function solution(lottos, win_nums) {
  // 일치하는 번호 개수
  let winCount = 0;
  // 가려진 번호 개수
  let blindNumCount = 0;

  lottos.forEach((lottoNum) => {
    // 가려진 번호인 경우
    if (lottoNum === 0) blindNumCount++;
    // 일치하는 번호인 경우
    if (win_nums.includes(lottoNum)) winCount++;
  });

  // 가려진 번호가 있는지 체크
  const checkBlindNum = lottos.indexOf(0);

  // 가려진 번호와 일치하는 번호가 없는 경우
  if (!checkBlindNum && winCount === 0) return [1, 6];
  // 가려진 번호가 있고 일치하는 번호가 없는 경우
  else if (checkBlindNum && winCount === 0) return [6, 6];
  // 가려진 번호 없이 모든 번호 일치하는 경우
  else if (!checkBlindNum && winCount === 6) return [1, 1];

  // 최고 순위와 최저 순위 계산
  const [maxRank, minRank] = [7 - (blindNumCount + winCount), 7 - winCount];

  return [maxRank, minRank];
}
/* 



*/
/* ✨ My Answer 02 ✨ (set 활용) */
function solution(lottos, win_nums) {
  // 당첨 번호를 Set으로 저장
  const winSet = new Set(win_nums);
  // 일치하는 번호 개수를 세기 위한 변수
  let winCount = 0;
  // 가려진 번호 개수를 세기 위한 변수
  let blindNumCount = 0;

  // 가려진 숫자와 일치하는 숫자 개수 체크
  lottos.forEach((lottoNum) => {
    if (lottoNum === 0) blindNumCount++;
    if (winSet.has(lottoNum)) winCount++;
  });

  // 최고, 최저 순위 계산
  const maxRank = Math.min(7 - (blindNumCount + winCount), 6);
  const minRank = Math.min(7 - winCount, 6);

  return [maxRank, minRank];
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1]; // 순위를 저장하는 배열

  // 일치하는 번호 개수 계산
  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  // 가려진 번호 개수 계산
  let zeroCount = lottos.filter((v) => !v).length;

  // 최고 순위를 위해 일치하는 번호와 가려진 번호 합산
  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
