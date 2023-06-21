/* ✨ My Answer 01 ✨ (각 카드뭉치의 인덱스를 활용하여 비교) */
function solution(cards1, cards2, goal) {
  let cardIdx1 = 0;
  let cardIdx2 = 0;

  for (let i = 0; i < goal.length; i++) {
    const word = goal[i];

    // goal의 단어와 일치하는 카드뭉치의 값 증가
    if (cards1[cardIdx1] === word) {
      cardIdx1++;
    } else if (cards2[cardIdx2] === word) {
      cardIdx2++;
    } else {
      return "No";
    }
  }
  return "Yes";
}
/* 


*/
/* ⭐️ Another Approach 01 ⭐️(for of를 활용한 좀 더 간단한 방법) */
function solution(cards1, cards2, goal) {
  for (const s of goal) {
    if (cards1[0] == s) {
      cards1.shift();
    } else if (cards2[0] == s) {
      cards2.shift();
    } else {
      return "No";
    }
  }

  return "Yes";
}
