/* My Answer 01 */
function solution(str) {
  // 대,소문자 알파벳으로 이루어진 배열
  const alphabet = Array.from({ length: 52 }, (_, i) =>
    String.fromCharCode((i % 26) + (i < 26 ? 65 : 97))
  );
  // 0으로 이루어진 길이52의 배열
  const result = Array(52).fill(0);

  // str에서 각 알파벳의 개수를 순서대로 담기
  for (let i = 0; i < str.length; i++) {
    result[alphabet.indexOf(str[i])] += 1;
  }
  return result;
}
/*



*/
/* Another Approach 01(for 활용) */
function solution(str) {
  // 0으로 이루어진 길이52의 배열
  const result = Array.from({ length: 52 }, () => 0);

  // 주어진 문자열을 순회하면서 각 문자의 등장 횟수를 계산
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const charCode = char.charCodeAt(0);

    //유니코드 값이 대문자인지 소문자인지 체크하여 해당 문자의 위치에 값을 1 증가
    // 대문자일 경우
    if (charCode >= 65 && charCode <= 90) {
      result[charCode - 65]++;
      // 소문자일 경우
    } else if (charCode >= 97 && charCode <= 122) {
      result[charCode - 71]++;
    }
  }

  return result;
}
/*



*/
/* Another Approach 02(for of 활용) */
function solution(str) {
  // 0으로 이루어진 길이52의 배열
  const result = Array.from({ length: 52 }, () => 0);

  // 주어진 문자열을 순회하면서 각 문자의 등장 횟수를 계산
  for (const char of str) {
    const charCode = char.charCodeAt(0);

    //유니코드 값이 대문자인지 소문자인지 체크하여 해당 문자의 위치에 값을 1 증가
    // 대문자일 경우
    if (charCode >= 65 && charCode <= 90) {
      result[charCode - 65]++;
      // 소문자일 경우
    } else if (charCode >= 97 && charCode <= 122) {
      result[charCode - 71]++;
    }
  }

  return result;
}
/*



*/
/* Another Approach 03(forEach 활용) */
function solution(str) {
  // 0으로 이루어진 길이52의 배열
  const result = Array.from({ length: 52 }, () => 0);

  // 각 문자의 유니코드 값을 기준으로 인덱스를 계산
  str.split("").forEach((char) => {
    const index = char.charCodeAt(0) - (char >= "a" ? 71 : 65);

    // 유효한 인덱스 범위 내에 있는 경우 해당 인덱스에 1 증가
    if (index >= 0 && index < 52) {
      result[index]++;
    }
  });
  return result;
}
