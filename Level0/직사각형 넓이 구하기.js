/* ✨ My Answer 01 ✨ */
function solution(dots) {
  const x = [];
  const y = [];

  for (const dot of dots) {
    x.push(dot[0]);
    y.push(dot[1]);
  }

  const width = Math.max(...x) - Math.min(...x);
  const height = Math.max(...y) - Math.min(...y);

  return width * height;
}
