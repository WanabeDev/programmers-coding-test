/* ✨ My Answer 01 ✨ */
function solution(quiz) {
  const result = [];

  quiz.forEach((form) => {
    const [x, oper, y, , z] = form.split(" ");
    const X = Number(x),
      Y = Number(y),
      Z = Number(z);

    let sum = 0;
    if (oper === "+") sum = X + Y;
    else sum = X - Y;

    sum === Z ? result.push("O") : result.push("X");
  });

  return result;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(quiz) {
  return quiz.map((t) => {
    const [calc, result] = t.split(" = ");
    const sign = calc.includes("+") ? 1 : -1;
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    return +a + +b * sign === +result ? "O" : "X";
  });
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(quiz) {
  let answer = [];
  quiz.forEach((val) => {
    const [x, sign, y, , z] = val.split(" ");
    let sum = 0;
    if (sign === "+") {
      sum = Number(x) + Number(y);
    } else {
      sum = Number(x) - Number(y);
    }
    sum === Number(z) ? answer.push("O") : answer.push("X");
  });
  return answer;
}

if (oper === "+") sum = X + Y;
else sum = X - Y;
