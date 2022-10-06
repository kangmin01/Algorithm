//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let newArr = arr.filter((a) => a % divisor === 0);
  newArr = newArr.sort((a, b) => a - b);
}
solution([2, 36, 1, 3], 1);
