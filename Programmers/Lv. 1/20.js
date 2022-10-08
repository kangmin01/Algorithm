// 없는 숫자 더하기
function solution(numbers) {
  let arr = Array.from({ length: 9 }, (v, i) => i + 1);
  for (let i = 0; i < numbers.length; i++) {
    let ind = arr.indexOf(numbers[i]);
    if (ind === -1) continue;
    arr.splice(ind, 1);
  }
  console.log(arr.reduce((a, b) => a + b));
}
solution([1, 2, 3, 4, 6, 7, 8, 0]);

//(1) wow...
// function solution(numbers) {
//   return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }

//(2)
// function solution(numbers) {
//   let answer = 0;
//   for (let i = 0; i <= 9; i++) {
//     if (!numbers.includes(i)) answer += i;
//   }
//   return answer;
// }
