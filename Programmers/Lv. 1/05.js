//정수 제곱근 판별
function solution(n) {
  n = Math.sqrt(n);
  let num = Number.isInteger(n);
  if (num) {
    return (n + 1) * (n + 1);
  } else {
    return -1;
  }
}

//(1)
// function solution(n) {
//   n = Math.sqrt(n);
//   //정수는 1로 나눌때 나머지가 항상 0이다.
//   const res = n % 1 === 0 ? Math.pow(n + 1, 2) : -1;
//   return res;
// }
