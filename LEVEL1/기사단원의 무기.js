/* 🚫 Wrong Answer 01(일부 테스트를 시간초과) 🚫 */
function solution(number, limit, power) {
  const divisors = [];

  for (let i = 1; i <= number; i++) {
    let divCount = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divCount++;
      }
    }

    divisors.push(divCount);
  }

  const result = divisors.reduce((acc, cur) => {
    if (cur > limit) {
      return acc + power;
    } else {
      return acc + cur;
    }
  }, 0);

  return result;
}
/* 



*/
/* 🚫 Wrong Answer 02(여전히 일부 테스트를 시간초과) 🚫 */
function solution(number, limit, power) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    let divCount = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divCount++;
      }
    }

    if (divCount > limit) {
      result += power;
    } else {
      result += divCount;
    }
  }

  return result;
}
/* 



*/
/* ✨ My Answer 01 ✨(약수는 짝을 이룬다는 점을 이용하여, 약수를 구하는 과정을 단축) */
function solution(number, limit, power) {
  let result = 0;

  for (let i = 1; i <= number; i++) {
    let divCount = 0;

    // if문을 따로 두는 것으로 약수이자 제곱수인 경우에 모두 대비
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        divCount += 2; // 약수는 짝을 이루기 때문에 2씩 증가(과정단축)
      }

      if (j * j === i) {
        divCount--; // 제곱수인 경우 중복카운트 되므로 1 감소(과정단축)
      }
    }

    // 약수의 개수가 limit를 넘는 경우
    if (divCount > limit) {
      result += power;
    } else {
      result += divCount;
    }
  }

  return result;
}
