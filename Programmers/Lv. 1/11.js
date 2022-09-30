//x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }
  console.log(arr);
}
solution(2, 5); //[ 2, 4, 6, 8, 10 ]

//(1)
// function solution(x, n) {
//   return Array(n)
//     .fill(x)
//     .map((v, i) => (i + 1) * v);
// }
