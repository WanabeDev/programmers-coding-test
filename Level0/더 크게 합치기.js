// answer01
function solution(a, b) {
  const ab = Number(`${a}${b}`);
  const ba = Number(`${b}${a}`);
  return ab >= ba ? ab : ba;
}

// answer02
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}

// answer03
function solution(a, b) {
  return Math.max(Number(a + "" + b), Number(b + "" + a));
}
