/* My Answer 01(두 배열의 원소가 같아질때까지 연산결과를 두개의 배열에 나눠 저장) */
function solution(arr) {
  let preResult = [];
  let curResult = [...arr];
  let count = 0;

  // 같은 원소를 가진 두 배열은 '==='를 통해 비교 불가능하므로 JSON.stringify()를 활용해 문자열로 변환 후 비교
  while (JSON.stringify(preResult) !== JSON.stringify(curResult)) {
    preResult = curResult;
    curResult = curResult.reduce((acc, num) => {
      acc.push(
        num >= 50 && num % 2 === 0
          ? num / 2
          : num < 50 && num % 2 === 1
          ? num * 2 + 1
          : num
      );
      return acc;
    }, []);
    count++;
  }

  return count - 1;
}
/* 




*/
/* My Answer 02(01 답변의 변형) */
function solution(arr) {
  let curResult = [...arr];
  let count = 0;

  while (true) {
    const preResult = curResult;
    curResult = curResult.reduce((acc, num) => {
      acc.push(
        num >= 50 && num % 2 === 0
          ? num / 2
          : num < 50 && num % 2 === 1
          ? num * 2 + 1
          : num
      );
      return acc;
    }, []);
    count++;

    if (JSON.stringify(preResult) === JSON.stringify(curResult)) {
      return count - 1;
    }
  }
}
/* 




*/
/* Another Approach 01(주어진 배열의 모든 요소들이 조건을 만족할 때까지 map을 사용하여 해당 연산을 수행 후 연산회수를 카운트 함) */
function solution(arr, n = 0) {
  // 배열의 모든 요소들이 50 이상의 홀수이거나 50 미만의 짝수가 될 때까지 반복
  while (
    !arr.every((x) => (x >= 50 && x % 2 === 1) || (x < 50 && x % 2 === 0))
  ) {
    // map을 사용하여 해당 연산을 수행하고, 각 연산이 수행될 때마다 연산회수 n을 증가
    arr = arr.map((x) => {
      if (x >= 50 && x % 2 === 0) return x / 2;
      if (x < 50 && x % 2 === 1) return x * 2 + 1;
      return x;
    });
    n++;
  }
  return n;
}
