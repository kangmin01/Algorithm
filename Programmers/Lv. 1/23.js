//내적
//아 reduce 메서드를....
function solution(a, b) {
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    res += a[i] * b[i];
  }
  return console.log(res);
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);

//(1)
// function solution(a, b) {
//   return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
// }

//(2)
// function solution(a, b) {
//   var answer = a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
//   return answer;
// }
