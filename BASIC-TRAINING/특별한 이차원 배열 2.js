/* My Answer 01 */
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }
  return 1;
}
/* 



*/
/* My Answer 02(01에서 조건문에 'i !== j'를 추가하여 불필요한 과정을 제거) */
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }
  return 1;
}
