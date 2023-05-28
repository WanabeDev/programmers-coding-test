/* 🚫 Wrong Answer 01(대부분의 테스트를 통과하지 못한 코드) */
function solution(str, pat) {
  const regex = new RegExp(pat, "g");
  let count = 0;
  while (regex.exec(str) !== null) {
    count++;
  }

  return count + 1;
}
/*



*/
/* My Answer 01(indexOf를 이용하여 문자열 내 패턴 등장회수를 카운트) */
function solution(str, pat) {
  let count = 0;
  let index = str.indexOf(pat);

  while (index !== -1) {
    count++;
    index = str.indexOf(pat, index + 1);
  }

  return count;
}
/*



*/
/* Another Approach 01(reduce를 이용하여 문자열 일부를 잘라낸 값과 패턴을 비교) */
function solution(str, pat) {
  return [...str].reduce((acc, _, i) => {
    const curStr = str.slice(i, pat.length + i);
    if (curStr === pat) return acc + 1;
    return acc;
  }, 0);
}
/*



*/
/* Another Approach 02(for 이용하여 slice의 범위를 옮겨가며 패턴과 비교) */
function solution(myString, pat) {
  let count = 0;

  for (let i = 0; i <= myString.length - pat.length; i++) {
    if (myString.slice(i, i + pat.length) === pat) {
      count++;
    }
  }

  return count;
}
