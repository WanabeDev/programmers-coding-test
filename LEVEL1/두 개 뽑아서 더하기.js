/* ✨ My Answer 01 ✨(통과된 풀이이지만 for가 불필요한 연산을 많이 하게되어 아쉬운 풀이)*/
function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        result.push(numbers[i] + numbers[j]);
      }
    }
  }
  return [...new Set(result)].sort((a, b) => a - b);
}
/* 


*/
/* ✨ My Answer 02 ✨(set을 이용하여 중복되지 않는 값만 push하는 방법)*/
function solution(numbers) {
  const result = [];
  const numberSet = new Set();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (!numberSet.has(sum)) {
        numberSet.add(sum);
        result.push(sum);
      }
    }
  }

  return result.sort((a, b) => a - b);
}
