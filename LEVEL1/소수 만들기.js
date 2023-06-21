/* ✨ My Answer 01 ✨ (3중 for문을 활용한 방법) */
function solution(nums) {
  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        // nums내 3개의 수를 더한 경우의 수
        const sum = nums[i] + nums[j] + nums[k];

        // 소수를 체크하는 isPrime함수를 통해 소수에 해당하는 값만 count
        if (isPrime(sum)) {
          count++;
        }
      }
    }
  }

  return count;
}

// sum 내에서 소수에 해당하는 값만 반환
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
