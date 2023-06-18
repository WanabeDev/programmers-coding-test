/* My Answer 01(두 배열을 n길이의 2진수로 변환하여 암호를 해독) */
function solution(n, arr1, arr2) {
  const result = [];

  // 두 배열의 원소들을 n길이의 2진수로 변환
  for (let i = 0; i < n; i++) {
    const binary1 = arr1[i].toString(2).padStart(n, "0").slice(-n);
    const binary2 = arr2[i].toString(2).padStart(n, "0").slice(-n);
    let row = "";

    // 두 배열을 비교하여 값에 따라 '#'또는 공백처리
    for (let j = 0; j < n; j++) {
      row += binary1[j] === "1" || binary2[j] === "1" ? "#" : " ";
    }

    result.push(row);
  }

  return result;
}
/* 



*/
/* Another Approach 01 */
function solution(n, arr1, arr2) {
  return arr1.map((v, i) =>
    // '|'연산자를 이용하여 두 십진수를 내부적으로 이진수로 변환하여 OR연산을 수행(OR연산:둘중 하나만 1이어도 1을 반환)
    // replace를 이용하여 1을 '#'으로, 0을 공백으로 처리
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

// n과 문자열 s의 길이를 비교하여 필요한 만큼 0을 추가
const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};
