/* ✨ My Answer 01 ✨ */
function solution(A, B) {
  let result = 0;
  const ascend = A.sort((a, b) => a - b);
  const descend = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    const num1 = ascend[i];
    const num2 = descend[i];
    result += num1 * num2;
  }

  return result;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
