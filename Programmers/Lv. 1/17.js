//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let newArr = arr.filter((a) => a % divisor === 0);
  newArr = newArr.sort((a, b) => a - b);
  return newArr.length !== 0 ? console.log(newArr) : console.log([-1]);
}
solution([2, 36, 1, 3], 1);

//(1)
// function solution(arr, divisor) {
//   var answer = arr.filter((v) => v % divisor == 0);
//   return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
// }
