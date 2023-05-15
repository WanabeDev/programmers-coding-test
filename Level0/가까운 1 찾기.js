// Answer 01
function solution(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }
  return -1;
}

// Another approach 01(indexOf를 활용하여 i부터 시작하여 1을 찾음)
const solution = (a, i) => a.indexOf(1, i);
