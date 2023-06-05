/* My Answer 01 */
function solution(order) {
  const regex = /ame|any/;
  return order.reduce((cost, menu) => {
    if (regex.test(menu)) {
      return cost + 4500;
    } else {
      return cost + 5000;
    }
  }, 0);
}
/* 



*/
/* My Answer 02(다항연산자를 이용하여 위 과정 축소) */
function solution(order) {
  const regex = /ame|any/;
  return order.reduce(
    (cost, menu) => cost + (regex.test(menu) ? 4500 : 5000),
    0
  );
}
