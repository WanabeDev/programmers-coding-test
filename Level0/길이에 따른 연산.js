// answer01
function solution(num_list) {
  if (num_list.length <= 10) {
    return num_list.reduce((x, y) => x * y);
  } else {
    return num_list.reduce((x, y) => x + y);
  }
}

// answer02
function solution(num_list) {
  return num_list.length <= 10
    ? num_list.reduce((x, y) => x * y)
    : num_list.reduce((x, y) => x + y);
}
