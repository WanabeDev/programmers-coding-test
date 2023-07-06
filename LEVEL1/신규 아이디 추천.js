/* ✨ My Answer 01 ✨ */
function solution(new_id) {
  let id = new_id; // 원본 new_id 값을 보존하기 위해 새로운 변수 id에 할당

  id = id
    .toLowerCase() // 1. 모든 대문자를 소문자로 변환
    .replace(/[^a-z0-9\-_.]/g, "") // 2. 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
    .replace(/^\.+|\.+$/g, "") // 3. 문자열의 시작과 끝에 있는 마침표(.) 제거
    .replace(/\.+/g, ".") // 4. 여러 개의 마침표(.)를 하나의 마침표(.)로 치환
    .slice(0, 15) // 5. 문자열을 최대 길이 15로 제한
    .replace(/^\.+|\.+$/g, ""); // 6. 문자열의 시작과 끝에 있는 마침표(.) 제거

  const idLen = id.length;

  if (idLen <= 0) id = "a"; // 7. 빈 문자열인 경우 문자 'a'를 대입
  if (idLen <= 1) id = id.repeat(3); // 8. 문자열의 길이가 1인 경우 문자열을 3번 반복하여 대입
  if (idLen === 2) id += id[1]; // 9. 문자열의 길이가 2인 경우 두 번째 문자를 추가하여 길이를 3으로 만듦

  return id; // 최종 결과 반환
}
/* 



*/
/* ✨ My Answer 02 ✨ */
function solution(new_id) {
  let id = new_id
    .toLowerCase() // 1. 모든 대문자를 소문자로 변환
    .replace(/[^\w.-]/g, "") // 2. 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
    .replace(/\.{2,}/g, ".") // 3. 여러 개의 마침표를 하나의 마침표로 치환
    .replace(/^\.|\.$/g, "") // 4. 문자열의 시작과 끝에 있는 마침표(.) 제거
    .slice(0, 15); // 5. 문자열을 최대 길이 15로 제한

  if (id.endsWith(".")) id = id.slice(0, id.length - 1); // 6. 문자열의 끝이 마침표(.)로 끝나면 해당 마침표 제거
  if (id.length <= 0) id = "a"; // 7. 빈 문자열인 경우 문자 'a'를 대입
  if (id.length <= 2) id = id.padEnd(3, id[id.length - 1]); // 8. 문자열의 길이가 2 이하인 경우 문자열을 3자리까지 반복하여 대입

  return id; // 최종 결과 반환
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
