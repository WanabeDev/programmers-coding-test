function solution(num_list) {
  const arrMul = num_list.reduce((a, c) => a * c, 1);
  const arrSqr = Math.pow(
    num_list.reduce((a, c) => a + c, 0),
    2
  );
  return arrMul < arrSqr ? 1 : 0;
}
