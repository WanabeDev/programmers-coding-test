/* ✨ My Answer 01 ✨ */
function solution(common) {
  const diff = common[1] - common[0];
  const rat = common[1] / common[0];

  let isAri = true;

  // 등비수열인지 등차수열인지 체크
  for (let i = 2; i < common.length; i++) {
    if (common[2] - common[2 - 1] !== diff) {
      isAri = false;
    }
  }

  const lastIdx = common[common.length - 1];

  return isAri ? lastIdx + diff : lastIdx * rat;
}
