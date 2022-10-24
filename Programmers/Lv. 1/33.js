//3진법 뒤집기

// toString(n) => 10진수를 n진수로 변환
// parseInt('str',n) => 문자열을 n진수로 변환

function solution(n) {
  let arr = [];
  while (n > 0) {
    arr.push(n % 3);
    n = Math.floor(n / 3);
  }
  let res = arr.reduce((acc, cur, idx) => {
    return (acc += cur * Math.pow(3, arr.length - 1 - idx));
  }, 0);
  console.log(res);
}

solution(45); //7

//(1) WOW
// const solution = (n) => {
//   return parseInt([...n.toString(3)].reverse().join(""), 3);
//   //   return parseInt(n.toString(3).split("").reverse().join(""), 3);
// };

//(2)
// function solution(n) {
//   const answer = [];
//   while (n !== 0) {
//     answer.unshift(n % 3);
//     n = Math.floor(n / 3);
//   }
//   return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
// }
