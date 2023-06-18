/* My Answer 01(p의 길이만큼 slice한 배열 내에서 p보다 작은 수 체크) */
function solution(t, p) {
  let arr = [];

  for (let i = 0; i < t.length; i++) {
    let num = t.slice(i, i + p.length);
    if (num.length === p.length) {
      arr.push(+num);
    }
  }
  return arr.filter((n) => n <= +p).length;
}
/* 



*/
/* Another Approach 01(01보다 간단한 방법 별도의 배열 생성 없이 체크 후count) */
function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}
