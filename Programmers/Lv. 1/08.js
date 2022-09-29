//하샤드 수
function solution(x) {
  let harshad = x;
  x = x
    .toString()
    .split("")
    .reduce((a, b) => +a + +b, 0);
  let res = harshad % x === 0 ? true : false;
  return res;
}

solution(10);

//(1)
// function Harshad(n) {
//   return !(n % (n + "").split("").reduce((a, b) => +b + +a));
// }

//(2)
// function solution(x) {
//   let num = x;
//   let sum = 0;
//   do {
//     sum += x % 10;
//     x = Math.floor(x / 10);
//   } while (x > 0);

//   return !(num % sum);
// }
