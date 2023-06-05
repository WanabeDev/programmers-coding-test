/* My Answer 01(arr의 길이와 제일 인접한 2의 거듭제곱 값을 구하여 0으로 채움) */
function solution(arr) {
  let len = arr.length;
  const powerArrLen = Math.pow(2, Math.ceil(Math.log2(len)));
  //len값이 2의 거듭제곱이라면 len을 2진수로 했을때 맨 왼쪽 1개의 비트만 1,len-1을 2진수로 했을 때 맨 왼쪽 1개의 비트만 0이라는 점을 이용
  if ((len & (len - 1)) === 0) {
    return arr;
  } else {
    arr = [...arr, ...Array(powerArrLen - len).fill(0)];
  }
  return arr;
}
/*



*/
/* Another Approach 01(l이 2의 거듭제곱이면 l과 -l이 같은 비트패턴을 가진다는 점을 이용) */
const solution = (a) => {
  let l = a.length;
  while ((l & -l) != l) a.push(0), (l = a.length);
  return a;
};
/*



*/
/* Another Approach 02(2의 거듭제곱 길이를 가진 배열을 바로 생성) */
function solution(arr) {
  return [
    ...arr,
    ...Array(2 ** Math.ceil(Math.log2(arr.length)) - arr.length).fill(0),
  ];
}
