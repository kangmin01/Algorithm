// 제일 작은 수 제거하기
function solution(arr) {
  let minNum = Math.min(...arr);
  arr = arr.filter((x) => x !== minNum);
  return arr.length === 0 ? console.log([-1]) : console.log(arr);
}
solution([4, 3, 2, 1]);

//(1)
// function solution(arr) {
//   arr.splice(arr.indexOf(Math.min(...arr)), 1);
//   if (arr.length < 1) return [-1];
//   console.log(arr);
// }
