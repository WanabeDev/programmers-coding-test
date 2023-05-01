// answer01(for 활용)
function solution(numbers, n) {
  var sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (sum <= n) {
      sum += numbers[i];
    }
  }
  return sum;
}

// answer02(while 활용)
function solution(numbers, n) {
  let sum = 0;
  let i = 0;
  while (sum <= n && i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

// answer03(reduce 활용)
function solution(numbers, n) {
  const sum = numbers.reduce((acc, cur) => {
    if (acc <= n) {
      return acc + cur;
    } else {
      return acc;
    }
  }, 0);
  return sum;
}

// answer04(forEach 활용)
function solution(numbers, n) {
  let sum = 0;
  numbers.forEach((num) => {
    if (sum <= n) {
      sum += num;
    }
  });
  return sum;
}
