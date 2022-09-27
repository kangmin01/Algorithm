//자릿수 더하기
function solution(n) {
  let arr = Array.from(n.toString()).map(Number);
  let sum = arr.reduce((a, b) => a + b);
  return sum;
}

//(1)
// function solution(n) {
//   return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
// }

//(2)
// function solution(n) {
//   return n
//     .toString()
//     .split("")
//     .reduce((a, b) => a + parseInt(b), 0);
// }
