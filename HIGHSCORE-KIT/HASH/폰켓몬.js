/* My Answer 01 🌧️ */
function solution(nums) {
  const getMon = nums.length / 2;
  // new Set을 이용하면 중복이 걸러지는데 아쉬운 풀이방법
  const monTypes = nums.filter((num, index, self) => {
    return self.indexOf(num) === index;
  }).length;

  return getMon > monTypes ? monTypes : getMon;
}
/* 


*/
/* Another Approach 01 👍(new Set()을 활용한 풀이) */
function solution(nums) {
  const max = nums.length / 2;
  const arrLength = [...new Set(nums)].length;

  return arrLength > max ? max : arrLength;
}
