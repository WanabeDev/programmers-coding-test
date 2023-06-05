/* Answer 01(직관적인 풀이방식) */
function solution(a, d, included) {
  let sequence = [];
  for (let i = 0; i < included.length; i++) {
    sequence.push(a + d * i);
  }
  return sequence.filter((_, i) => included[i]).reduce((acc, cur) => acc + cur);
}

/* Another approach 01(reduce를 이용하여 included배열을 순회하며 합을 계산) */
function solution(a, d, included) {
  return included.reduce((acc, flag, i) => {
    return flag ? acc + a + d * i : acc;
  }, 0);
}
