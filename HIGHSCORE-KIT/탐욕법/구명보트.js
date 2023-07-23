/* ✨ My Answer 01 ✨ */
function solution(peoples, limit) {
  let boat = 0;
  let left = 0;
  let right = peoples.length - 1;

  peoples.sort((a, b) => a - b);

  while (left <= right) {
    // 가장 가벼운 사람과 가장 무거운 사람을 비교하여 보트에 태울 수 있는지 확인
    if (peoples[left] + peoples[right] <= limit) {
      left++; // 가장 가벼운 사람을 보트에 태우고 다음 사람으로 이동
    }

    right--; // 조건문과 관계없이 가장 무거운 사람은 항상 보트에 태워야 하므로 항상 이동
    boat++; // 보트 개수 증가
  }

  return boat;
}
