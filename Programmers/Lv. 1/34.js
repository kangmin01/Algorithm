//예산

// <놓친 부분>
// 1. sort() 제대로 작성X -> [10,2] 이런식으로 배열됨
// 2. (신청 금액 합계 < 예산) 경우 서술X
// 3. (신청 금액 합계 == 예산) 경우에 d.length 라고 잘못 생각함
function solution(d, budget) {
  d.sort((a, b) => a - b);
  let sum = 0;
  let cnt = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum > budget) return cnt;
    else if (sum === budget) return cnt + 1;
    cnt += 1;
  }
  return d.length;
}

solution([1, 1, 1], 2);

//(1)
// function solution(d, budget) {
//   return ~(
//     ~d
//       .sort((a, b) => a - b)
//       .map((v) => (budget -= v))
//       .findIndex((v) => v < 0) || ~d.length
//   );
// }

//(2)
// function solution(d, budget) {
//   d.sort((a, b) => a - b);
//   while (d.reduce((a, b) => a + b, 0) > budget) d.pop();
//   return d.length;
// }
