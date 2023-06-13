/* My Answer 01(filter를 활용하여 연속된 두 값을 비교하여 필터링) */
function solution(arr) {
  return arr.filter((e, i) => e !== arr[i + 1]);
}
/* 


*/
/* Another Approach 01(for를 활용한 무난한 방법) */
function solution(arr) {
  var answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}
