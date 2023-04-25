// answer01
function solution(start, end) {
  let result = [];
  for (let i = start; end <= i; i--) {
    result.push(i);
  }
  return result;
}

// answer02
function solution(start, end) {
  return Array.from({ length: start - end + 1 }, () => {
    return start--;
  });
}

// answer03
function solution(start, end) {
  return Array.from(Array(start - end + 1), (_, i) => start - i);
}
