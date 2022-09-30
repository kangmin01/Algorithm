//나머지가 1이 되는 수 찾기
//(n-1)의 가장 작은 약수 구하기 (1 제외)
// => 왜 멍청하게 "num % i === 0" 라고 생각했지.. 걍 "n % x === 1" 하면 되는데
function solution(n) {
  let num = n - 1;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
      break;
    }
  }
}
solution(10);

//(1)
// function solution(n, x = 1) {
//   while (x++) {
//     if (n % x === 1) {
//       return x;
//     }
//   }
// }

//(2)
// function solution(n, x = 0) {
//   return n % x === 1 ? x : solution(n, x + 1);
// }
