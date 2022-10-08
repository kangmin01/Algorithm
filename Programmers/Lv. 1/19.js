//음양 더하기
function solution(absolutes, signs) {
  let res = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === false) absolutes[i] *= -1;
    res += absolutes[i];
  }
  console.log(res);
}
solution([4, 7, 12], [true, false, true]);

//(1)
// function solution(absolutes, signs) {
//   return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
// }
