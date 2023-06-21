/* 🚫 Wrong Answer 01 🚫(유효성 검사를 통과하지 못함) */
function solution(n) {
  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
/* 



*/
/* ✨ My Answer 01 ✨ (에라토스테네스의 체 알고리즘을 적용하여 최대한 소수가 아닌 값들을 걸러내고 카운트 하는 방식) */
function solution(n) {
  const primes = new Array(n + 1).fill(true); // 초기에 모든 수를 소수로 설정
  primes[0] = primes[1] = false; // 0과 1은 소수가 아님

  // 에라토스테네스의 체 알고리즘 적용
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false; // i의 배수들을 소수가 아닌 것으로 체크
      }
    }
  }

  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      count++;
    }
  }

  return count;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️(set을 이용한 방법) */
function solution(n) {
  const s = new Set();

  // 1부터 n까지의 홀수를 set에 추가
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2); //짝수 중 유일한 소수 2를 추가

  // 소수인 수의 배수들을 제거
  for (let j = 3; j < Math.sqrt(n); j++) {
    // j가 소수인 경우
    if (s.has(j)) {
      // j의 배수들을 제거
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}
