//약수의 합
function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

//(1)
// function solution(n) {
//   var answer = 0;
//   let i;
//   for (i = 1; i <= Math.sqrt(n); i++) {
//     if (!(n % i)) {
//       answer += i + n / i;
//     }
//   }
//   i--;
//   return i === n / i ? answer - i : answer;
// }

//(2)
// function solution(n, a = 0, b = 0) {
//   return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
// }
