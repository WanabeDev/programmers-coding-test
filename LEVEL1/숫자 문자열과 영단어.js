/* 🚫 Wrong Answer 01 🚫(테스트 5,7,8 불통) */
function solution(s) {
  const cards = [
    ["zero", 0],
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
  ];

  for (let [c, i] of cards) {
    if (s.includes(c)) {
      s = s.replace(c, i);
    }
  }

  return +s;
}
/* 



*/
/* ✨ My Answer 01 ✨(s내에 문자가 존재하지 않을 때까지 반복하도록 while문을 추가) */
function solution(s) {
  const cards = [
    ["zero", 0],
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
  ];

  while (!isNaN(s)) {
    for (let [c, i] of cards) {
      if (s.includes(c)) {
        s = s.replace(c, i);
      }
    }
  }

  return +s;
}
/* 



*/
/* 🤔 Another Apporach 01 🤔(숫자 단어를 기준으로 split하여 인덱스로 대체하는 방법) */
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
