/* My Answer 01(연산자와 비교함수를 담은 객체를 생성 하고 n,m을 인자로 호출) */
function solution(ineq, eq, n, m) {
  const operators = {
    "<=": (x, y) => x <= y,
    ">=": (x, y) => x >= y,
    "<!": (x, y) => x < y,
    ">!": (x, y) => x > y,
  };

  return operators[ineq + eq](n, m) ? 1 : 0;
}

/* Another Approach 01(if 활용) */
function solution(ineq, eq, n, m) {
  if (eq === "=" && n === m) return 1;
  if (ineq === "<" && n < m) return 1;
  if (ineq === ">" && n > m) return 1;
  return 0;
}
