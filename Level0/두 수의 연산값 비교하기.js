// answer 01
function solution(a, b) {
  const combined = +`${a}${b}`;
  const multiple = 2 * a * b;
  return multiple > combined ? multiple : combined;
}

// Another approach 01
function solution(a, b) {
  return Math.max(+(a.toString() + b.toString()), 2 * a * b);
}
