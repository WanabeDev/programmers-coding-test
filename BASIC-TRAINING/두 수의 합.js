/* My Answer 01 (BigInt를 활용하여 길이의 제약 없이 정수 연산 수행)*/
function solution(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

/* 
const a = "582";
const b = "734";

console.log(BigInt(a) + BigInt(b).toString()); // "582734"(x)
console.log((BigInt(a) + BigInt(b)).toString()); // "1316"(O)

bigInt끼리의 연산에서 위와 같이 괄호 여부에 따라 출력 결과가 달라진다.
첫번째 코드는 BigInt(b)가 BigInt가 된 후 toString로 인해 문자열로 변환되어
결국 BigInt와 문자열간의 덧셈 연산이 되고 이는 문자열 연결로 이어지기 때문이다.
*/
