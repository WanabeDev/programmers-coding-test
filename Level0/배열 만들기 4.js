// My Answer 01
function solution(arr) {
  const stk = [];

  for (let i = 0; i < arr.length; i++) {
    while (stk.length > 0 && arr[i] <= stk[stk.length - 1]) {
      stk.pop();
    }
    stk.push(arr[i]);
  }

  return stk;
}
