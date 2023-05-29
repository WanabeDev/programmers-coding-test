/* My Answer 01 () */
function solution(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; ) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else if (stk.length > 0) {
      if (stk[stk.length - 1] === arr[i]) {
        stk.pop();
      } else {
        stk.push(arr[i]);
      }
    }
    i++;
  }
  return stk.length === 0 ? [-1] : stk;
}
/*



*/
/* My Answer 02 (01 풀이를 바탕으로 코드 간소화 및 수정) */
function solution(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] !== stk[stk.length - 1] ? stk.push(arr[i]) : stk.pop();
  }
  return stk.length === 0 ? [-1] : stk;
}
/*



*/
/* Another Approach 01 (reduce를 이용하여 문자열 일부를 잘라낸 값과 패턴을 비교) */
function solution(arr) {
  let stk = [];
  arr.forEach((x, i) => {
    if (x !== stk[stk.length - 1]) {
      stk.push(x);
    } else {
      stk.splice(-1);
    }
  });

  if (stk.length == 0) {
    stk = [-1];
  }
  return stk;
}
