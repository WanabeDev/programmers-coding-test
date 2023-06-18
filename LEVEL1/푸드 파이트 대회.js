/* ✨ My Answer 01 ✨(map과 reverse 활용) */
function solution(food) {
  let result = "";

  // 먹을 음식 양을 구하여 순서대로 나열
  food = food.slice(1).map((e, i) => {
    const divFood = Math.floor(e / 2);
    result += ("" + (i + 1)).repeat(divFood);
  });

  // 상대 선수 음식 세팅
  let reverse = [...result].reverse().join("");

  return result + 0 + reverse;
}
