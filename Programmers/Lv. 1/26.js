//약수의 개수와 덧셈
function solution(left, right) {
  let res = 0;
  for (let i = left; i <= right; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) cnt++;
    }
    if (cnt % 2 === 0) res += i;
    else res -= i;
  }
  console.log(res);
}
solution(13, 17);

//(1) : 제곱근이 정수면 약수의 개수가 홀수다...!
// function solution(left, right) {
//   var answer = 0;
//   for (let i = left; i <= right; i++) {
//     if (Number.isInteger(Math.sqrt(i))) {
//       answer -= i;
//     } else {
//       answer += i;
//     }
//   }
//   return answer;
// }
