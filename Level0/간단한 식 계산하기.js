// answer 01
function solution(binomial) {
  return new Function(`return ${binomial}`)();
}

// answer 02(eval은 보안상의 이유로 권장되지 않음)
function solution(binomial) {
  return eval(binomial);
}
