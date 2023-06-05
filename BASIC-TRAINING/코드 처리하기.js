/* My Answer 01 */
function solution(code) {
  let result = "";
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      mode = (mode + 1) % 2;
    } else if ((mode === 0 && i % 2 === 0) || (mode === 1 && i % 2 === 1)) {
      result += code[i];
    }
  }

  return result === "" ? "EMPTY" : result;
}

/* Another Approach 01(reduce를 활용하여 v가 1인 경우 모드를 바꿔가며 odd가 false인 경우에 v를 결과에 추가) */
function solution(code) {
  let odd = false;
  return (
    Array.from(code).reduce((acc, v, i) => {
      if (v === "1") {
        odd = !odd;
        return acc;
      }
      return i % 2 === (odd ? 1 : 0) ? acc + v : acc;
    }, "") || "EMPTY"
  );
}
