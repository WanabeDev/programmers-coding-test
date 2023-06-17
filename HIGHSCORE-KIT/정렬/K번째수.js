/* My Answer 01(for를 활용한 풀이) */
function solution(array, commands) {
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    // commands의 요소
    const element = commands[i];
    // i 부터 j범위의 배열을 잘라내 정렬
    const sliceArr = array
      .slice(element[0] - 1, element[1])
      .sort((a, b) => a - b);
    // sliceArr에서 k번째 원소 추출
    const findVal = sliceArr[element[2] - 1];

    result.push(findVal);
  }

  return result;
}
/* 



*/
/* My Answer 02(map과 구조분해 할당을 활용한 풀이) */
function solution(array, commands) {
  var result = [];

  commands.map((command) => {
    // 배열의 각 요소를 분해하여 i, j, k로 할당
    const [i, j, k] = command;
    // i 부터 j범위의 배열을 잘라내 정렬 후 k번째 원소 추출
    const targetNum = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];

    result.push(targetNum);
  });

  return result;
}
