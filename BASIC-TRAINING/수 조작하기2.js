/* My Answer 01 */
function solution(numnumLog) {
  const result = [];

  for (let i = 1; i < numLog.length; i++) {
    const diff = numLog[i] - numLog[i - 1];
    if (diff === 1) {
      result.push("w");
    } else if (diff === -1) {
      result.push("s");
    } else if (diff === 10) {
      result.push("d");
    } else if (diff === -10) {
      result.push("a");
    }
  }

  return result.join("");
}

/* My Answer 02(01의 응용, 다항연산자 활용) */
function solution(numLog) {
  let result = "";

  for (let i = 1; i < numLog.length; i++) {
    const diff = numLog[i] - numLog[i - 1];
    result +=
      diff === 1
        ? "w"
        : diff === -1
        ? "s"
        : diff === 10
        ? "d"
        : diff === -10
        ? "a"
        : "";
  }

  return result;
}

// Another approach 01(별도의 push없이 map을 이용한 방법)
function solution(numLog) {
  return numLog
    .map((v, i) => {
      if (i === 0) return "";
      const prevV = numLog[i - 1];
      if (prevV + 1 === v) return "w";
      if (prevV - 1 === v) return "s";
      if (prevV + 10 === v) return "d";
      if (prevV - 10 === v) return "a";
      return "";
    })
    .join("");
}
