/* ✨ My Answer 01 ✨ (new Date를 활용한 방법) */
function solution(a, b) {
  const date = new Date(`2016-${a}-${b}`);
  const answer = {
    0: "SUN",
    1: "MON",
    2: "TUE",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT",
  };
  return answer[date.getDay()];
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ (new Date를 활용하지 않은 풀이방법) */
function getDayName(a, b) {
  var dayList = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var daySum;
  if (a < 2) {
    daySum = b - 1;
  } else {
    daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  }
  return dayList[daySum % 7];
}
