/* 🌧️ My Answer 01 🌧️ (가독성과 중복된 코드가 아쉬운 풀이)*/
function solution(polynomial) {
  // 다항식을 항 단위로 분리하여 배열로 저장
  const polyArr = polynomial.split(" + ");
  let arr1 = []; // x를 가진 항의 계수를 저장할 배열
  let arr2 = []; // 상수 항을 저장할 배열

  // 다항식을 항 단위로 분리한 배열을 순회하며 처리
  for (const char of polyArr) {
    if (char === "x") {
      arr1.push("1"); // "x"를 만나면 계수를 1로 간주하여 arr1 배열에 추가
    } else if (/x/.test(char)) {
      arr1.push(char.length > 1 ? char.slice(0, -1) : "1"); // "x"와 계수를 추출하여 arr1 배열에 추가
    } else {
      arr2.push(char); // 숫자만 있는 경우 arr2 배열에 추가
    }
  }

  // 계산 결과에 따라 다항식을 생성
  if (arr1.length === 0 && arr2.length < 2) {
    return arr2[0];
  } else {
    // arr1의 계수를 모두 합한 값
    const sumX = arr1.reduce((a, c) => +a + +c, 0);
    // arr2의 항을 모두 합한 값
    const sumNum = arr2.reduce((a, c) => +a + +c, 0);

    if (arr2.length === 0) {
      return sumX === 0 ? "0" : sumX === 1 ? "x" : sumX + "x";
    } else if (arr1.length === 0) {
      // arr1에 "x" 항이 없는 경우 arr2에 있는 상수 항들의 합을 문자열로 반환
      return sumNum.toString();
    } else {
      // arr1과 arr2에 항이 모두 있는 경우 arr1에 있는 항의 계수와 arr2에 있는 항을 모두 합하여 결과 반환
      return `${sumX === 0 ? "0" : sumX === 1 ? "x" : sumX + "x"} + ${sumNum}`;
    }
  }
}
/* 



*/
/* ✨ My Answer 01 ✨ */
function solution(polynomial) {
  // 다항식을 항 단위로 분리
  const polyArr = polynomial.split(" + ");
  let xSum = 0; // x 항의 계수
  let numSum = 0; // 상수 항의 값

  // 다항식을 항 단위로 분리한 배열을 순회하며 처리
  for (const term of polyArr) {
    if (term === "x") {
      xSum += 1; // "x" 항을 만나면 계수를 1로 간주하여 누적
    } else if (term.includes("x")) {
      xSum += parseInt(term.slice(0, -1)); // "x" 항과 계수를 추출하여 누적
    } else {
      numSum += parseInt(term); // 상수 항의 값을 누적
    }
  }

  let result = "";
  if (xSum === 0 && numSum === 0) {
    // "x" 항의 계수와 상수 항의 값이 모두 0인 경우
    result = "0";
  } else {
    if (xSum !== 0) {
      // "x" 항의 계수가 0이 아닌 경우
      result += xSum === 1 ? "x" : xSum + "x"; // "x" 항의 계수에 따라 결과 문자열 생성
    }
    if (numSum !== 0) {
      // 상수 항의 값이 0이 아닌 경우
      result += (xSum === 0 ? "" : " + ") + numSum; // 상수 항의 값을 문자열에 추가
    }
  }

  return result;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(polynomial) {
  // 다항식을 항 단위로 분리
  const arr = polynomial.split(" + ");

  // "x"를 포함한 항들을 처리하고 계수를 더하여 xNum 계산
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((n) => n.replace("x", "") || "1")
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  // 숫자만 있는 항들을 처리하고 계수를 더하여 num 계산
  const num = arr
    .filter((n) => !isNaN(n))
    .reduce((acc, cur) => acc + parseInt(cur, 10), 0);

  let answer = [];

  // xNum이 0이 아니면 xNum을 문자열로 추가 (계수 1인 경우 제외)
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`);

  // num이 0이 아니면 num을 문자열로 추가
  if (num) answer.push(num);

  // 최종적으로 생성된 항들을 "+"로 연결하여 반환
  return answer.join(" + ");
}
