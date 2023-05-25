// answer 01
function solution(a, b, c) {
  if (a === b && b === c) {
    return (
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    );
  } else if (a === b || a === c || b === c) {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  } else {
    return a + b + c;
  }
}

// answer 02
function solution(a, b, c) {
  const sum = a + b + c;
  const squareSum = a ** 2 + b ** 2 + c ** 2;
  const cubeSum = a ** 3 + b ** 3 + c ** 3;

  if (a === b && b === c) {
    return sum * squareSum * cubeSum;
  } else if (a === b || a === c || b === c) {
    return sum * squareSum;
  } else {
    return sum;
  }
}
